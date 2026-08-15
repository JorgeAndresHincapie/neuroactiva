/* ============================================================
   ACE-III — Addenbrooke's Cognitive Examination III
   Especialidad: Neuropsicología
   ============================================================
   100 puntos en 5 dominios. El documento da los RANGOS de cada
   dominio pero no el banco de ítems individual (contenido
   propietario del manual oficial) — se estructura a nivel de
   dominio, ampliable cuando se tenga el detalle ítem por ítem.
   ============================================================ */

const escalaACE3 = {
  id: "ace-iii",
  nombre: "ACE-III (Evaluación Cognitiva Addenbrooke)",
  especialidad: "neuropsicologia",
  descripcion: "Gold standard para detección precoz de demencias (Alzheimer, Frontotemporal), superando al MMSE clásico en sensibilidad.",
  puntajeMaximo: 100,
  notaAlcance: "El documento fuente da los rangos por dominio pero no el banco de ítems individual del manual oficial — se estructura a nivel de dominio (captura el subtotal directamente), ampliable a ítem por ítem cuando se tenga el detalle.",

  dominios: [
    { id: "atencion", nombre: "Atención", rango: { minimo: 0, maximo: 18 }, descripcion: "Orientación temporal/espacial y retención de palabras" },
    { id: "memoria", nombre: "Memoria", rango: { minimo: 0, maximo: 26 }, descripcion: "Recuerdo diferido de nombre, dirección e historia de aprendizaje" },
    { id: "fluidez_verbal", nombre: "Fluidez Verbal", rango: { minimo: 0, maximo: 14 }, descripcion: "Generación de palabras por categoría fonémica (letra P) y semántica (animales) en 60s" },
    { id: "lenguaje", nombre: "Lenguaje", rango: { minimo: 0, maximo: 26 }, descripcion: "Comprensión de comandos complejos, repetición y lectura" },
    { id: "visoespacial", nombre: "Habilidades Visoespaciales", rango: { minimo: 0, maximo: 16 }, descripcion: "Copia de diagramas complejos (cubo, reloj) y conteo de puntos" }
  ],

  clasificar: function (total) {
    if (total >= 88) return "Normal";
    if (total >= 83) return "Sospecha/Límite de deterioro cognitivo";
    return "Altamente predictivo de síndrome demencial (sensibilidad del 93%)"; // <83
  },

  // ---------- respuestas: { atencion: 15, memoria: 20, fluidez_verbal: 10, lenguaje: 22, visoespacial: 14 } ----------
  calcularPuntaje: function (respuestasPorDominio) {
    let total = 0;
    const subtotales = {};
    this.dominios.forEach((dom) => {
      const v = respuestasPorDominio[dom.id];
      const val = typeof v === "number" ? v : 0;
      subtotales[dom.id] = val;
      total += val;
    });
    return { subtotales, total, puntajeMaximo: this.puntajeMaximo, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasNeuropsicologia !== "undefined") {
  escalasNeuropsicologia.push(escalaACE3);
}
