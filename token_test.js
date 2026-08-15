/* ============================================================
   TOKEN TEST — De Renzi y Vignolo (versión corta, 36 ítems)
   Especialidad: Neuropsicología / Terapia del Lenguaje
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   36 ítems binarios (1=Acierto, 0=Error) en 6 partes de
   complejidad sintáctica progresiva. Detección rápida y sensible
   de afasia receptiva. Incluye ajuste por escolaridad (Gold
   Standard) y tope automático en 36 puntos.
   ============================================================ */

const escalaTokenTest = {
  id: "token-test",
  nombre: "Token Test (Prueba de las Fichas) — Versión Corta",
  especialidad: "neuropsicologia",
  descripcion: "Detección rápida y ultra-sensible de déficits sutiles en comprensión del lenguaje oral, usando órdenes verbales abstractas sobre fichas plásticas, sin pistas contextuales.",
  puntajeMaximo: 36,

  partes: [
    { id: "parte1", nombre: "Parte I: Fichas Grandes", totalItems: 6, ejemplo: 'Toque un círculo / Toque un cuadrado rojo' },
    { id: "parte2", nombre: "Parte II: Fichas Pequeñas", totalItems: 6, ejemplo: 'Misma estructura, introduce discriminación de tamaño' },
    { id: "parte3", nombre: "Parte III: Fichas Grandes (comandos dobles)", totalItems: 6, ejemplo: 'Toque el círculo rojo y el cuadrado azul' },
    { id: "parte4", nombre: "Parte IV: Fichas Pequeñas (comandos dobles)", totalItems: 6, ejemplo: 'Misma estructura que Parte III, con fichas pequeñas' },
    { id: "parte5", nombre: "Parte V: Fichas Grandes (comandos triples/relacionales)", totalItems: 6, ejemplo: 'Toque el círculo blanco, el cuadrado verde y el círculo amarillo' },
    {
      id: "parte6",
      nombre: "Parte VI: Estructuras Sintácticas Complejas",
      totalItems: 6,
      itemsDetallados: [
        { numero: 1, texto: "Toque el círculo rojo con el cuadrado verde" },
        { numero: 2, texto: "Toque el cuadrado blanco antes de tocar el círculo azul" },
        { numero: 3, texto: "Toque el círculo amarillo en lugar del cuadrado blanco" },
        { numero: 4, texto: "Si hay un círculo azul, toque el cuadrado rojo" },
        { numero: 5, texto: "Toque todos los círculos, excepto el verde" },
        { numero: 6, texto: "Toque el cuadrado azul rápidamente y el círculo blanco despacio" }
      ]
    }
  ],

  opciones: [
    { valor: 1, label: "1 - Acierto (ejecución correcta al primer intento)" },
    { valor: 0, label: "0 - Error" }
  ],

  // ---------- Función de cálculo (equivalente al motor TypeScript entregado) ----------
  // respuestas: array de exactamente 36 elementos (0 o 1)
  procesarTokenTest: function (respuestas, aniosEscolaridad) {
    if (respuestas.length !== 36) {
      throw new Error("El vector de respuestas debe contener exactamente 36 ítems.");
    }

    const puntajeBruto = respuestas.reduce((acc, val) => acc + (val === 1 ? 1 : 0), 0);

    let ajuste = 0;
    if (aniosEscolaridad < 6) {
      ajuste = 2;
    } else if (aniosEscolaridad >= 6 && aniosEscolaridad <= 11) {
      ajuste = 1;
    }
    // >= 12 años: ajuste = 0

    let puntajeAjustado = puntajeBruto + ajuste;
    if (puntajeAjustado > 36) {
      puntajeAjustado = 36;
    }

    const { rangoSeveridad, alertaClinica } = this.clasificar(puntajeAjustado);

    return { puntajeBruto, ajusteAplicado: ajuste, puntajeAjustado, rangoSeveridad, alertaClinica };
  },

  // ---------- Clasificación clínica ----------
  clasificar: function (puntajeAjustado) {
    if (puntajeAjustado >= 29) {
      return {
        rangoSeveridad: "Normal / Sin Alteración",
        alertaClinica: "Comprensión auditiva verbal dentro de los límites normales."
      };
    }
    if (puntajeAjustado >= 25) {
      return {
        rangoSeveridad: "Déficit Leve",
        alertaClinica: "⚠️ Dificultades sutiles ante sintaxis compleja. Optimizar la claridad de las instrucciones en consulta."
      };
    }
    if (puntajeAjustado >= 17) {
      return {
        rangoSeveridad: "Déficit Moderado",
        alertaClinica: "⚠️ ALERTA: Falla en el procesamiento de comandos secuenciales múltiples. Se sugiere soporte con claves visuales."
      };
    }
    return {
      rangoSeveridad: "Déficit Severo",
      alertaClinica: "🚨 CRÍTICO: Grave compromiso de la afasia receptiva. Alta dependencia comunicativa. Priorizar abordaje multimodal."
    };
  }
};

if (typeof escalasNeuropsicologia !== "undefined") {
  escalasNeuropsicologia.push(escalaTokenTest);
}
