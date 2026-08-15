/* ============================================================
   BANCO DE ESCALAS — TERAPIA LENGUAJE
   Generado para NeuroActiva — listo para pegar en pruebas.html
   ============================================================ */


// ---------------------------------------------------------------
// Archivo original: bdae.js
// ---------------------------------------------------------------
/* ============================================================
   TEST DE BOSTON PARA AFASIA (BDAE — Boston Diagnostic Aphasia
   Examination), Goodglass y Kaplan
   Especialidad: Neuropsicología / Terapia del Lenguaje
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   5 áreas lingüísticas con subtotales VECTORIALES (no se suma un
   total plano). Árbol de decisión para clasificar el tipo de
   afasia según 3 pilares: Fluidez, Comprensión Auditiva y
   Repetición.

   ⚠️ NOTA sobre la fórmula de Subtotal_Expresión: el documento
   fuente la define como EO1+EO2+EO3+EO4, EXCLUYENDO EO5
   (Denominación de Partes del Cuerpo) de esa suma específica —
   se implementó tal cual, sin "corregirlo", ya que a diferencia
   de otros casos detectados antes (ej. SF-36) no hay forma de
   probar matemáticamente que sea un error del documento. EO5
   sigue existiendo como ítem evaluable y puntuable, solo no entra
   en esta fórmula particular.

   ⚠️ Los Z-scores de "comprensionAuditivaBuena" y "repeticionBuena"
   requieren las tablas normativas oficiales del BDAE (no incluidas
   en el documento) — el clasificador de afasia recibe esos
   booleanos ya calculados, no los deriva internamente sin tablas.
   ============================================================ */

const escalaBDAE = {
  id: "bdae",
  nombre: "Test de Boston para el Diagnóstico de la Afasia (BDAE)",
  especialidad: "neuropsicologia",
  descripcion: "Evalúa exhaustivamente los componentes del lenguaje tras daño cerebral y clasifica el tipo de afasia (Broca, Wernicke, Conducción, Global, Anómica, Transcorticales) mediante un árbol de decisión sobre fluidez, comprensión auditiva y repetición.",

  // ---------- Área 1: Habla Conversacional y Expositiva (perfil 1-7, sin suma) ----------
  areaHablaConversacional: {
    nombre: "Área 1: Habla Conversacional y Expositiva",
    instruccion: "Entrevista abierta y lámina del 'Robo de las galletas'. Se grafica como perfil radial, no se suma.",
    items: [
      { id: "h1_fluidez", texto: "Fluidez (longitud de la frase)", rango: { minimo: 1, maximo: 7 } },
      { id: "h2_agilidad_articulatoria", texto: "Agilidad Articulatoria (facilidad de articulación motora)", rango: { minimo: 1, maximo: 7 } },
      { id: "h3_melodia", texto: "Melodía (línea de entonación y prosodia)", rango: { minimo: 1, maximo: 7 } },
      { id: "h4_parafasias", texto: "Parafasias (errores fonémicos o semánticos en habla continua)", rango: { minimo: 1, maximo: 7 } },
      { id: "h5_forma_gramatical", texto: "Forma Gramatical (variedad de estructuras gramaticales)", rango: { minimo: 1, maximo: 7 } },
      { id: "h6_encontrar_palabras", texto: "Encontrar Palabras (relación entre palabras con contenido e informativas)", rango: { minimo: 1, maximo: 7 } }
    ]
  },

  // ---------- Área 2: Comprensión Auditiva ----------
  areaComprensionAuditiva: {
    nombre: "Área 2: Comprensión Auditiva",
    items: [
      { id: "ca1_discriminacion", texto: "Discriminación de Palabras (objetos, formas, letras, colores, números)", rango: { minimo: 0, maximo: 72 } },
      { id: "ca2_partes_cuerpo", texto: "Identificación de Partes del Cuerpo", rango: { minimo: 0, maximo: 18 } },
      { id: "ca3_ordenes", texto: "Órdenes / Comandos de complejidad creciente", rango: { minimo: 0, maximo: 15 } },
      { id: "ca4_material_ideacional", texto: 'Material Ideacional Complejo (preguntas lógicas sí/no, ej. "¿Flota una piedra en el agua?")', rango: { minimo: 0, maximo: 12 } }
    ],
    rangoSubtotal: { minimo: 0, maximo: 117 } // 72+18+15+12
  },

  // ---------- Área 3: Expresión Oral ----------
  areaExpresionOral: {
    nombre: "Área 3: Expresión Oral (Producción)",
    items: [
      { id: "eo1_agilidad_vocal", texto: "Agilidad Vocal (repetir palabras simples a máxima velocidad)", rango: { minimo: 0, maximo: 14 } },
      { id: "eo2_secuencias_automatizadas", texto: "Secuencias Automatizadas (días, meses, números 1-20, alfabeto)", rango: { minimo: 0, maximo: 8 } },
      { id: "eo3_repeticion", texto: "Repetición (palabras aisladas, pseudopalabras, frases complejas)", rango: { minimo: 0, maximo: 16 } },
      { id: "eo4_denominacion_confrontacion", texto: "Denominación por Confrontación (nombrar dibujos de objetos)", rango: { minimo: 0, maximo: 105 } },
      { id: "eo5_denominacion_partes_cuerpo", texto: "Denominación de Partes del Cuerpo (NO incluido en Subtotal_Expresión, ver nota)", rango: { minimo: 0, maximo: 30 } }
    ],
    rangoSubtotal: { minimo: 0, maximo: 143 } // EO1+EO2+EO3+EO4 = 14+8+16+105 (EO5 excluido de la fórmula)
  },

  // ---------- Área 4: Comprensión del Lenguaje Escrito ----------
  areaLectura: {
    nombre: "Área 4: Comprensión del Lenguaje Escrito (Lectura)",
    items: [
      { id: "le1_lectura_palabras", texto: "Lectura de Palabras (emparejar palabras escritas con dibujos)", rango: { minimo: 0, maximo: 10 } },
      { id: "le2_comprension_oraciones", texto: "Comprensión de Oraciones y Párrafos (lectura silenciosa + preguntas)", rango: { minimo: 0, maximo: 10 } }
    ],
    rangoSubtotal: { minimo: 0, maximo: 20 }
  },

  // ---------- Área 5: Escritura ----------
  areaEscritura: {
    nombre: "Área 5: Escritura",
    items: [
      { id: "es1_mecanica", texto: "Mecánica de la Escritura (copiar letras, números y palabras de un modelo)", rango: { minimo: 0, maximo: 3 } },
      { id: "es2_seriada", texto: "Escritura Seriada (alfabeto y números 1-20 de memoria)", rango: { minimo: 0, maximo: 47 } },
      { id: "es3_expresion_escrita", texto: "Expresión Escrita (nombres de dibujos, oraciones dictadas, narración escrita)", rango: { minimo: 0, maximo: 50 } }
    ],
    rangoSubtotal: { minimo: 0, maximo: 100 }
  },

  // ---------- Cálculo de subtotales (vectorial, sin total plano) ----------
  calcularSubtotales: function (respuestas) {
    const sumar = (items) => items.reduce((acc, item) => {
      const v = respuestas[item.id];
      return acc + (typeof v === "number" ? v : 0);
    }, 0);

    const perfilHabla = {};
    this.areaHablaConversacional.items.forEach((item) => {
      perfilHabla[item.id] = respuestas[item.id] ?? null;
    });

    // Subtotal_Expresion = EO1+EO2+EO3+EO4 (EO5 excluido según la fórmula documentada)
    const itemsExpresionEnFormula = this.areaExpresionOral.items.filter((i) => i.id !== "eo5_denominacion_partes_cuerpo");
    const subtotalExpresion = sumar(itemsExpresionEnFormula);
    const eo5Aparte = respuestas["eo5_denominacion_partes_cuerpo"] ?? null;

    return {
      perfilHablaConversacional: perfilHabla, // no se suma, es un perfil (radar)
      subtotalComprension: sumar(this.areaComprensionAuditiva.items),
      subtotalExpresion,
      eo5_fuera_de_formula: eo5Aparte,
      subtotalLectura: sumar(this.areaLectura.items),
      subtotalEscritura: sumar(this.areaEscritura.items)
    };
  },

  // ---------- Cálculo de esFluido (H1 > 4 = fluido, según el criterio documentado) ----------
  determinarFluidez: function (h1Fluidez) {
    return typeof h1Fluidez === "number" && h1Fluidez > 4;
  },

  // ---------- Placeholder para Z-scores: requiere normas oficiales del BDAE ----------
  calcularZScoreComprension: function (subtotalComprension, edad, escolaridad) {
    throw new Error(
      "No implementado: el Z-score de comprensión auditiva requiere las tablas normativas " +
      "oficiales del BDAE. No se debe fabricar."
    );
  },

  // ---------- Árbol de clasificación sindrómica (dado completo en el documento) ----------
  // perfil: { esFluido: boolean, comprensionAuditivaBuena: boolean, repeticionBuena: boolean }
  // comprensionAuditivaBuena y repeticionBuena deben calcularse externamente con las
  // tablas normativas oficiales (Z-score > -1.5 DE), no se derivan aquí sin ellas.
  clasificarAfasia: function (perfil) {
    if (!perfil.esFluido) {
      if (!perfil.comprensionAuditivaBuena && !perfil.repeticionBuena) return "Afasia Global";
      if (!perfil.comprensionAuditivaBuena && perfil.repeticionBuena) return "Afasia Transcortical Mixta";
      if (perfil.comprensionAuditivaBuena && !perfil.repeticionBuena) return "Afasia de Broca";
      if (perfil.comprensionAuditivaBuena && perfil.repeticionBuena) return "Afasia Transcortical Motora";
    } else {
      if (!perfil.comprensionAuditivaBuena && !perfil.repeticionBuena) return "Afasia de Wernicke";
      if (!perfil.comprensionAuditivaBuena && perfil.repeticionBuena) return "Afasia Transcortical Sensorial";
      if (perfil.comprensionAuditivaBuena && !perfil.repeticionBuena) return "Afasia de Conducción";
      if (perfil.comprensionAuditivaBuena && perfil.repeticionBuena) return "Afasia Anómica";
    }
    return "Perfil Indeterminado / Afasia No Clasificada";
  },

  // ---------- Escala de Severidad General (0-5), asignación clínica cualitativa ----------
  nivelesSeveridad: [
    { nivel: 0, descripcion: "Ausencia de habla o comprensión. Comunicación imposible." },
    { nivel: 1, descripcion: "Comunicación totalmente a partir de expresiones fragmentarias; gran necesidad de inferencia y adivinación del oyente." },
    { nivel: 2, descripcion: "Puede mantener conversación sobre temas familiares con ayuda del interlocutor, pero falla frecuentemente al transmitir ideas complejas." },
    { nivel: 3, descripcion: "Puede mantener conversación sobre la vida diaria con mínima asistencia, pero muestra dificultades evidentes en denominación o articulación." },
    { nivel: 4, descripcion: "Pérdida perceptible de fluidez o facilidad de comprensión, sin limitación significativa sobre las ideas expresadas." },
    { nivel: 5, descripcion: "Errores mínimos o sutiles, detectables solo con pruebas clínicas específicas. Funciona con total autonomía en la comunidad." }
  ],

  obtenerDescripcionSeveridad: function (nivel) {
    const encontrado = this.nivelesSeveridad.find((n) => n.nivel === nivel);
    return encontrado ? encontrado.descripcion : null;
  }
};

