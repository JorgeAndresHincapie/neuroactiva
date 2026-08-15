/* ============================================================
   BOT-2 — Bruininks-Oseretsky Test of Motor Proficiency, 2nd Ed.
   Especialidad: Terapia Ocupacional (Fisioterapia complementaria)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   ⚠️ ALCANCE DE ESTA IMPLEMENTACIÓN — LEER ANTES DE USAR:
   Igual que la PDMS-2, el BOT-2 requiere tablas de normalización
   psicométrica PROPIETARIAS del manual oficial (indexadas por edad
   exacta en años/meses Y género) para convertir:
     Puntaje Bruto -> Puntuación Escalar del Subtest (1-26)
     Puntuación Escalar -> Puntuación Estándar del Compuesto (20-80)
     Compuestos -> Total Motor Composite (media 100, DE 15)
   Esas tablas NO vienen en el documento fuente (solo se da UN
   ejemplo parcial para el ítem de abdominales) y no se deben
   fabricar. Esta implementación SÍ incluye completo y funcional:
     - Estructura de los 8 subtests en 4 compuestos
     - Cálculo del Puntaje Bruto (PB) por subtest (suma directa)
     - La clasificación clínica final (los cortes SÍ vienen dados)
   Y dejará explícito con un error cuando se intente convertir sin
   las tablas oficiales.

   NOTA sobre conteo de ítems: el documento dice "53 ítems en su
   versión completa", pero sumando los 8 subtests enumerados
   (7+8+5+7+9+9+5+5) da 55, no 53. Se deja esta discrepancia
   señalada — no se ajustó el conteo de ítems por subtest para
   forzar 53, ya que no hay indicación de cuáles 2 ítems sobrarían.
   ============================================================ */

const escalaBOT2 = {
  id: "bot-2",
  nombre: "BOT-2 (Bruininks-Oseretsky Test of Motor Proficiency, 2nd Ed.)",
  especialidad: "terapia-ocupacional",
  descripcion: "Gold standard para evaluación exhaustiva de competencia motora fina y gruesa en niños y jóvenes (4-21 años). A diferencia de la PDMS-2, no usa basal/techo — se aplican todos los ítems del subtest seleccionado.",
  notaConteoItems: "Documento fuente indica 53 ítems totales; la suma real de los subtests enumerados da 55 — discrepancia sin resolver, ver nota superior.",

  compuestos: [
    {
      id: "control-motor-fino",
      nombre: "Compuesto 1: Control Motor Fino (Fine Manual Control)",
      subtests: [
        { id: "su1", nombre: "Precisión Motora Fina (Fine Motor Precision)", totalItems: 7, ejemplos: "recortar un círculo, colorear una forma, conectar puntos, doblar papel" },
        { id: "su2", nombre: "Integración Motora Fina (Fine Motor Integration)", totalItems: 8, ejemplos: "copiar un cuadrado, una estrella, figuras superpuestas" }
      ]
    },
    {
      id: "coordinacion-manual",
      nombre: "Compuesto 2: Coordinación Manual (Manual Coordination)",
      subtests: [
        { id: "su3", nombre: "Destreza Manual (Manual Dexterity)", totalItems: 5, ejemplos: "meter fichas en una caja, clasificar cartas, enhebrar clavijas" },
        { id: "su4", nombre: "Coordinación Bilateral (Bilateral Coordination)", totalItems: 7, ejemplos: "aplaudir al ritmo, saltar abriendo/cerrando brazos-piernas, toques alternos con los pies" }
      ]
    },
    {
      id: "coordinacion-corporal",
      nombre: "Compuesto 3: Cuerpo Fuerte / Coordinación Corporal (Body Coordination)",
      subtests: [
        { id: "su5", nombre: "Equilibrio (Balance)", totalItems: 9, ejemplos: "un pie sobre una línea, caminar punta-talón, equilibrio en barra elevada con ojos abiertos/cerrados" },
        { id: "su6", nombre: "Coordinación de Extremidades Superiores", totalItems: 9, ejemplos: "atrapar una pelota con una/dos manos, lanzar a un blanco, rebotar la pelota" }
      ]
    },
    {
      id: "fuerza-agilidad",
      nombre: "Compuesto 4: Fuerza y Agilidad (Strength & Agility)",
      subtests: [
        { id: "su7", nombre: "Velocidad de Carrera y Agilidad (Running Speed & Agility)", totalItems: 5, ejemplos: "carrera de velocidad con retorno, saltar obstáculos con un pie, pasos laterales rápidos" },
        { id: "su8", nombre: "Fuerza (Strength)", totalItems: 5, ejemplos: "salto de longitud de pie, flexiones de brazos, abdominales en 30s, plancha" }
      ]
    }
  ],

  // ---------- Paso 2: Puntaje Bruto por subtest (suma directa de puntos de ítem) ----------
  // puntosPorItem: array de números ya normalizados (0-5 u otro rango según el
  // ítem específico, tras aplicar las tablas de umbral del Paso 1 — esas
  // tablas de umbral tampoco vienen completas en el documento, solo el
  // ejemplo de abdominales, así que la normalización de cada ítem físico
  // a "puntos de ítem" debe completarse con el manual oficial)
  calcularPuntajeBrutoSubtest: function (puntosPorItem) {
    return puntosPorItem.reduce((acc, p) => acc + (typeof p === "number" ? p : 0), 0);
  },

  // ---------- Paso 3: Conversión psicométrica — requiere tablas oficiales ----------
  convertirAPuntuacionEscalar: function (puntajeBruto, subtestId, edadAnios, edadMeses, genero) {
    throw new Error(
      "No implementado: requiere las tablas de normalización oficiales del manual BOT-2 " +
      "(indexadas por edad exacta y género). No se debe fabricar esta conversión."
    );
  },

  calcularPuntuacionEstandarCompuesto: function (puntuacionesEscalaresDelCompuesto) {
    throw new Error(
      "No implementado: la Puntuación Estándar del Compuesto (rango 20-80) no es una simple " +
      "suma de Scaled Scores — requiere las tablas de conversión oficiales del manual BOT-2."
    );
  },

  // ---------- Clasificación clínica final (estos cortes SÍ vienen dados) ----------
  // Se aplica sobre el Total Motor Composite YA CALCULADO con las tablas
  // oficiales (media 100, DE 15) — esta función no fabrica el valor, solo
  // lo interpreta una vez que el software externo/manual lo proporcione.
  clasificarTotalMotorComposite: function (total) {
    if (total >= 130) return "Competencia Motora Muy Superior: habilidades motrices altamente desarrolladas, apto para rendimiento deportivo avanzado";
    if (total >= 111) return "Sobre el Promedio: buen control motor y coordinación general";
    if (total >= 90) return "Promedio / Desarrollo Normal: ejecuta las tareas según los parámetros esperados para su edad";
    if (total >= 80) return "Bajo el Promedio: desempeño motor limítrofe, torpeza motriz leve o desacondicionamiento físico";
    if (total >= 70) return "Déficit Motor Moderado: priorizar intervención en Coordinación Bilateral y Equilibrio; afecta educación física y deportes comunitarios";
    return "Déficit Motor Severo / Trastorno del Desarrollo de la Coordinación (TDC/Dispraxia): alerta clínica prioritaria, requiere intervención intensiva de TO y fisioterapia"; // <70
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaBOT2);
}
