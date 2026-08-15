/* ============================================================
   BDI-II — Inventario de Depresión de Beck, 2ª Edición
   Especialidad: Psicología
   ============================================================
   21 ítems, escala 0-3. INCLUYE REGLA CRÍTICA DE SEGURIDAD: si el
   ítem de pensamientos suicidas (D9) es >=1, se dispara una alerta
   independiente del puntaje total.
   ============================================================ */

function opcionesBDI() {
  return [
    { valor: 0, label: "0 - Ausente" },
    { valor: 1, label: "1 - Leve" },
    { valor: 2, label: "2 - Moderado" },
    { valor: 3, label: "3 - Severo" }
  ];
}

const escalaBDI2 = {
  id: "bdi-ii",
  nombre: "Inventario de Depresión de Beck (BDI-II)",
  especialidad: "psicologia",
  descripcion: "Gold standard global para cuantificar la severidad de la sintomatología depresiva.",
  puntajeMaximo: 63,

  items: [
    { id: "d1", texto: "Tristeza", opciones: opcionesBDI() },
    { id: "d2", texto: "Pesimismo", opciones: opcionesBDI() },
    { id: "d3", texto: "Fracaso", opciones: opcionesBDI() },
    { id: "d4", texto: "Pérdida de placer", opciones: opcionesBDI() },
    { id: "d5", texto: "Sentimientos de culpa", opciones: opcionesBDI() },
    { id: "d6", texto: "Sentimientos de castigo", opciones: opcionesBDI() },
    { id: "d7", texto: "Disconformidad con uno mismo", opciones: opcionesBDI() },
    { id: "d8", texto: "Autocrítica", opciones: opcionesBDI() },
    { id: "d9", texto: "Pensamientos suicidas", opciones: opcionesBDI(), esItemSeguridad: true },
    { id: "d10", texto: "Llanto", opciones: opcionesBDI() },
    { id: "d11", texto: "Agitación", opciones: opcionesBDI() },
    { id: "d12", texto: "Pérdida de interés", opciones: opcionesBDI() },
    { id: "d13", texto: "Indecisión", opciones: opcionesBDI() },
    { id: "d14", texto: "Invalidez/Inutilidad", opciones: opcionesBDI() },
    { id: "d15", texto: "Pérdida de energía", opciones: opcionesBDI() },
    { id: "d16", texto: "Cambios en el sueño", opciones: opcionesBDI() },
    { id: "d17", texto: "Irritabilidad", opciones: opcionesBDI() },
    { id: "d18", texto: "Cambios en el apetito", opciones: opcionesBDI() },
    { id: "d19", texto: "Dificultad de concentración", opciones: opcionesBDI() },
    { id: "d20", texto: "Cansancio o fatiga", opciones: opcionesBDI() },
    { id: "d21", texto: "Pérdida de interés en el sexo", opciones: opcionesBDI() }
  ],

  clasificar: function (total) {
    if (total <= 13) return "Depresión mínima / Normal";
    if (total <= 19) return "Depresión leve";
    if (total <= 28) return "Depresión moderada";
    return "Depresión grave"; // 29-63
  },

  // ---------- Función de cálculo con regla crítica de seguridad ----------
  calcularPuntaje: function (respuestas) {
    const total = this.items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);

    // Regla crítica: D9 >= 1 dispara alerta independiente del total
    const valorD9 = respuestas["d9"];
    const alertaSuicida = typeof valorD9 === "number" && valorD9 >= 1;

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      clasificacion: this.clasificar(total),
      alertaSuicida // true/false — el frontend debe mostrar esto de forma prioritaria e independiente
    };
  }
};

if (typeof escalasPsicologia !== "undefined") {
  escalasPsicologia.push(escalaBDI2);
}