if (typeof escalasNeuropsicologia !== "undefined") {
  escalasNeuropsicologia.push(escalaBDAE);
}

// ---------------------------------------------------------------
// Archivo original: doss.js
// ---------------------------------------------------------------
/* ============================================================
   PROTOCOLO DOSS — Dysphagia Outcome and Severity Scale
   (O'Neil et al., 1999)
   Especialidad: Terapia del Lenguaje / Fonoaudiología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Escala ordinal de UN solo ítem (7 niveles jerárquicos), basada en
   hallazgos INSTRUMENTALES (VFSS/FEES), no en cribado a pie de
   cama. Incluye validación cruzada con FOIS y Cambio Clínico Neto
   (CCN) entre evaluaciones.
   ============================================================ */

const escalaDOSS = {
  id: "doss",
  nombre: "Protocolo DOSS (Dysphagia Outcome and Severity Scale)",
  especialidad: "terapia-lenguaje",
  descripcion: "Clasifica la gravedad funcional de la disfagia a partir de estudios instrumentales (Videofluoroscopia/FEES), determinando en paralelo afectación fisiológica, independencia alimentaria y modificaciones de dieta.",
  tipo: "seleccion-unica",

  vectoresFisiologicos: [
    "Transporte del Bolo (Etapa Oral): eficiencia en masticación, control del bolo, tiempo de tránsito oral",
    "Retención en la Faringe (Etapa Faríngea): residuos o estasis en valléculas y senos piriformes",
    "Protección de la Vía Aérea: penetración laríngea o aspiración, y eficacia de la tos refleja"
  ],

  niveles: [
    { valor: 1, nombre: "Disfagia Severa", descripcion: "Nada por vía oral de forma segura. Retención severa imposible de limpiar, aspiración silente en ≥2 consistencias con tos no funcional, o imposibilidad física de tragar." },
    { valor: 2, nombre: "Disfagia Moderada-Severa", descripcion: "Nutrición no oral con ingesta oral parcial terapéutica. Asistencia máxima, estrategias compensatorias totales, solo tolera una consistencia bajo condiciones controladas." },
    { valor: 3, nombre: "Disfagia Moderada", descripcion: "Vía oral total pero con dos o más consistencias restringidas. Asistencia total o supervisión constante en mesa, con estrategias/maniobras facilitadoras estrictas." },
    { valor: 4, nombre: "Disfagia Leve-Moderada", descripcion: "Ingesta oral total con una o dos consistencias restringidas. Supervisión intermitente o pistas verbales. Residuos leves que limpia solo cuando se le indica." },
    { valor: 5, nombre: "Disfagia Leve", descripcion: "Ingesta oral total con una sola consistencia restringida (típicamente líquidos finos). Supervisión a distancia. Tos refleja fuerte que limpia la vía autónomamente." },
    { valor: 6, nombre: "Dentro de Límites Funcionales / Independencia Modificada", descripcion: "Dieta normal, mecanismo funcional e independiente. Puede tener leves retrasos o trazas de penetración que limpia espontáneamente. Sin penetración ni aspiración." },
    { valor: 7, nombre: "Normal en Todas las Situaciones", descripcion: "Dieta normal sin restricciones. Mecanismo deglutorio óptimo, velocidad normal, total autonomía sin estrategias posturales o compensatorias." }
  ],

  // ---------- Motor de procesamiento (equivalente al TypeScript entregado) ----------
  procesarDOSS: function (nivelSeleccionado) {
    const tablaResultados = {
      1: { gravedadDisfagia: "Severa", tipoNutricion: "Exclusivamente No Oral (NPO)", nivelSupervision: "Asistencia Máxima/Total", estadoSeguridad: "CRÍTICO", sugerenciaSoftware: "🚨 CRÍTICO: Vía oral suspendida. Alta probabilidad de aspiración masiva silente. Implementar nutrición enteral e higiene oral profiláctica severa." },
      2: { gravedadDisfagia: "Moderada-Severa", tipoNutricion: "Exclusivamente No Oral (NPO)", nivelSupervision: "Asistencia Máxima/Total", estadoSeguridad: "CRÍTICO", sugerenciaSoftware: "Monitorear deglución en ambiente terapéutico controlado. El soporte calórico principal se mantiene por vía alternativa." },
      3: { gravedadDisfagia: "Moderada", tipoNutricion: "Dieta Oral Modificada", nivelSupervision: "Supervisión Constante", estadoSeguridad: "PRECAUCIÓN", sugerenciaSoftware: "Dos o más consistencias prohibidas. Requiere que un cuidador o terapeuta vigile y guíe activamente cada deglución en la mesa." },
      4: { gravedadDisfagia: "Leve-Moderada", tipoNutricion: "Dieta Oral Modificada", nivelSupervision: "Supervisión Intermitente", estadoSeguridad: "PRECAUCIÓN", sugerenciaSoftware: "Una o dos consistencias restringidas. Entrenar al paciente para que ejecute la limpieza de estasis orofaríngeo ante pistas verbales." },
      5: { gravedadDisfagia: "Leve", tipoNutricion: "Dieta Oral Modificada", nivelSupervision: "Supervisión Intermitente", estadoSeguridad: "PRECAUCIÓN", sugerenciaSoftware: "Restricción de una consistencia (líquidos finos). Vía aérea protegida de manera autónoma gracias a un reflejo tusígeno eficaz." },
      6: { gravedadDisfagia: "Límites Funcionales", tipoNutricion: "Dieta Oral Completa / Normal", nivelSupervision: "Independencia", estadoSeguridad: "SEGURO", sugerenciaSoftware: "Mecanismo deglutorio funcional y seguro. No requiere estrategias. Contemplar únicamente tiempo extra para la ingesta." },
      7: { gravedadDisfagia: "Normal", tipoNutricion: "Dieta Oral Completa / Normal", nivelSupervision: "Independencia", estadoSeguridad: "SEGURO", sugerenciaSoftware: "✅ Swallowing Performance óptimo. Ingesta normal en cualquier entorno, consistencia y velocidad." }
    };

    const resultado = tablaResultados[nivelSeleccionado];
    if (!resultado) {
      throw new Error("Nivel DOSS inválido: debe ser un entero entre 1 y 7.");
    }
    return { nivel: nivelSeleccionado, ...resultado };
  },

  // ---------- Validación cruzada DOSS vs. FOIS ----------
  // Si el nivel DOSS es <=2, el nivel FOIS no puede ser >=4 (contradicción médica)
  validarCruceConFOIS: function (nivelDOSS, nivelFOIS) {
    if (nivelDOSS <= 2 && nivelFOIS >= 4) {
      return {
        valido: false,
        motivo: "Contradicción médica: un paciente con disfagia fisiológica severa instrumental (DOSS ≤2) no puede tener una dieta oral completa registrada en FOIS (≥4)."
      };
    }
    return { valido: true, motivo: null };
  },

  // ---------- Cambio Clínico Neto (CCN) ----------
  calcularCCN: function (nivelDOSSActual, nivelDOSSAnterior) {
    const ccn = nivelDOSSActual - nivelDOSSAnterior;
    let interpretacion;
    if (ccn > 0) interpretacion = "Mejoría clínica";
    else if (ccn === 0) interpretacion = "Estable";
    else interpretacion = "Deterioro clínico";
    return { ccn, interpretacion };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaDOSS);
}

