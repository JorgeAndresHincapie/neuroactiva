/* ============================================================
   PDMS-2 — Peabody Developmental Motor Scales, Second Edition
   Especialidad: Terapia Ocupacional (Neurodesarrollo infantil)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   ⚠️ ALCANCE DE ESTA IMPLEMENTACIÓN — LEER ANTES DE USAR:
   La PDMS-2 no es un cuestionario de puntaje fijo como las demás
   escalas del banco — es una prueba de ADMINISTRACIÓN ADAPTATIVA
   con cientos de ítems (8+30+89+24+72+26 = 249 ítems en total)
   organizados por edad, usando lógica de "nivel basal" y "nivel
   techo" para no aplicar todos los ítems en cada sesión.

   Esta implementación SÍ incluye, completo y funcional:
   - La estructura de los 6 subtests (nombre, cantidad de ítems,
     rango de edad de aplicación)
   - El ALGORITMO de basal/techo (3 doses de 2 consecutivos = basal;
     3 ceros consecutivos = techo), que sí está completamente
     especificado en el documento fuente
   - El cálculo del Puntaje Bruto (PB) a partir del basal/techo
   - La clasificación clínica final de los 3 cocientes (CMG/CMF/CMT),
     ya que esos cortes numéricos SÍ vienen dados

   Esta implementación NO incluye (y no se debe fabricar sin la
   fuente oficial):
   - El texto individual de cada uno de los 249 ítems (el documento
     solo da el nombre y la cantidad de ítems por subtest, no el
     contenido de cada uno)
   - Las tablas de conversión Puntaje Bruto -> Puntuación Estándar
     (1-20) por edad — son tablas de baremación propietarias del
     manual oficial de la PDMS-2, no incluidas en el documento
   - La tabla de "Edad Motora Equivalente" por puntaje
   - El "Entry Point" (ítem de inicio) por edad para cada subtest

   Para completar esto se necesita transcribir las tablas del manual
   oficial (Folio, Fewell) — avisar si se tiene acceso a ellas.
   ============================================================ */

