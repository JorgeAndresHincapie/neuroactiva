/* ============================================================
   FEAR OF WATER SCALE (FWS) — Escala de Miedo al Agua
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   DOS escalas independientes en este archivo:
   1. FWS-Child (niños 4-12 años): 10 ítems, escala 1-3, máx 30
   2. FWS-Adult (adultos): 10 ítems, escala 0-4, máx 40
   Cada una con su propia clasificación de nivel de miedo/ansiedad.
   ============================================================ */

// ---------- Opciones comunes ----------
function opcionesFWS_Nino() {
  return [
    { valor: 1, label: "1 - No, para nada (Feliz)" },
    { valor: 2, label: "2 - Un poco (Dudoso)" },
    { valor: 3, label: "3 - Sí, mucho (Asustado)" }
  ];
}

function opcionesFWS_Adulto() {
  return [
    { valor: 0, label: "0 - Nunca/En absoluto" },
    { valor: 1, label: "1 - Rara vez" },
    { valor: 2, label: "2 - A veces" },
    { valor: 3, label: "3 - Frecuentemente" },
    { valor: 4, label: "4 - Siempre/Severo" }
  ];
}

// ============================================================
// FORMATO 1: FWS-Child (4-12 años)
// ============================================================
const escalaFWS_Nino = {
  id: "fws-child",
  nombre: "Fear of Water Scale — Niños (FWS-Child)",
  especialidad: "hidroterapia",
  descripcion: "Escala de miedo al agua para niños de 4 a 12 años, con lenguaje sencillo tipo semáforo (1-3).",
  puntajeMinimo: 10,
  puntajeMaximo: 30,

  items: [
    { id: "fws-nino-01", numero: 1, texto: "¿Te da miedo cambiarte de ropa y pensar que vas a entrar a la piscina?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-02", numero: 2, texto: '¿Sientes que el agua está "muy fría" o te da miedo cuando te salpica la cara?', opciones: opcionesFWS_Nino() },
    { id: "fws-nino-03", numero: 3, texto: "¿Te asusta meter la boca o la nariz debajo del agua para hacer burbujas?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-04", numero: 4, texto: "¿Te da miedo abrir los ojos cuando estás sumergido?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-05", numero: 5, texto: "¿Sientes que te vas a ir al fondo si el profesor te suelta en el agua?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-06", numero: 6, texto: "¿Te asusta alejarte de la pared de la piscina o del borde?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-07", numero: 7, texto: "¿Te pones tenso, duro o te dan ganas de llorar si el agua te llega al cuello?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-08", numero: 8, texto: "¿Te da miedo levantar los pies del suelo para intentar flotar como una estrella?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-09", numero: 9, texto: "¿Te asusta ver el fondo de la piscina donde el agua se ve más oscura/profunda?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-10", numero: 10, texto: "¿Prefieres quedarte sentado afuera mirando en lugar de jugar dentro del agua?", opciones: opcionesFWS_Nino() }
  ],

  clasificar: function (total) {
    if (total >= 23) return "Nivel Rojo (Miedo severo / Bloqueo. Priorizar familiarización afectiva)";
    if (total >= 16) return "Nivel Amarillo (Miedo moderado / Requiere juego y acompañamiento táctil)";
    return "Nivel Verde (Miedo bajo / Buena adaptabilidad)"; // 10-15
  },

  calcularPuntaje: function (respuestas) {
    let total = 0;
    let itemsRespondidos = 0;
    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        total += valor;
        itemsRespondidos++;
      }
    });
    return {
      total,
      puntajeMinimo: this.puntajeMinimo,
      puntajeMaximo: this.puntajeMaximo,
      itemsRespondidos,
      clasificacion: itemsRespondidos === this.items.length ? this.clasificar(total) : null
    };
  }
};

// ============================================================
// FORMATO 2: FWS-Adult
// ============================================================
const escalaFWS_Adulto = {
  id: "fws-adult",
  nombre: "Fear of Water Scale — Adultos (FWS-Adult)",
  especialidad: "hidroterapia",
  descripcion: "Escala de miedo al agua para adultos en procesos de hidroterapia, rehabilitación o natación. Evalúa autopercepción y respuestas somáticas.",
  puntajeMinimo: 0,
  puntajeMaximo: 40,

  items: [
    { id: "fws-adulto-01", numero: 1, texto: "Experimento ansiedad anticipatoria (estrés u opresión en el pecho) antes de ir a la sesión.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-02", numero: 2, texto: "Siento taquicardia o respiración acelerada e ineficiente apenas entro al vaso de la piscina.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-03", numero: 3, texto: "Mis músculos se tensan involuntariamente (rigidez cervical o lumbar), dificultando el movimiento.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-04", numero: 4, texto: "Evito de forma activa que el agua toque mis orejas, ojos o bloquee mis vías respiratorias.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-05", numero: 5, texto: "Siento una necesidad imperiosa de mantener el contacto visual con un punto de apoyo fijo (borde).", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-06", numero: 6, texto: "Me invade una sensación de pérdida de control si no logro tocar el fondo con firmeza.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-07", numero: 7, texto: "Asocio el agua profunda con ideas catastróficas inconscientes (ahogamiento, falta de aire).", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-08", numero: 8, texto: "Dependo críticamente de un elemento auxiliar (flotador, tabla, cuerda) para poder relajar el cuerpo.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-09", numero: 9, texto: "Me cuesta ejecutar giros o cambios de posición (supino a prono) por temor a desorientarme.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-10", numero: 10, texto: "Siento mareo o inestabilidad psicológica si el agua se mueve bruscamente a mi alrededor.", opciones: opcionesFWS_Adulto() }
  ],

  clasificar: function (total) {
    if (total >= 26) return "Ansiedad Fóbica Alta / Bloqueo psicomotor. Priorizar desensibilización sistemática en zona somera";
    if (total >= 11) return "Ansiedad Moderada / Interfiere con el aprendizaje motor. Requiere técnicas de control respiratorio";
    return "Ansiedad Controlable / Adaptación básica lograda"; // 0-10
  },

  calcularPuntaje: function (respuestas) {
    let total = 0;
    let itemsRespondidos = 0;
    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        total += valor;
        itemsRespondidos++;
      }
    });
    return {
      total,
      puntajeMinimo: this.puntajeMinimo,
      puntajeMaximo: this.puntajeMaximo,
      itemsRespondidos,
      clasificacion: itemsRespondidos === this.items.length ? this.clasificar(total) : null
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaFWS_Nino);
  escalasHidroterapia.push(escalaFWS_Adulto);
}