// ---------------------------------------------------------------
// Archivo original: fois.js
// ---------------------------------------------------------------
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

// ---------------------------------------------------------------
// Archivo original: frenchay_dysarthria.js
// ---------------------------------------------------------------
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

// ---------------------------------------------------------------
// Archivo original: guss.js
// ---------------------------------------------------------------
/* ============================================================
   GUSS — Gugging Swallowing Screen (Trapl et al., 2007)
   Especialidad: Terapia del Lenguaje / Fonoaudiología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Cribado rápido secuencial (no diagnóstico exhaustivo como el
   MASA). Lógica de CORTOCIRCUITO: si un bloque no obtiene puntaje
   perfecto, los bloques siguientes se bloquean y no se aplican —
   la prueba se detiene por seguridad. Rango total: 0-20.
   ============================================================ */

const escalaGUSS = {
  id: "guss",
  nombre: "GUSS (Gugging Swallowing Screen)",
  especialidad: "terapia-lenguaje",
  descripcion: "Cribado rápido y a pie de cama de disfagia y riesgo de aspiración en ACV agudo, con interrupción automática por seguridad si el paciente falla un bloque.",
  puntajeMaximo: 20,

  // ---------- Parte 1: Cribado indirecto (sin alimento) ----------
  parte1: {
    nombre: "Parte 1: Evaluación Preliminar / Cribado Indirecto (sin alimento)",
    items: [
      { id: "alerta", texto: "Alerta (vigilancia): completamente alerta ≥15 minutos", opciones: [{ valor: 1, label: "1 - Sí" }, { valor: 0, label: "0 - Somnoliento o sin respuesta" }] },
      { id: "tos", texto: "Tos voluntaria y/o carraspeo", opciones: [{ valor: 1, label: "1 - Fuerte y efectiva" }, { valor: 0, label: "0 - Débil o ausente" }] },
      { id: "deglucioSaliva", texto: "Deglución de saliva", opciones: [{ valor: 1, label: "1 - Exitosa (espontánea o a la orden)" }, { valor: 0, label: "0 - Incapaz" }] },
      { id: "babeo", texto: "Babeo / Sialorrea", opciones: [{ valor: 1, label: "1 - Ausente (controla su saliva)" }, { valor: 0, label: "0 - Presente" }] },
      { id: "cambioVoz", texto: "Cambio de voz (tras tragar saliva)", opciones: [{ valor: 1, label: "1 - Voz limpia" }, { valor: 0, label: "0 - Voz húmeda o ronca" }] }
    ]
  },

  // ---------- Parte 2: Cribado directo (con alimento), 3 pasos secuenciales ----------
  pasosParte2: [
    {
      id: "semisolido",
      nombre: "Paso 1: Consistencia Semisólida (puré/flan)",
      items: [
        { id: "deglucion", texto: "Deglución", opciones: [{ valor: 2, label: "2 - Exitosa" }, { valor: 1, label: "1 - Retrasada (>2s)" }, { valor: 0, label: "0 - Incapaz" }] },
        { id: "tos", texto: "Tos", opciones: [{ valor: 1, label: "1 - Ausente" }, { valor: 0, label: "0 - Presente" }] },
        { id: "babeo", texto: "Babeo", opciones: [{ valor: 1, label: "1 - Ausente" }, { valor: 0, label: "0 - Presente" }] },
        { id: "voz", texto: "Voz", opciones: [{ valor: 1, label: "1 - Limpia" }, { valor: 0, label: "0 - Húmeda / cambios" }] }
      ]
    },
    {
      id: "liquido",
      nombre: "Paso 2: Consistencia Líquida (agua pura)",
      items: [
        { id: "deglucion", texto: "Deglución", opciones: [{ valor: 2, label: "2 - Exitosa" }, { valor: 1, label: "1 - Retrasada" }, { valor: 0, label: "0 - Incapaz" }] },
        { id: "tos", texto: "Tos", opciones: [{ valor: 1, label: "1 - Ausente" }, { valor: 0, label: "0 - Presente" }] },
        { id: "babeo", texto: "Babeo", opciones: [{ valor: 1, label: "1 - Ausente" }, { valor: 0, label: "0 - Presente" }] },
        { id: "voz", texto: "Voz", opciones: [{ valor: 1, label: "1 - Limpia" }, { valor: 0, label: "0 - Húmeda" }] }
      ]
    },
    {
      id: "solido",
      nombre: "Paso 3: Consistencia Sólida (pan seco)",
      items: [
        { id: "deglucion", texto: "Deglución", opciones: [{ valor: 2, label: "2 - Exitosa" }, { valor: 1, label: "1 - Retrasada" }, { valor: 0, label: "0 - Incapaz" }] },
        { id: "tos", texto: "Tos", opciones: [{ valor: 1, label: "1 - Ausente" }, { valor: 0, label: "0 - Presente" }] },
        { id: "babeo", texto: "Babeo", opciones: [{ valor: 1, label: "1 - Ausente" }, { valor: 0, label: "0 - Presente" }] },
        { id: "voz", texto: "Voz", opciones: [{ valor: 1, label: "1 - Limpia" }, { valor: 0, label: "0 - Húmeda" }] }
      ]
    }
  ],

  // ---------- Motor de flujo secuencial (equivalente al TypeScript entregado) ----------
  // evaluacion: { parte1: {alerta,tos,deglucioSaliva,babeo,cambioVoz}, semisolido?, liquido?, solido? }
  calcularGUSS: function (evaluacion) {
    const sumarBloque = (bloque, claves) => claves.reduce((acc, k) => acc + (bloque[k] ?? 0), 0);

    const p1Subtotal = sumarBloque(evaluacion.parte1, ["alerta", "tos", "deglucioSaliva", "babeo", "cambioVoz"]);
    if (p1Subtotal < 5) {
      return this._generarResultado(p1Subtotal, "Interrumpido en Parte 1 (cribado indirecto)");
    }

    if (!evaluacion.semisolido) return this._generarResultado(p1Subtotal, "Parte 1 completa; semisólido no evaluado");
    const semiSubtotal = sumarBloque(evaluacion.semisolido, ["deglucion", "tos", "babeo", "voz"]);
    const totalConSemi = p1Subtotal + semiSubtotal;
    if (semiSubtotal < 5) {
      return this._generarResultado(totalConSemi, "Interrumpido en Paso 1 (semisólido)");
    }

    if (!evaluacion.liquido) return this._generarResultado(totalConSemi, "Semisólido completo; líquido no evaluado");
    const liqSubtotal = sumarBloque(evaluacion.liquido, ["deglucion", "tos", "babeo", "voz"]);
    const totalConLiq = totalConSemi + liqSubtotal;
    if (liqSubtotal < 5) {
      return this._generarResultado(totalConLiq, "Interrumpido en Paso 2 (líquido)");
    }

    if (!evaluacion.solido) return this._generarResultado(totalConLiq, "Líquido completo; sólido no evaluado");
    const solSubtotal = sumarBloque(evaluacion.solido, ["deglucion", "tos", "babeo", "voz"]);
    const totalFinal = totalConLiq + solSubtotal;

    return this._generarResultado(totalFinal, "Evaluación completa (los 4 bloques)");
  },

  _generarResultado: function (puntaje, estadoFlujo) {
    let severidadDisfagia, riesgoAspiracion, recomendacionDieta;

    if (puntaje === 20) {
      severidadDisfagia = "Normal/Sin disfagia";
      riesgoAspiracion = "Bajo";
      recomendacionDieta = "Dieta normal. Líquidos y sólidos sin restricciones.";
    } else if (puntaje >= 15) {
      severidadDisfagia = "Leve";
      riesgoAspiracion = "Bajo";
      recomendacionDieta = "Dieta regular para sólidos. Monitorear líquidos con precaución.";
    } else if (puntaje >= 10) {
      severidadDisfagia = "Moderada";
      riesgoAspiracion = "Alto";
      recomendacionDieta = "Dieta semisólida (purés). Líquidos estrictamente espesados. NADA de líquidos finos.";
    } else {
      severidadDisfagia = "Grave";
      riesgoAspiracion = "Muy alto";
      recomendacionDieta = "🚨 NADA POR BOCA (NPO). Requiere alimentación por sonda nasogástrica o PEG.";
    }

    return { puntajeTotal: puntaje, estadoFlujo, severidadDisfagia, riesgoAspiracion, recomendacionDieta };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaGUSS);
}