const escalaPDMS2 = {
  id: "pdms-2",
  nombre: "PDMS-2 (Peabody Developmental Motor Scales, 2nd Edition)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa el desarrollo motor grueso y fino en niños mediante 6 subtests con administración adaptativa (basal/techo).",

  subtests: [
    { id: "reflejos", nombre: "Reflejos (Reflexes)", componente: "grueso", totalItems: 8, edadAplicacion: "0 a 11 meses" },
    { id: "estacionario", nombre: "Estacionario (Stationary)", componente: "grueso", totalItems: 30, edadAplicacion: "todas las edades del test" },
    { id: "locomocion", nombre: "Locomoción (Locomotion)", componente: "grueso", totalItems: 89, edadAplicacion: "todas las edades del test" },
    { id: "manipulacion-objetos", nombre: "Manipulación de Objetos (Object Manipulation)", componente: "grueso", totalItems: 24, edadAplicacion: "a partir de los 11 meses" },
    { id: "integracion-visomotora", nombre: "Integración Visomotora (Visual-Motor Integration)", componente: "fino", totalItems: 72, edadAplicacion: "todas las edades del test" },
    { id: "agarre", nombre: "Agarre (Grasp)", componente: "fino", totalItems: 26, edadAplicacion: "todas las edades del test" }
  ],

  // ---------- Mapeo del puntuador ----------
  opciones: [
    { valor: 0, label: "0 - Incapaz de intentar la tarea, sin aproximación al movimiento" },
    { valor: 1, label: "1 - Inicio o ejecución parcial, no cumple el criterio completo" },
    { valor: 2, label: "2 - Ejecución completa y correcta según el criterio de excelencia" }
  ],

  // ============================================================
  // ALGORITMO DE BASAL / TECHO (completamente especificado en la fuente)
  // ============================================================
  // itemsAplicados: array ordenado de { numeroItem, puntaje } tal como se
  // fueron aplicando (puede incluir retrocesos si los primeros ítems dan
  // 0 o 1, según la regla de excepción).
  // Devuelve: { nivelBasal, nivelTecho, itemsCompletos (con los asumidos
  // antes del basal=2 y después del techo=0), puntajeBruto }
  calcularBasalYTecho: function (itemsAplicados) {
    // Ordenar por número de ítem para poder detectar 3 consecutivos
    const ordenados = [...itemsAplicados].sort((a, b) => a.numeroItem - b.numeroItem);

    // Buscar nivel basal: primeros 3 ítems consecutivos (en número de ítem)
    // con puntaje 2
    let nivelBasal = null;
    for (let i = 0; i <= ordenados.length - 3; i++) {
      const tresConsecutivos =
        ordenados[i + 1].numeroItem === ordenados[i].numeroItem + 1 &&
        ordenados[i + 2].numeroItem === ordenados[i + 1].numeroItem + 1;
      const todosEnDos =
        ordenados[i].puntaje === 2 && ordenados[i + 1].puntaje === 2 && ordenados[i + 2].puntaje === 2;
      if (tresConsecutivos && todosEnDos) {
        nivelBasal = ordenados[i].numeroItem; // primer ítem del trío basal
        break;
      }
    }

    // Buscar nivel techo: primeros 3 ítems consecutivos con puntaje 0,
    // buscando DESPUÉS del nivel basal
    let nivelTecho = null;
    if (nivelBasal !== null) {
      for (let i = 0; i <= ordenados.length - 3; i++) {
        if (ordenados[i].numeroItem < nivelBasal) continue;
        const tresConsecutivos =
          ordenados[i + 1].numeroItem === ordenados[i].numeroItem + 1 &&
          ordenados[i + 2].numeroItem === ordenados[i + 1].numeroItem + 1;
        const todosEnCero =
          ordenados[i].puntaje === 0 && ordenados[i + 1].puntaje === 0 && ordenados[i + 2].puntaje === 0;
        if (tresConsecutivos && todosEnCero) {
          nivelTecho = ordenados[i].numeroItem; // primer ítem del trío techo
          break;
        }
      }
    }

    if (nivelBasal === null) {
      return {
        nivelBasal: null,
        nivelTecho: null,
        puntajeBruto: null,
        estado: "No se ha establecido un nivel basal — continuar retrocediendo en los ítems según la regla de excepción"
      };
    }

    // Puntaje Bruto = (ítems asumidos en 2, antes del basal) + (suma real de
    // los ítems aplicados entre el basal y el último ítem del trío techo,
    // inclusive) + (ítems posteriores al techo, asumidos en 0, no suman nada)
    const itemsAsumidosAntesBasal = (nivelBasal - 1) * 2;

    const limiteSuperior = nivelTecho !== null ? nivelTecho + 2 : Infinity;
    const sumaAplicadosReales = ordenados
      .filter((item) => item.numeroItem >= nivelBasal && item.numeroItem <= limiteSuperior)
      .reduce((acc, item) => acc + item.puntaje, 0);

    const puntajeBruto = itemsAsumidosAntesBasal + sumaAplicadosReales;

    return {
      nivelBasal,
      nivelTecho,
      puntajeBruto,
      estado: nivelTecho !== null ? "Basal y techo establecidos — subtest completo" : "Basal establecido, aplicar ítems ascendentes hasta lograr 3 ceros consecutivos"
    };
  },

  // ============================================================
  // CLASIFICACIÓN CLÍNICA DE LOS COCIENTES (CMG, CMF, CMT)
  // Estos cortes SÍ vienen dados explícitamente en el documento —
  // se aplican sobre el cociente ya calculado con las tablas de
  // baremación oficiales (no incluidas aquí, ver nota superior)
  // ============================================================
  clasificarCociente: function (cociente) {
    if (cociente > 130) return "Desarrollo Muy Superior";
    if (cociente >= 121) return "Desarrollo Superior";
    if (cociente >= 111) return "Desarrollo Sobre el Promedio";
    if (cociente >= 90) return "Desarrollo Normal / Promedio";
    if (cociente >= 80) return "Desarrollo Bajo el Promedio";
    if (cociente >= 70) return "Retraso Motor Moderado (Déficit Leve/Límite): iniciar plan de TO/fisioterapia enfocado en ítems fallidos entre basal y techo";
    return "Retraso Psicomotor Severo: alerta clínica prioritaria, alto riesgo de trastornos del neurodesarrollo o parálisis cerebral; derivación a neuropediatría inmediata"; // <70
  },

  // ---------- Placeholder explícito para las tablas de baremación ----------
  // Debe completarse con las tablas oficiales del manual PDMS-2 (Folio &
  // Fewell) para convertir Puntaje Bruto -> Puntuación Estándar (1-20) y
  // para obtener la Edad Motora Equivalente. Sin esas tablas, el sistema
  // NO puede calcular CMG/CMF/CMT de forma válida — solo puede calcular
  // el Puntaje Bruto por subtest (ver calcularBasalYTecho).
  convertirAPuntuacionEstandar: function (puntajeBruto, subtestId, edadMeses) {
    throw new Error(
      "No implementado: requiere las tablas de baremación oficiales del manual PDMS-2 " +
      "(no incluidas en el documento fuente). No se debe fabricar esta conversión."
    );
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaPDMS2);
}
