/* ============================================================
   ESCALA DE BRADEN — Riesgo de Úlceras por Presión
   Especialidad: Fisioterapia / Terapia Ocupacional
   ============================================================
   6 subescalas: 5 puntuadas 1-4, 1 (fricción/cizallamiento) 1-3.
   Rango total: 6-23. A MENOR puntaje, MAYOR riesgo (escala
   invertida respecto a la mayoría del banco).
   ============================================================ */

const escalaBraden = {
  id: "braden",
  nombre: "Escala de Braden (Riesgo de Úlceras por Presión)",
  especialidad: "fisioterapia",
  descripcion: "Evalúa el riesgo de desarrollar úlceras por presión según percepción sensorial, humedad, actividad, movilidad, nutrición y fricción/cizallamiento. A menor puntaje, mayor riesgo.",
  puntajeMinimo: 6,
  puntajeMaximo: 23,

  subescalas: [
    {
      id: "percepcion_sensorial",
      nombre: "Percepción Sensorial",
      descripcion: "Capacidad de responder de manera significativa a la molestia relacionada con la presión",
      opciones: [
        { valor: 1, label: "1 - Completamente limitada" },
        { valor: 2, label: "2 - Muy limitada" },
        { valor: 3, label: "3 - Ligeramente limitada" },
        { valor: 4, label: "4 - Sin limitaciones" }
      ]
    },
    {
      id: "humedad",
      nombre: "Humedad",
      descripcion: "Grado de exposición de la piel a la humedad",
      opciones: [
        { valor: 1, label: "1 - Constantemente húmeda" },
        { valor: 2, label: "2 - Muy húmeda" },
        { valor: 3, label: "3 - Ocasionalmente húmeda" },
        { valor: 4, label: "4 - Raramente húmeda" }
      ]
    },
    {
      id: "actividad",
      nombre: "Actividad",
      descripcion: "Grado de actividad física",
      opciones: [
        { valor: 1, label: "1 - Encamado" },
        { valor: 2, label: "2 - En silla" },
        { valor: 3, label: "3 - Deambula ocasionalmente" },
        { valor: 4, label: "4 - Deambula frecuentemente" }
      ]
    },
    {
      id: "movilidad",
      nombre: "Movilidad",
      descripcion: "Capacidad para cambiar y controlar la posición del cuerpo",
      opciones: [
        { valor: 1, label: "1 - Completamente inmóvil" },
        { valor: 2, label: "2 - Muy limitada" },
        { valor: 3, label: "3 - Ligeramente limitada" },
        { valor: 4, label: "4 - Sin limitaciones" }
      ]
    },
    {
      id: "nutricion",
      nombre: "Nutrición",
      descripcion: "Patrón usual de ingesta de alimentos",
      opciones: [
        { valor: 1, label: "1 - Muy pobre" },
        { valor: 2, label: "2 - Probablemente inadecuada" },
        { valor: 3, label: "3 - Adecuada" },
        { valor: 4, label: "4 - Excelente" }
      ]
    },
    {
      id: "friccion_cizallamiento",
      nombre: "Fricción y Cizallamiento",
      descripcion: "Fuerzas de fricción y cizallamiento durante el movimiento/reposicionamiento",
      opciones: [
        { valor: 1, label: "1 - Problema" },
        { valor: 2, label: "2 - Problema potencial" },
        { valor: 3, label: "3 - No existe problema aparente" }
      ]
    }
  ],

  // ---------- Clasificación de riesgo (a menor puntaje, mayor riesgo) ----------
  clasificar: function (total) {
    if (total <= 9) return "Riesgo muy alto";
    if (total <= 12) return "Riesgo alto";
    if (total <= 14) return "Riesgo moderado";
    if (total <= 18) return "Riesgo bajo";
    return "Sin riesgo significativo"; // 19-23
  },

  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotales = {};
    this.subescalas.forEach((sub) => {
      const v = respuestas[sub.id];
      const val = typeof v === "number" ? v : 0;
      subtotales[sub.id] = val;
      total += val;
    });
    return { subtotales, total, puntajeMinimo: this.puntajeMinimo, puntajeMaximo: this.puntajeMaximo, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaBraden);
}