// ---------------------------------------------------------------
// Archivo original: masa.js
// ---------------------------------------------------------------
/* ============================================================
   MASA — Mann Assessment of Swallowing Ability (2002)
   Especialidad: Terapia del Lenguaje / Fonoaudiología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   24 ítems con puntuación ponderada variable por ítem (0-2-5-8-10
   o 0-5-10-15-20 según la estructura), evaluando el mecanismo
   deglutorio completo. Clasificación DUAL: severidad de disfagia +
   riesgo de aspiración (variables independientes entre sí).

   ⚠️ INCONSISTENCIA DETECTADA Y VERIFICADA CON CÁLCULO:
   El documento declara "puntuación máxima de 200 puntos", pero
   sumando el máximo declarado de cada uno de los 24 ítems tal como
   están descritos, el total real es 240, no 200 (diferencia de 40
   puntos). A diferencia del caso del WAB (donde sí pude identificar
   con certeza qué corregir), aquí NO hay forma de saber cuáles de
   los 24 ítems tienen un valor de puntos mal transcrito sin el
   manual oficial de Mann — así que NO se fabricó una corrección.
   Se implementó con los valores literales de cada ítem tal como
   vienen en el documento, y el máximo se calcula de forma DINÁMICA
   (240), no se fuerza a 200. Los cortes de clasificación (139, 167,
   177, 178 / 170, 180) se dejaron tal cual, ya que fueron diseñados
   para una escala de 200 — deben validarse contra el manual oficial
   antes de usarse en producción con esta discrepancia sin resolver.
   ============================================================ */

