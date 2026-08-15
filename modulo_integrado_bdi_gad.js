/* ============================================================
   MÓDULO INTEGRADO DE PSICOLOGÍA — BDI-II + GAD-7
   Especialidad: Psicología
   ============================================================
   Procesa BDI-II y GAD-7 en conjunto (ambos ya existen como
   escalas independientes en bdi_ii.js y gad7.js) y genera una
   alerta clínica GLOBAL que cruza ambos resultados — útil para
   el dashboard cuando se aplican las dos pruebas en la misma
   sesión, en vez de mostrar dos alertas separadas sin relación.
   ============================================================ */

const moduloIntegradoPsicologia = {
  id: "modulo-integrado-psicologia-bdi-gad",
  nombre: "Módulo Integrado: BDI-II + GAD-7",
  especialidad: "psicologia",
  descripcion: "Procesa depresión (BDI-II) y ansiedad (GAD-7) en conjunto, con lógica de alerta clínica cruzada para el dashboard cuando ambas pruebas se aplican en la misma sesión.",

  // ---------- Función de cálculo consolidada ----------
  // bdiReactivos: array de exactamente 21 enteros (0-3)
  // gadReactivos: array de exactamente 7 enteros (0-3)
  procesarModuloPsicologia: function (bdiReactivos, gadReactivos) {
    if (bdiReactivos.length !== 21 || gadReactivos.length !== 7) {
      throw new Error("Dimensiones incorrectas en los vectores de reactivos.");
    }

    // 1. Procesar BDI-II
    const bdiTotal = bdiReactivos.reduce((acc, val) => acc + val, 0);
    const alertaSuicidaActiva = bdiReactivos[8] >= 1; // Ítem 9 (índice 8) = ideación suicida

    let bdiSeveridad = "Mínima";
    if (bdiTotal >= 29) bdiSeveridad = "Grave";
    else if (bdiTotal >= 20) bdiSeveridad = "Moderada";
    else if (bdiTotal >= 14) bdiSeveridad = "Leve";

    // 2. Procesar GAD-7
    const gadTotal = gadReactivos.reduce((acc, val) => acc + val, 0);
    let gadSeveridad = "Mínima";
    if (gadTotal >= 15) gadSeveridad = "Grave";
    else if (gadTotal >= 10) gadSeveridad = "Moderada";
    else if (gadTotal >= 5) gadSeveridad = "Leve";

    // 3. Lógica cruzada de alertas para el dashboard
    let alertaClinicaGlobal = "Perfil psicológico dentro de los parámetros estables.";

    if (alertaSuicidaActiva) {
      alertaClinicaGlobal = "🚨 CRÍTICO: Se ha activado la alerta por ideación suicida. Notificar de forma prioritaria al equipo de psiquiatría/psicología clínica.";
    } else if (bdiSeveridad === "Grave" || gadSeveridad === "Grave") {
      alertaClinicaGlobal = "⚠️ ALERTA: Niveles severos de depresión o ansiedad detectados. Se sugiere intervención psicoterapéutica inmediata.";
    }

    return {
      bdiTotal,
      bdiSeveridad,
      alertaSuicidaActiva,
      gadTotal,
      gadSeveridad,
      alertaClinicaGlobal
    };
  }
};

if (typeof escalasPsicologia !== "undefined") {
  escalasPsicologia.push(moduloIntegradoPsicologia);
}
