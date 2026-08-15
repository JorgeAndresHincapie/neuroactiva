/* ============================================================
   VFSS SCORE — Escala de Severidad de Videofluoroscopia
   Especialidad: Terapia del Lenguaje
   ============================================================
   4 ítems con ponderación biomecánica distinta, suma simple.
   ============================================================ */

const escalaVFSS = {
  id: "vfss-score",
  nombre: "VFSS Score (Escala de Severidad de Videofluoroscopia)",
  especialidad: "terapia-lenguaje",
  descripcion: "Herramienta analítica para interpretación cuantitativa del estudio radiológico de la deglución (videofluoroscopia).",

  items: [
    { id: "sello_labial", texto: "Sello Labial", opciones: [{ valor: 0, label: "0 - Normal" }, { valor: 1, label: "1 - Escape anterior" }] },
    { id: "residuo_valecular", texto: "Residuo Valecular", opciones: [{ valor: 0, label: "0 - Sin residuo" }, { valor: 1, label: "1 - Residuos leves" }, { valor: 2, label: "2 - Residuos severos con riesgo de caída post-deglución" }] },
    { id: "penetracion_laringea", texto: "Penetración Laríngea", opciones: [{ valor: 0, label: "0 - Ausente" }, { valor: 1, label: "1 - Entra al vestíbulo pero se limpia" }, { valor: 2, label: "2 - No se limpia" }] },
    { id: "aspiracion_traqueal", texto: "Aspiración Traqueal", opciones: [{ valor: 0, label: "0 - Ausente" }, { valor: 3, label: "3 - Aspiración con tos refleja" }, { valor: 5, label: "5 - Aspiración silente (sin tos)" }] }
  ],

  clasificar: function (total) {
    if (total <= 2) return "Disfagia leve / Seguridad conservada";
    if (total <= 5) return "Seguridad comprometida: requiere texturas modificadas (semisólidos)";
    return "Aspiración Crítica / Vía oral no segura: bloqueo automático de la vía oral en la historia clínica"; // >5
  },

  calcularPuntaje: function (respuestas) {
    const total = this.items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);
    return { total, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaVFSS);
}