const escalaMASA = {
  id: "masa",
  nombre: "MASA (Mann Assessment of Swallowing Ability)",
  especialidad: "terapia-lenguaje",
  descripcion: "Evalúa cuantitativamente los componentes anatomofisiológicos e integradores del mecanismo deglutorio, y estima el riesgo de aspiración, mediante 24 ítems.",
  puntajeMaximoDocumentado: 200,
  notaDiscrepancia: "El máximo real sumando los 24 ítems da 240, no 200 como declara el documento fuente. Ver nota superior — no se fabricó una corrección sin el manual oficial.",

  items: [
    { id: "m1", nombre: "Alerta", opciones: [{ valor: 10, label: "10 - Completamente alerta" }, { valor: 8, label: "8 - Somnoliento/Fácil despertar" }, { valor: 5, label: "5 - Estuporoso/Despertar con estímulo vigoroso" }, { valor: 2, label: "2 - Comatoso" }] },
    { id: "m2", nombre: "Cooperación", opciones: [{ valor: 10, label: "10 - Altamente cooperativo" }, { valor: 5, label: "5 - Cooperación intermitente/Requiere pistas" }, { valor: 0, label: "0 - No coopera o incapaz de seguir instrucciones" }] },
    { id: "m3", nombre: "Lenguaje", opciones: [{ valor: 10, label: "10 - Normal/Sin afasia" }, { valor: 8, label: "8 - Afasia leve" }, { valor: 5, label: "5 - Afasia moderada" }, { valor: 2, label: "2 - Afasia severa/Ausencia de lenguaje" }] },
    { id: "m4", nombre: "Comprensión Auditiva", opciones: [{ valor: 10, label: "10 - Sigue comandos complejos" }, { valor: 5, label: "5 - Sigue solo comandos simples de un paso" }, { valor: 0, label: "0 - Sin comprensión analítica" }] },
    { id: "m5", nombre: "Disartria", opciones: [{ valor: 10, label: "10 - Habla normal" }, { valor: 5, label: "5 - Disartria leve/moderada" }, { valor: 0, label: "0 - Disartria severa/Anartria" }] },
    { id: "m6", nombre: "Apraxia Oral", opciones: [{ valor: 10, label: "10 - Sin apraxia" }, { valor: 5, label: "5 - Apraxia leve (titubeo gestual)" }, { valor: 0, label: "0 - Apraxia severa" }] },
    { id: "m7", nombre: "Salivación", opciones: [{ valor: 10, label: "10 - Normal" }, { valor: 5, label: "5 - Sialorrea (exceso de saliva)" }, { valor: 0, label: "0 - Sequedad extrema (xerostomía)" }] },
    { id: "m8", nombre: "Línea Labial", opciones: [{ valor: 10, label: "10 - Cierre simétrico y fuerte" }, { valor: 5, label: "5 - Debilidad unilateral leve" }, { valor: 0, label: "0 - Incompetencia labial total" }] },
    { id: "m9", nombre: "Movimiento Mandibular", opciones: [{ valor: 5, label: "5 - Movimiento simétrico y fuerza normal" }, { valor: 2, label: "2 - Desviación o rango limitado" }, { valor: 0, label: "0 - Incapacidad de apertura o cierre contra resistencia" }] },
    { id: "m10", nombre: "Reflejo Palatino", opciones: [{ valor: 10, label: "10 - Elevación simétrica del velo" }, { valor: 5, label: "5 - Elevación asimétrica/debilidad unilateral" }, { valor: 0, label: "0 - Sin movimiento palatino" }] },
    { id: "m11", nombre: "Fuerza Lingual", opciones: [{ valor: 10, label: "10 - Rango total y fuerza simétrica" }, { valor: 8, label: "8 - Debilidad leve unilateral" }, { valor: 5, label: "5 - Rango limitado" }, { valor: 2, label: "2 - Movimiento mínimo o fasciculaciones" }] },
    { id: "m12", nombre: "Reflejo Nauseoso", opciones: [{ valor: 5, label: "5 - Presente y normal" }, { valor: 2, label: "2 - Disminuido/Hiporreactivo" }, { valor: 0, label: "0 - Ausente" }] },
    { id: "m13", nombre: "Tos Voluntaria", opciones: [{ valor: 10, label: "10 - Fuerte y efectiva" }, { valor: 5, label: "5 - Débil/Bovina" }, { valor: 0, label: "0 - Ausente" }] },
    { id: "m14", nombre: "Calidad de la Voz", opciones: [{ valor: 10, label: "10 - Normal" }, { valor: 5, label: "5 - Voz húmeda, ronca o disfónica" }, { valor: 0, label: "0 - Afonía total" }] },
    { id: "m15", nombre: "Tránsito Oral", opciones: [{ valor: 10, label: "10 - Normal (<1 segundo)" }, { valor: 8, label: "8 - Retraso leve" }, { valor: 5, label: "5 - Tránsito desorganizado/Residuos orales" }, { valor: 2, label: "2 - Mínima propulsión" }] },
    { id: "m16", nombre: "Limpieza Oral", opciones: [{ valor: 5, label: "5 - Limpieza completa de la cavidad" }, { valor: 2, label: "2 - Residuos en surcos o lengua" }, { valor: 0, label: "0 - Estasis severo del bolo" }] },
    { id: "m17", nombre: "Inicio de la Deglución Faríngea", opciones: [{ valor: 10, label: "10 - Inmediato (palpación de elevación hioidea)" }, { valor: 5, label: "5 - Retraso evidente (>2 segundos)" }, { valor: 0, label: "0 - Ausente" }] },
    { id: "m18", nombre: "Elevación Laríngea", opciones: [{ valor: 10, label: "10 - Elevación completa y normal" }, { valor: 5, label: "5 - Elevación parcial o reducida" }, { valor: 0, label: "0 - Ausente" }] },
    { id: "m19", nombre: "Tos Deglutoria", opciones: [{ valor: 10, label: "10 - Sin tos espontánea" }, { valor: 5, label: "5 - Tos inmediata al tragar" }, { valor: 0, label: "0 - Tos retrasada o ahogo severo" }] },
    { id: "m20", nombre: "Estridor Post-Deglución", opciones: [{ valor: 5, label: "5 - Ausente/Respiración limpia" }, { valor: 2, label: "2 - Estridor inspiratorio leve" }, { valor: 0, label: "0 - Estridor marcado" }] },
    { id: "m21", nombre: "Voz Húmeda Post-Deglución", opciones: [{ valor: 10, label: "10 - Sin cambios/Voz limpia" }, { valor: 5, label: "5 - Cambios evidentes a voz húmeda o \"gorgoteante\"" }, { valor: 0, label: "0 - Incapacidad para fonar de forma limpia" }] },
    { id: "m22", nombre: "Fase Faríngea General", opciones: [{ valor: 10, label: "10 - Ejecución perfecta" }, { valor: 5, label: "5 - Sospecha de residuo faríngeo por múltiples degluciones" }, { valor: 0, label: "0 - Falla masiva" }] },
    { id: "m23", nombre: "Juicio Clínico — Disfagia", opciones: [{ valor: 20, label: "20 - Sin signos de disfagia" }, { valor: 15, label: "15 - Disfagia leve" }, { valor: 10, label: "10 - Disfagia moderada" }, { valor: 5, label: "5 - Disfagia severa" }] },
    { id: "m24", nombre: "Juicio Clínico — Aspiración", opciones: [{ valor: 20, label: "20 - Sin riesgo aparente" }, { valor: 15, label: "15 - Riesgo bajo" }, { valor: 10, label: "10 - Riesgo moderado" }, { valor: 5, label: "5 - Alto riesgo de aspiración clínica o silente" }] }
  ],

  // ---------- Máximo real calculado dinámicamente (ver nota de discrepancia) ----------
  calcularMaximoReal: function () {
    return this.items.reduce((acc, item) => acc + item.opciones[0].valor, 0);
  },

  // ---------- Eje A: Severidad de disfagia ----------
  clasificarSeveridadDisfagia: function (puntajeTotal) {
    if (puntajeTotal >= 178) return "Normal";
    if (puntajeTotal >= 168) return "Déficit Leve";
    if (puntajeTotal >= 139) return "Déficit Moderado";
    return "Déficit Severo"; // <139
  },

  // ---------- Eje B: Riesgo de aspiración ----------
  clasificarRiesgoAspiracion: function (puntajeTotal) {
    if (puntajeTotal >= 180) return "Riesgo Bajo";
    if (puntajeTotal >= 170) return "Riesgo Moderado";
    return "Riesgo Alto"; // <170
  },

  // ---------- Función de cálculo consolidada (equivalente al TypeScript entregado) ----------
  calcularMASA: function (respuestas) {
    const valores = this.items.map((item) => respuestas[item.id]);
    if (valores.some((v) => typeof v !== "number")) {
      throw new Error("El vector de reactivos del MASA debe contener los 24 ítems completos.");
    }

    const puntajeTotal = valores.reduce((acc, v) => acc + v, 0);
    const severidadDisfagia = this.clasificarSeveridadDisfagia(puntajeTotal);
    const riesgoAspiracion = this.clasificarRiesgoAspiracion(puntajeTotal);

    let alertaClinica = "Mecanismo deglutorio seguro y estable.";
    if (riesgoAspiracion === "Riesgo Alto" || severidadDisfagia === "Déficit Severo") {
      alertaClinica = "🚨 CRÍTICO: Alto riesgo de aspiración y/o disfagia severa detectados. Se sugiere suspensión inmediata de la vía oral por seguridad e interconsulta para Videofluoroscopia.";
    } else if (riesgoAspiracion === "Riesgo Moderado") {
      alertaClinica = "⚠️ PRECAUCIÓN: Riesgo de aspiración moderado. Se recomienda alimentación bajo estricta supervisión y uso de consistencias adaptadas.";
    }

    return { puntajeTotal, maximoReal: this.calcularMaximoReal(), severidadDisfagia, riesgoAspiracion, alertaClinica };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaMASA);
}

