/* ============================================================
   GAD-7 — Escala de Ansiedad Generalizada
   Especialidad: Psicología
   ============================================================
   7 ítems, escala 0-3. Rango 0-21.
   ============================================================ */

function opcionesGAD7() {
  return [
    { valor: 0, label: "0 - Nunca" },
    { valor: 1, label: "1 - Varios días" },
    { valor: 2, label: "2 - Más de la mitad de los días" },
    { valor: 3, label: "3 - Casi todos los días" }
  ];
}

const escalaGAD7 = {
  id: "gad-7",
  nombre: "GAD-7 (Escala de Ansiedad Generalizada)",
  especialidad: "psicologia",
  descripcion: "Tamizaje rápido ultra-sensible para trastorno de ansiedad generalizada, durante las últimas 2 semanas.",
  puntajeMaximo: 21,

  items: [
    { id: "g1", texto: "Sentirse nervioso, ansioso o con los nervios de punta", opciones: opcionesGAD7() },
    { id: "g2", texto: "No ser capaz de parar o controlar la preocupación", opciones: opcionesGAD7() },
    { id: "g3", texto: "Preocuparse demasiado por diferentes cosas", opciones: opcionesGAD7() },
    { id: "g4", texto: "Dificultad para relajarse", opciones: opcionesGAD7() },
    { id: "g5", texto: "Estar tan inquieto que es difícil permanecer sentado", opciones: opcionesGAD7() },
    { id: "g6", texto: "Molestarse o irritarse fácilmente", opciones: opcionesGAD7() },
    { id: "g7", texto: "Tener miedo de que algo terrible vaya a pasar", opciones: opcionesGAD7() }
  ],

  clasificar: function (total) {
    if (total <= 4) return "Ansiedad mínima";
    if (total <= 9) return "Ansiedad leve";
    if (total <= 14) return "Ansiedad moderada (punto de corte clínico para intervención)";
    return "Ansiedad grave"; // 15-21
  },

  calcularPuntaje: function (respuestas) {
    const total = this.items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);
    return { total, puntajeMaximo: this.puntajeMaximo, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasPsicologia !== "undefined") {
  escalasPsicologia.push(escalaGAD7);
}
