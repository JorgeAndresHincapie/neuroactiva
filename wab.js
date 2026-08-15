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