// ---------------------------------------------------------------
// Archivo original: mbgr.js
// ---------------------------------------------------------------
/* ============================================================
   PROTOCOLO MBGR — Marchesan, Berretin-Felix, Genaro y Rehder
   Especialidad: Terapia del Lenguaje / Motricidad Orofacial
   ============================================================
   Escala INVERTIDA: 0=Normal, valores mayores=más patología.
   Subtotales separados (Anatomía vs. Funciones) para no diluir
   el diagnóstico. NOTA: el documento da solo 4 ítems de ejemplo
   por componente (postura_labios, freno_lingual, tonus_masetero,
   paladar_duro / respiracion_modo, masticacion_patron,
   deglucion_escape, fono_distorsion) — el protocolo oficial completo
   tiene más reactivos; se estructura con los dados, ampliable.
   ============================================================ */

const escalaMBGR = {
  id: "mbgr",
  nombre: "Protocolo MBGR (Motricidad Orofacial)",
  especialidad: "terapia-lenguaje",
  descripcion: "Estándar de oro en Motricidad Orofacial y Terapia Miofuncional en Latinoamérica. Evalúa estructuras anatómicas y funciones orofaciales.",
  notaAlcance: "El documento fuente da 4 ítems de ejemplo por componente; el protocolo oficial completo tiene más reactivos — estructura ampliable.",

  opciones: [
    { valor: 0, label: "0 - Normal" },
    { valor: 1, label: "1 - Alteración leve" },
    { valor: 2, label: "2 - Alteración moderada" },
    { valor: 3, label: "3 - Alteración severa" }
  ],

  componentes: {
    anatomia: {
      nombre: "Anatomía",
      items: [
        { id: "postura_labios", texto: "Postura de labios" },
        { id: "freno_lingual", texto: "Frenillo lingual" },
        { id: "tonus_masetero", texto: "Tono del masetero" },
        { id: "paladar_duro", texto: "Paladar duro" }
      ]
    },
    funciones: {
      nombre: "Funciones",
      items: [
        { id: "respiracion_modo", texto: "Modo respiratorio" },
        { id: "masticacion_patron", texto: "Patrón de masticación" },
        { id: "deglucion_escape", texto: "Escape en la deglución" },
        { id: "fono_distorsion", texto: "Distorsión fonoarticulatoria" }
      ]
    }
  },

  clasificar: function (total) {
    if (total <= 10) return "Variación anatómica menor sin impacto funcional";
    if (total <= 30) return "Disfunción miofuncional moderada: requiere terapia miofuncional (TMF)";
    return "Disfunción miofuncional severa: alta correlación con respiradores orales crónicos o maloclusiones esqueléticas; interconsulta con Ortodoncia/Otorrinolaringología"; // >30
  },

  calcularPuntaje: function (respuestas) {
    const sumar = (items) => items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);
    const subtotalAnatomia = sumar(this.componentes.anatomia.items);
    const subtotalFunciones = sumar(this.componentes.funciones.items);
    const total = subtotalAnatomia + subtotalFunciones;
    return { subtotalAnatomia, subtotalFunciones, total, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaMBGR);
}

