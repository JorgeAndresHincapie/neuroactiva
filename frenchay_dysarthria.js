/* ============================================================
   ESCALA DE DISARTRIA DE FRENCHAY (FDA-2)
   Especialidad: Terapia del Lenguaje
   ============================================================
   8 secciones, calificación A-E convertida a 5-1 (A=5 Normal, E=1
   Parálisis total). Incluye diagnóstico diferencial de tipo de
   disartria según el perfil de puntuaciones.
   ============================================================ */

const escalaFrenchay = {
  id: "frenchay-dysarthria",
  nombre: "Escala de Disartria de Frenchay (FDA-2)",
  especialidad: "terapia-lenguaje",
  descripcion: "Medición cuantitativa de los componentes motores del habla, con diagnóstico diferencial del tipo de disartria.",

  mapeoLetras: { A: 5, B: 4, C: 3, D: 2, E: 1 },

  secciones: [
    { id: "reflejos", nombre: "1. Reflejos", subitems: ["Tos", "Deglución", "Saliva"] },
    { id: "respiracion", nombre: "2. Respiración", subitems: ["En reposo", "En habla"] },
    { id: "labios", nombre: "3. Labios", subitems: ["En reposo", "Movimiento"] },
    { id: "mandibula", nombre: "4. Mandíbula", subitems: ["Reposo", "Habla"] },
    { id: "paladar", nombre: "5. Paladar", subitems: ["Líquidos", "Mantenimiento"] },
    { id: "laringe", nombre: "6. Laringe", subitems: ["Tiempo de fonación", "Tono"] },
    { id: "lengua", nombre: "7. Lengua", subitems: ["Reposo", "Alternancia"] },
    { id: "inteligibilidad", nombre: "8. Inteligibilidad", subitems: ["Palabras", "Frases"] }
  ],

  // ---------- Convertir letra A-E a valor numérico ----------
  convertirLetra: function (letra) {
    return this.mapeoLetras[letra] ?? null;
  },

  // ---------- Promedio por sección (a partir de sus subitems ya convertidos) ----------
  calcularPromediosSeccion: function (respuestas) {
    const promedios = {};
    this.secciones.forEach((seccion) => {
      const valores = respuestas[seccion.id]; // array de valores numéricos (1-5) de los subitems
      if (Array.isArray(valores) && valores.length > 0) {
        promedios[seccion.id] = valores.reduce((a, b) => a + b, 0) / valores.length;
      } else {
        promedios[seccion.id] = null;
      }
    });
    return promedios;
  },

  // ---------- Diagnóstico diferencial (sugerencias del documento) ----------
  sugerirTipoDisartria: function (promedios) {
    const sugerencias = [];

    if (
      promedios.laringe !== null && promedios.lengua !== null &&
      (promedios.laringe + promedios.lengua) <= 2 &&
      promedios.labios === 5 && promedios.mandibula === 5
    ) {
      sugerencias.push("Sospecha de Disartria Flácida/Bulbar");
    }

    if (promedios.inteligibilidad !== null && promedios.inteligibilidad <= 2) {
      sugerencias.push("Sospecha de Disartria Atáxica (inteligibilidad muy baja combinada con afectación del ritmo — validar variabilidad clínicamente)");
    }

    return sugerencias.length > 0 ? sugerencias : ["Sin patrón claro de disartria específica detectado en el perfil"];
  },

  calcularResultado: function (respuestas) {
    const promedios = this.calcularPromediosSeccion(respuestas);
    const sugerenciasDiagnosticas = this.sugerirTipoDisartria(promedios);
    return { promediosPorSeccion: promedios, sugerenciasDiagnosticas };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaFrenchay);
}
