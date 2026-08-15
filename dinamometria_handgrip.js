/* ============================================================
   DINAMOMETRÍA DE AGARRE MANUAL (Handgrip Dynamometry)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   A diferencia de las demás escalas del banco, esta NO es un
   cuestionario de opciones — es un motor de cálculo biomecánico
   sobre mediciones numéricas (3 intentos por mano con dinamómetro
   Jamar), que calcula: promedio, fuerza pico, Coeficiente de
   Variación (detección de inconsistencia/simulación), diferencia
   porcentual entre manos, y verificación de la Regla del 10% de
   dominancia.

   ⚠️ La clasificación final por Z-score poblacional (Superior /
   Normal / Debilidad Leve / Debilidad Severa) requiere las tablas
   normativas oficiales de Mathiowetz, indexadas por edad, género y
   lado evaluado — no incluidas en el documento fuente. La función
   de clasificación aquí SÍ está completa (los cortes de DE vienen
   dados), pero opera sobre un Z-score que debe calcularse externamente
   con esas tablas oficiales; no se fabrican los baremos.
   ============================================================ */

const dinamometriaAgarreManual = {
  id: "dinamometria-handgrip",
  nombre: "Dinamometría de Agarre Manual (Handgrip Dynamometry)",
  especialidad: "terapia-ocupacional",
  descripcion: "Prueba objetiva (dinamómetro Jamar) para cuantificar la fuerza máxima de prensión palmar. Predictor de sarcopenia, fragilidad, riesgo cardiovascular y funcionalidad global.",

  metadata: {
    posicionesDinamometro: [1, 2, 3, 4, 5],
    posicionEstandarClinica: 2,
    unidadesMedida: ["Kg", "Lb"],
    ladoDominante: ["Derecho", "Izquierdo", "Ambidextro"],
    descansoMinimoSegundos: 60
  },

  // ---------- Cálculo de estadísticas por mano ----------
  // intentos: [n, n, n] — los 3 intentos de una mano
  calcularEstadisticasMano: function (intentos) {
    const suma = intentos[0] + intentos[1] + intentos[2];
    const promedio = Math.round((suma / 3) * 100) / 100;
    const maximo = Math.max(...intentos);

    // Desviación estándar MUESTRAL (divide entre n-1 = 2, como en el código fuente)
    const varianza = intentos.reduce((acc, val) => acc + Math.pow(val - promedio, 2), 0) / 2;
    const desviacionEstandar = Math.sqrt(varianza);

    const coeficienteVariacion = promedio > 0
      ? Math.round((desviacionEstandar / promedio) * 100 * 100) / 100
      : 0;
    const esConsistente = coeficienteVariacion <= 10;

    return { promedio, maximo, desviacionEstandar, coeficienteVariacion, esConsistente };
  },

  // ---------- Función consolidada de procesamiento ----------
  // input: { intentosDerecha: [n,n,n], intentosIzquierda: [n,n,n], manoDominante: 'D'|'I'|'A', unidad: 'Kg'|'Lb' }
  procesarDinamometria: function (input) {
    const derecha = this.calcularEstadisticasMano(input.intentosDerecha);
    const izquierda = this.calcularEstadisticasMano(input.intentosIzquierda);

    let diferenciaPorcentual = 0;
    if (izquierda.promedio > 0) {
      diferenciaPorcentual = Math.round((((derecha.promedio - izquierda.promedio) / izquierda.promedio) * 100) * 100) / 100;
    }

    // Regla del 10%: en diestros sanos, la derecha es ~10% más fuerte (rango 5-15% aceptado)
    let cumpleReglaDiezPorciento = false;
    if (input.manoDominante === "D") {
      cumpleReglaDiezPorciento = diferenciaPorcentual >= 5 && diferenciaPorcentual <= 15;
    }

    // Motor de alertas clínicas combinadas
    let alertaClinica = "Consistencia y patrones mecánicos dentro de la normalidad.";
    if (!derecha.esConsistente || !izquierda.esConsistente) {
      alertaClinica = "⚠️ CRÍTICO: Alta variabilidad entre intentos detectada (CV > 10%). Esfuerzo inconsistente del paciente — posible fatiga prematura, dolor agudo subyacente o simulación de debilidad.";
    } else if (input.manoDominante === "D" && diferenciaPorcentual < 0) {
      alertaClinica = "⚠️ ALERTA: El paciente es diestro pero su mano izquierda es más fuerte. Evaluar posible patología o lesión en miembro superior derecho.";
    }

    return {
      derecha,
      izquierda,
      diferenciaPorcentual,
      cumpleReglaDiezPorciento,
      alertaClinica
    };
  },

  // ---------- Clasificación clínica final por Z-score poblacional ----------
  // z: Z-score ya calculado externamente contra las tablas normativas de
  // Mathiowetz (edad, género, lado) — esta función solo interpreta el
  // Z-score, no lo calcula desde el promedio bruto sin esas tablas.
  clasificarPorZScore: function (z) {
    if (z > 1) return "Fuerza Superior al promedio";
    if (z >= -1) return "Fuerza Normal / Promedio Poblacional";
    if (z >= -2) return "Debilidad Leve / Riesgo Funcional: pérdida de masa muscular incipiente. Recomendar ejercicios de prensión isométrica, pinza digital y terapia manual";
    return "Debilidad Severa / Criterio Clínico de Sarcopenia y Fragilidad: alerta prioritaria; alta comorbilidad física y riesgo de pérdida de autonomía en AVD complejas; derivar a fortalecimiento intensivo y evaluación nutricional"; // < -2
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(dinamometriaAgarreManual);
}