// ---------------------------------------------------------------
// Archivo original: ssq.js
// ---------------------------------------------------------------
/* ============================================================
   SYDNEY SWALLOW QUESTIONNAIRE (SSQ)
   Especialidad: Terapia del Lenguaje
   ============================================================
   17 ítems, escala analógica visual (VAS) digital 0-100mm cada uno.
   Rango total: 0-1700 (17 × 100).
   ============================================================ */

const escalaSSQ = {
  id: "ssq",
  nombre: "Sydney Swallow Questionnaire (SSQ)",
  especialidad: "terapia-lenguaje",
  descripcion: "Cuestionario de autoinforme analógico-visual (PROM) ultra-sensible para disfagia percibida por el paciente.",
  puntajeMaximo: 1700,

  items: [
    { id: "ssq_1", texto: "Dificultad con líquidos finos" },
    { id: "ssq_2", texto: "Dificultad con sólidos duros" },
    { id: "ssq_3", texto: "Tiempo para terminar una comida" },
    { id: "ssq_4", texto: "Presencia de tos al comer/beber" },
    { id: "ssq_5", texto: "Sensación de comida atorada en la garganta" },
    { id: "ssq_6", texto: "Frustración al comer" },
    { id: "ssq_7", texto: "Ítem VAS adicional 7" },
    { id: "ssq_8", texto: "Ítem VAS adicional 8" },
    { id: "ssq_9", texto: "Ítem VAS adicional 9" },
    { id: "ssq_10", texto: "Ítem VAS adicional 10" },
    { id: "ssq_11", texto: "Ítem VAS adicional 11" },
    { id: "ssq_12", texto: "Ítem VAS adicional 12" },
    { id: "ssq_13", texto: "Ítem VAS adicional 13" },
    { id: "ssq_14", texto: "Ítem VAS adicional 14" },
    { id: "ssq_15", texto: "Ítem VAS adicional 15" },
    { id: "ssq_16", texto: "Ítem VAS adicional 16" },
    { id: "ssq_17", texto: "Ítem VAS adicional 17" }
  ],
  notaAlcance: "El documento fuente da 6 reactivos clave con texto explícito; los 17 ítems totales existen en el instrumento oficial — los 11 restantes se dejan como placeholders VAS genéricos hasta contar con el listado completo del manual.",

  clasificar: function (total) {
    if (total < 200) return "Función deglutoria normal/fisiológica";
    if (total <= 500) return "Disfagia percibida leve";
    if (total <= 1000) return "Disfagia moderada: alto impacto en la calidad de vida";
    return "Disfagia severa auto-percibida: alerta para cribado urgente instrumental (DOSS/VFSS)";
  },

  calcularPuntaje: function (respuestas) {
    const total = this.items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);
    return { total, puntajeMaximo: this.puntajeMaximo, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaSSQ);
}

// ---------------------------------------------------------------
// Archivo original: token_test.js
// ---------------------------------------------------------------
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

// ---------------------------------------------------------------
// Archivo original: vfss_score.js
// ---------------------------------------------------------------
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

// ---------------------------------------------------------------
// Archivo original: wab.js
// ---------------------------------------------------------------
/* ============================================================
   WESTERN APHASIA BATTERY (WAB / WAB-R) — Andrew Kertesz, 1982
   Especialidad: Neuropsicología / Terapia del Lenguaje
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   ⚠️ CORRECCIÓN DETECTADA Y APLICADA (verificada con cálculo):
   El documento fuente indica que E (Lenguaje Espontáneo) debe
   "dividirse entre 2 para ajustar a escala 10", PERO también
   declara que el AQ final va de 0.0 a 100.0. Verificado con
   cálculo: si se divide E entre 2, el AQ máximo real es 80, no
   100 (contradice lo declarado). Si NO se divide (E se queda en
   escala 0-20), el máximo da exactamente 100 — y esto coincide
   además con la fórmula oficial real de Kertesz para el AQ. Se
   implementó SIN dividir E entre 2, para que el resultado final
   sea consistente con el rango 0-100 que el propio documento
   declara. Mismo criterio de corrección que se aplicó antes al
   SF-36 (ítem P32): se sigue la consistencia matemática
   verificable, no el paso textual aislado que la rompe.

   NOTA: el criterio de fluidez del árbol de clasificación usa el
   ítem W2_Fluidez de forma AISLADA (0-10), no el E combinado de la
   fórmula del AQ — así lo aclara el propio comentario del código
   fuente ("Ítem W2 de lenguaje espontáneo"), así que no hay
   conflicto entre ambos usos de "fluidez".
   ============================================================ */

