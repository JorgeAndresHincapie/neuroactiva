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
