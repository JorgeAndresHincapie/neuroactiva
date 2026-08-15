/* ============================================================
   FUNCTIONAL REACH TEST (FRT) — Alcance Funcional Multidireccional
   Especialidad: Hidroterapia (también aplicable a Fisioterapia)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   A diferencia de las escalas anteriores, este NO es un cuestionario
   de puntos — es una MEDICIÓN en centímetros (promedio de 3 intentos
   por dirección), con:
   1. Mediciones en tierra firme (4 direcciones)
   2. Mediciones en medio acuático (2 direcciones)
   3. Clasificación de riesgo de caídas (Criterios Duncan, sobre el
      promedio "Hacia Adelante" en tierra)
   4. Comparación tierra vs. agua (interpretación clínica)
   5. Checklist biomecánico observacional (no puntuado, solo registro)
   ============================================================ */

const testFRT = {
  id: "functional-reach-test",
  nombre: "Functional Reach Test (FRT) — Alcance Funcional Multidireccional",
  especialidad: "hidroterapia",
  descripcion: "Herramienta clínico-métrica para medir el control postural, límites de estabilidad y riesgo de caídas, en tierra firme y en medio acuático.",
  tipo: "medicion",

  direccionesTierra: [
    { id: "tierra-adelante", numero: 1, texto: "Hacia Adelante (Anterior)" },
    { id: "tierra-atras", numero: 2, texto: "Hacia Atrás (Posterior)" },
    { id: "tierra-lateral-derecho", numero: 3, texto: "Lateral Derecho" },
    { id: "tierra-lateral-izquierdo", numero: 4, texto: "Lateral Izquierdo" }
  ],

  direccionesAgua: [
    { id: "agua-adelante", numero: 1, texto: "Hacia Adelante (Anterior)" },
    { id: "agua-lateral-afectado", numero: 2, texto: "Lateral (Lado Afectado)" }
  ],

  nivelesAgua: ["Ombligo", "Pecho (Xifoides)", "Axilas"],

  // Checklist biomecánico — observacional, NO puntuado (solo registro sí/no + observación)
  checklistBiomecanico: [
    { id: "estrategia-tobillo", texto: "Estrategia de Tobillo Eficiente (mantiene alineación y oscila desde la base)" },
    { id: "estrategia-cadera", texto: "Estrategia de Cadera Dominante (flexiona el tronco en exceso hacia adelante)" },
    { id: "compensacion-rodillas", texto: "Compensación con Rodillas (flexiona las rodillas para ganar distancia)" },
    { id: "perdida-contacto", texto: "Pérdida de Contacto (levanta los talones o los dedos del suelo)" },
    { id: "estrategia-paso", texto: "Estrategia de Paso (da un paso para evitar caer al romper el límite)" },
    { id: "asimetria-lateral", texto: "Asimetría Lateral (el alcance hacia un lado es notablemente menor)" }
  ],

  // ---------- Promedio de 3 intentos ----------
  calcularPromedio: function (intento1, intento2, intento3) {
    const valores = [intento1, intento2, intento3].filter((v) => typeof v === "number");
    if (valores.length === 0) return null;
    return Math.round((valores.reduce((a, b) => a + b, 0) / valores.length) * 10) / 10;
  },

  // ---------- Clasificación de riesgo de caídas (Criterios Duncan) ----------
  // Se aplica sobre el promedio "Hacia Adelante" en TIERRA firme
  clasificarRiesgoCaidas: function (promedioAdelanteEnTierra) {
    if (promedioAdelanteEnTierra === null || promedioAdelanteEnTierra === undefined) {
      return null;
    }
    if (promedioAdelanteEnTierra <= 0) {
      return {
        nivel: "Muy Alto",
        descripcion: "Inestabilidad severa. 8 veces más probabilidad de caída (0 cm o incapacidad de realizar la prueba)."
      };
    }
    if (promedioAdelanteEnTierra < 15.2) {
      return {
        nivel: "Alto",
        descripcion: "4 veces más probabilidad de sufrir una caída (< 15.2 cm)."
      };
    }
    if (promedioAdelanteEnTierra <= 25.4) {
      return {
        nivel: "Moderado",
        descripcion: "El doble de probabilidad de sufrir una caída (15.2 cm a 25.4 cm)."
      };
    }
    return {
      nivel: "Bajo",
      descripcion: "Control postural y límites de estabilidad dentro de la normalidad (> 25.4 cm)."
    };
  },

  // ---------- Comparación Tierra vs. Agua ----------
  compararTierraAgua: function (promedioAdelanteTierra, promedioAdelanteAgua) {
    if (typeof promedioAdelanteTierra !== "number" || typeof promedioAdelanteAgua !== "number") {
      return null;
    }
    if (promedioAdelanteAgua > promedioAdelanteTierra) {
      return {
        resultado: "Agua > Tierra",
        interpretacion: "El paciente presenta un componente de miedo o debilidad muscular que el agua compensa gracias a la presión hidrostática y la flotación. Buen candidato para entrenamiento intensivo de equilibrio en piscina."
      };
    }
    if (promedioAdelanteTierra > promedioAdelanteAgua) {
      return {
        resultado: "Tierra > Agua",
        interpretacion: "El agua genera inestabilidad por falta de control de las fuerzas fluidas (turbulencia). Se debe entrenar la estabilización del núcleo (core)."
      };
    }
    return {
      resultado: "Tierra = Agua",
      interpretacion: "Sin diferencia relevante entre ambos entornos."
    };
  },

  // ---------- Función consolidada de resultado ----------
  // mediciones: { tierra: { "tierra-adelante": {i1,i2,i3}, ... }, agua: {...} }
  calcularResultado: function (mediciones) {
    const promediosTierra = {};
    this.direccionesTierra.forEach((dir) => {
      const m = mediciones.tierra?.[dir.id];
      promediosTierra[dir.id] = m ? this.calcularPromedio(m.intento1, m.intento2, m.intento3) : null;
    });

    const promediosAgua = {};
    this.direccionesAgua.forEach((dir) => {
      const m = mediciones.agua?.[dir.id];
      promediosAgua[dir.id] = m ? this.calcularPromedio(m.intento1, m.intento2, m.intento3) : null;
    });

    const riesgoCaidas = this.clasificarRiesgoCaidas(promediosTierra["tierra-adelante"]);
    const comparacion = this.compararTierraAgua(
      promediosTierra["tierra-adelante"],
      promediosAgua["agua-adelante"]
    );

    return {
      promediosTierra,
      promediosAgua,
      riesgoCaidas,
      comparacionTierraAgua: comparacion
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(testFRT);
}