const escalaWAB = {
  id: "wab",
  nombre: "Western Aphasia Battery (WAB / WAB-R)",
  especialidad: "neuropsicologia",
  descripcion: "Prueba gold standard para diagnóstico y clasificación de afasia, que condensa el desempeño lingüístico en el Cociente de Afasia (AQ), un indicador cuantitativo puro de gravedad del déficit.",

  subtests: [
    {
      id: "lenguaje-espontaneo",
      nombre: "Subtest 1: Lenguaje Espontáneo",
      items: [
        { id: "w1_contenido", texto: "Contenido: capacidad informativa de las respuestas ante preguntas cotidianas", rango: { minimo: 0, maximo: 10 } },
        { id: "w2_fluidez", texto: "Fluidez: ritmo, parafasias y esfuerzo articulatorio ante lámina estímulo (playa/picnic)", rango: { minimo: 0, maximo: 10 } }
      ]
    },
    {
      id: "comprension-auditiva",
      nombre: "Subtest 2: Comprensión Auditiva Verbal",
      items: [
        { id: "w3_preguntas", texto: 'Preguntas Sí/No de complejidad creciente (ej. "¿Se quema la madera en el fuego?")', rango: { minimo: 0, maximo: 60 } },
        { id: "w4_discriminacion", texto: "Discriminación: reconocer y señalar objetos, formas, colores, letras, números", rango: { minimo: 0, maximo: 60 } },
        { id: "w5_ordenes", texto: 'Órdenes secuenciales complejas (ej. "Toque el bolígrafo con el peine después de mirar la ventana")', rango: { minimo: 0, maximo: 80 } }
      ]
    },
    {
      id: "repeticion",
      nombre: "Subtest 3: Repetición",
      items: [
        { id: "w6_repeticion", texto: 'Repetir palabras, pseudopalabras, frases y oraciones complejas (ej. "El gran circo llegó al pueblo")', rango: { minimo: 0, maximo: 100 } }
      ]
    },
    {
      id: "denominacion",
      nombre: "Subtest 4: Denominación y Palabra Encontrada",
      items: [
        { id: "w7_objetos", texto: "Nombrar 20 objetos cotidianos presentados visualmente", rango: { minimo: 0, maximo: 60 } },
        { id: "w8_fluidez_verbal", texto: "Generar nombres de animales en 60 segundos (1 punto por animal correcto)", rango: { minimo: 0, maximo: 20 } },
        { id: "w9_completar", texto: 'Completar frases familiares truncadas (ej. "El azúcar es...")', rango: { minimo: 0, maximo: 10 } },
        { id: "w10_responder", texto: 'Responder con una palabra exacta (ej. "¿Con qué nos peinamos?")', rango: { minimo: 0, maximo: 10 } }
      ]
    }
  ],

  // ---------- Paso 1: subcomponentes ajustados ----------
  calcularSubcomponentes: function (respuestas) {
    const v = (id) => (typeof respuestas[id] === "number" ? respuestas[id] : 0);

    // E: Lenguaje Espontáneo — NO se divide entre 2 (ver nota de corrección arriba); escala 0-20
    const E = v("w1_contenido") + v("w2_fluidez");

    // C: Comprensión Auditiva — escala 0-10
    const C = (v("w3_preguntas") + v("w4_discriminacion") + v("w5_ordenes")) / 20;

    // R: Repetición — escala 0-10
    const R = v("w6_repeticion") / 10;

    // D: Denominación — escala 0-10
    const D = (v("w7_objetos") + v("w8_fluidez_verbal") + v("w9_completar") + v("w10_responder")) / 10;

    return { E, C, R, D };
  },

  // ---------- Paso 2: Cociente de Afasia (AQ) ----------
  calcularAQ: function (respuestas) {
    const { E, C, R, D } = this.calcularSubcomponentes(respuestas);
    const AQ = Math.round((E + C + R + D) * 2 * 10) / 10;
    return { E, C, R, D, AQ };
  },

  // ---------- Paso 3: árbol de clasificación taxonómica ----------
  // sub: { lenguajeEspontaneo (W2_Fluidez aislado, 0-10), comprensionAuditiva (C, 0-10), repeticion (R, 0-10) }
  clasificarAfasiaWAB: function (sub) {
    const esFluido = sub.lenguajeEspontaneo >= 5;

    if (!esFluido) {
      if (sub.comprensionAuditiva <= 3.9) {
        return sub.repeticion <= 4.9 ? "Afasia Global" : "Afasia Transcortical Mixta";
      } else {
        return sub.repeticion <= 7.9 ? "Afasia de Broca" : "Afasia Transcortical Motora";
      }
    } else {
      if (sub.comprensionAuditiva <= 6.9) {
        return sub.repeticion <= 6.9 ? "Afasia de Wernicke" : "Afasia Transcortical Sensorial";
      } else {
        return sub.repeticion <= 6.9 ? "Afasia de Conducción" : "Afasia Anómica";
      }
    }
  },

  // ---------- Paso 4: severidad según el AQ ----------
  clasificarSeveridadAQ: function (aq) {
    if (aq >= 93.8) return "Desempeño dentro de la Normalidad: no cumple criterios diagnósticos cuantitativos para afasia clínica";
    if (aq >= 76.0) return "Afasia Leve: dificultades sutiles para encontrar palabras o errores gramaticales aislados; buena autonomía comunicativa";
    if (aq >= 51.0) return "Afasia Moderada: compromiso intermitente en comprensión o producción; sugerir sistemas alternativos de comunicación o tableros de apoyo";
    if (aq >= 26.0) return "Afasia Severa: marcada limitación lingüística, afecta múltiples canales; requiere terapia fonoaudiológica intensiva";
    return "Afasia Muy Severa / Crítica: pérdida casi total de canales del lenguaje oral; priorizar estimulación basal y entrenamiento estricto al entorno familiar"; // 0-25.9
  },

  // ---------- Función consolidada ----------
  calcularResultadoCompleto: function (respuestas) {
    const { E, C, R, D, AQ } = this.calcularAQ(respuestas);
    const tipoAfasia = this.clasificarAfasiaWAB({
      lenguajeEspontaneo: respuestas["w2_fluidez"] ?? 0,
      comprensionAuditiva: C,
      repeticion: R
    });
    const severidad = this.clasificarSeveridadAQ(AQ);

    return { E, C, R, D, AQ, tipoAfasia, severidad };
  }
};

if (typeof escalasNeuropsicologia !== "undefined") {
  escalasNeuropsicologia.push(escalaWAB);
}
