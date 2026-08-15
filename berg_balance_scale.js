/* ============================================================
   BERG BALANCE SCALE (BBS) — Escala de Equilibrio de Berg
   Especialidad: Fisioterapia
   ============================================================
   14 ítems, cada uno escala 0-4. Rango total: 0-56.
   Gold standard para evaluación de equilibrio funcional y
   predicción de riesgo de caídas.
   ============================================================ */

function opcionesBerg() {
  return [
    { valor: 0, label: "0 - Incapaz / requiere asistencia máxima" },
    { valor: 1, label: "1 - Necesita ayuda máxima para iniciar o completar" },
    { valor: 2, label: "2 - Necesita ayuda mínima a moderada / supervisión estrecha" },
    { valor: 3, label: "3 - Realiza la tarea con ligera dificultad o necesita supervisión mínima" },
    { valor: 4, label: "4 - Realiza la tarea de forma independiente y segura" }
  ];
}

const escalaBerg = {
  id: "berg-balance-scale",
  nombre: "Berg Balance Scale (Escala de Equilibrio de Berg)",
  especialidad: "fisioterapia",
  descripcion: "Gold standard para evaluar el equilibrio funcional y predecir el riesgo de caídas mediante 14 tareas funcionales.",
  puntajeMaximo: 56,

  items: [
    { id: "b1", numero: 1, texto: "Sentado a de pie", opciones: opcionesBerg() },
    { id: "b2", numero: 2, texto: "De pie sin apoyo", opciones: opcionesBerg() },
    { id: "b3", numero: 3, texto: "Sentado sin apoyo con los pies en el suelo", opciones: opcionesBerg() },
    { id: "b4", numero: 4, texto: "De pie a sentado", opciones: opcionesBerg() },
    { id: "b5", numero: 5, texto: "Transferencias", opciones: opcionesBerg() },
    { id: "b6", numero: 6, texto: "De pie con los ojos cerrados", opciones: opcionesBerg() },
    { id: "b7", numero: 7, texto: "De pie con los pies juntos", opciones: opcionesBerg() },
    { id: "b8", numero: 8, texto: "Alcance funcional hacia adelante con los brazos extendidos", opciones: opcionesBerg() },
    { id: "b9", numero: 9, texto: "Recoger un objeto del suelo desde posición de pie", opciones: opcionesBerg() },
    { id: "b10", numero: 10, texto: "Girarse para mirar hacia atrás por encima de los hombros", opciones: opcionesBerg() },
    { id: "b11", numero: 11, texto: "Girar 360 grados", opciones: opcionesBerg() },
    { id: "b12", numero: 12, texto: "Colocar alternativamente el pie en un escalón/taburete", opciones: opcionesBerg() },
    { id: "b13", numero: 13, texto: "De pie con un pie delante del otro (tándem)", opciones: opcionesBerg() },
    { id: "b14", numero: 14, texto: "De pie sobre una pierna", opciones: opcionesBerg() }
  ],

  clasificar: function (total) {
    if (total >= 41) return "Riesgo bajo de caídas — equilibrio funcional independiente";
    if (total >= 21) return "Riesgo moderado de caídas — requiere ayudas de marcha o supervisión";
    return "Riesgo alto de caídas — requiere silla de ruedas o asistencia significativa"; // 0-20
  },

  calcularPuntaje: function (respuestas) {
    const total = this.items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);
    return { total, puntajeMaximo: this.puntajeMaximo, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaBerg);
}
