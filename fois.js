/* ============================================================
   FOIS — Functional Oral Intake Scale (Crary, Mann y Groher, 2005)
   Especialidad: Terapia del Lenguaje / Fonoaudiología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Escala ordinal de UN solo ítem (7 niveles jerárquicos, 1-7).
   Incluye validación cruzada con estado de sonda, e Índice de
   Progresión Funcional (IPF) para comparar basal vs. seguimiento.
   ============================================================ */

const escalaFOIS = {
  id: "fois",
  nombre: "FOIS (Escala de Ingesta Oral Funcional)",
  especialidad: "terapia-lenguaje",
  descripcion: "Clasifica el nivel de alimentación por vía oral en pacientes con disfagia, documentando el impacto funcional real en la dieta (no el mecanismo motor de la deglución).",
  tipo: "seleccion-unica",

  niveles: [
    { valor: 1, categoria: "Dependencia No Oral", descripcion: "Nada por vía oral. Depende al 100% de alimentación enteral o parenteral (SNG, PEG)." },
    { valor: 2, categoria: "Dependencia No Oral", descripcion: "Dependencia de vía alternativa con mínima ingesta oral (sorbos/volúmenes mínimos en terapia, sin nutrirse por boca)." },
    { valor: 3, categoria: "Dependencia No Oral", descripcion: "Dependencia de vía alternativa con ingesta oral constante, pero requiere sonda para completar requerimientos calóricos/hídricos." },
    { valor: 4, categoria: "Ingesta Oral Total", descripcion: "Ingesta oral total de una única consistencia (puré, licuados o líquidos espesados). No tolera texturas mixtas." },
    { valor: 5, categoria: "Ingesta Oral Total", descripcion: "Ingesta oral total con múltiples consistencias, pero requiere preparación especial (picado fino, carnes molidas, evitar espinas/filamentos)." },
    { valor: 6, categoria: "Ingesta Oral Total", descripcion: "Ingesta oral total con múltiples consistencias sin preparación especial, pero con restricciones específicas por seguridad (ej. evita líquidos finos, requiere espesantes)." },
    { valor: 7, categoria: "Ingesta Oral Total", descripcion: "Ingesta oral total sin restricciones. Alimentación normal y segura de cualquier consistencia adecuada para su edad." }
  ],

  // ---------- Motor de análisis (equivalente al TypeScript entregado) ----------
  procesarFOIS: function (nivelSeleccionado, tieneSondaPEGoNGS) {
    let estadoValidacion = "VALIDO";
    // Regla Gold Standard: nivel <=3 sin sonda es contradicción médica
    if (nivelSeleccionado <= 3 && !tieneSondaPEGoNGS) {
      estadoValidacion = "ERROR_CONTRADICCION_MEDICA";
    }
    // nivel >=4 con sonda activa: válido pero se advierte (fase de destete)

    const categoriaClinica = nivelSeleccionado <= 3 ? "Dependencia No Oral" : "Ingesta Oral Total";
    const nivelInfo = this.niveles.find((n) => n.valor === nivelSeleccionado);

    const sugerenciasPorNivel = {
      1: "🚨 Nutrición 100% enteral/parenteral. Alto riesgo de aspiración. Enfocar en terapia no nutritiva.",
      2: "Terapia deglutoria activa con volúmenes controlados. No aporta valor nutricional real por boca.",
      3: "Fase de transición. Monitorear balance hídrico y calórico antes de retirar la vía alternativa.",
      4: "⚠️ Dieta homogénea restrictiva. Evitar texturas mixtas (sólido + líquido) para prevenir penetración laríngea.",
      5: "Entrenar la musculatura masticatoria. Ajustar el tamaño del bolo alimenticio en el plato.",
      6: "Monitorear restricciones específicas (ej. uso de espesantes de agua). El paciente es socialmente autónomo.",
      7: "✅ Alimentación normal y segura. Alta hospitalaria o mantenimiento en este canal."
    };

    return {
      nivel: nivelSeleccionado,
      categoriaClinica,
      descripcionDieta: nivelInfo ? nivelInfo.descripcion : null,
      estadoValidacion,
      sugerenciaTerapeutica: sugerenciasPorNivel[nivelSeleccionado]
    };
  },

  // ---------- Alerta clínica por bloque (para el dashboard) ----------
  obtenerAlertaClinica: function (nivel) {
    if (nivel <= 3) {
      return { color: "Rojo / Crítico", directriz: "Alto riesgo de aspiración silente o neumonía aspirativa. Priorizar terapia miofuncional orofacial y estimulación sensorial de la deglución. Higiene bucal estricta." };
    }
    if (nivel <= 5) {
      return { color: "Amarillo / Precaución", directriz: "Vía oral activa pero margen de seguridad estrecho. Interconsulta con nutrición y entrenamiento al cuidador en maniobras deglutorias compensatorias." };
    }
    return { color: "Verde / Seguro", directriz: "Transición exitosa a la autonomía alimentaria. Monitorear únicamente fatiga masticatoria en patologías neurodegenerativas." };
  },

  // ---------- Índice de Progresión Funcional (IPF): basal vs. seguimiento ----------
  calcularIPF: function (nivelBasal, nivelSeguimiento) {
    const ipf = nivelSeguimiento - nivelBasal;
    let interpretacion;
    if (ipf > 0) interpretacion = "Progreso clínico (éxito de la terapia de deglución)";
    else if (ipf === 0) interpretacion = "Condición funcional estable/estacionaria";
    else interpretacion = "Regresión funcional (alerta por empeoramiento neurológico o complicación médica)";

    return { ipf, interpretacion };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaFOIS);
}
