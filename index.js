// functions/index.js
// Función en la nube que recibe la petición del terapeuta (desde ejercicios.html)
// y llama a la API de Anthropic usando la clave secreta guardada en el servidor.
// El navegador del terapeuta NUNCA ve la clave — solo habla con esta función.

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

// La clave se guarda como "secreto" de Firebase, no queda en el código ni en GitHub.
const ANTHROPIC_API_KEY = defineSecret("ANTHROPIC_API_KEY");

exports.generarPlanIA = onRequest(
  { secrets: [ANTHROPIC_API_KEY], cors: true, region: "us-central1" },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Método no permitido" });
      return;
    }

    const { prompt } = req.body || {};
    if (!prompt || typeof prompt !== "string") {
      res.status(400).json({ error: "Falta el campo 'prompt' en la petición" });
      return;
    }

    try {
      const respuesta = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": ANTHROPIC_API_KEY.value(),
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1500,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (!respuesta.ok) {
        const errTxt = await respuesta.text();
        console.error("Error de Anthropic:", respuesta.status, errTxt);
        res.status(502).json({ error: "La IA no respondió correctamente" });
        return;
      }

      const data = await respuesta.json();
      const texto = (data.content || []).map((b) => b.text || "").join("");
      res.status(200).json({ texto });
    } catch (err) {
      console.error("Error interno:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
);
