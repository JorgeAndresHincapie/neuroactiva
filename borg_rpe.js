/* ============================================================
   ESCALA DE BORG RPE (6-20) — Rate of Perceived Exertion
   Especialidad: Hidroterapia (también aplicable a Fisioterapia)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   A diferencia de las escalas anteriores (FMA, Halliwick), esta NO
   es una suma de varios ítems — es UNA sola selección de percepción
   subjetiva de esfuerzo (6 a 20), diseñada para aproximarse a la
   frecuencia cardíaca multiplicada por 10 (6 ≈ 60 lpm en reposo,
   20 ≈ 200 lpm máximo).
   ============================================================ */

const escalaBorgRPE = {
  id: "borg-rpe-6-20",
  nombre: "Escala de Borg RPE (6-20)",
  especialidad: "hidroterapia",
  descripcion: "Herramienta clínica subjetiva que mide la percepción del esfuerzo físico y la disnea durante el ejercicio. Se usa para dosificar cargas de trabajo, prevenir sobreesfuerzos y guiar de forma segura la rehabilitación respiratoria o cardíaca.",
  tipo: "seleccion-unica",

  opciones: [
    { valor: 6, label: "6 - Sin esfuerzo", significado: "Reposo o movimiento extremadamente suave." },
    { valor: 7, label: "7 - Extremadamente ligero", significado: "Calentamiento suave, caminata muy tranquila o ejercicios de movilidad." },
    { valor: 8, label: "8 - Extremadamente ligero", significado: "Calentamiento suave, caminata muy tranquila o ejercicios de movilidad." },
    { valor: 9, label: "9 - Muy claro", significado: "Una actividad cómoda que podrías prolongar durante mucho tiempo." },
    { valor: 10, label: "10 - Muy claro", significado: "Una actividad cómoda que podrías prolongar durante mucho tiempo." },
    { valor: 11, label: "11 - Ligero", significado: "Ejercicio aeróbico suave; la respiración es elevada pero controlada." },
    { valor: 12, label: "12 - Ligero", significado: "Ejercicio aeróbico suave; la respiración es elevada pero controlada." },
    { valor: 13, label: "13 - Un poco difícil", significado: "Ejercicio cardiovascular moderado, ritmo constante o acondicionamiento físico sostenible." },
    { valor: 14, label: "14 - Un poco difícil", significado: "Ejercicio cardiovascular moderado, ritmo constante o acondicionamiento físico sostenible." },
    { valor: 15, label: "15 - Duro", significado: "Esfuerzo intenso; hablar es difícil y se requiere concentración." },
    { valor: 16, label: "16 - Duro", significado: "Esfuerzo intenso; hablar es difícil y se requiere concentración." },
    { valor: 17, label: "17 - Muy difícil", significado: "Intervalos de alta intensidad o esfuerzos finales intensos." },
    { valor: 18, label: "18 - Muy difícil", significado: "Intervalos de alta intensidad o esfuerzos finales intensos." },
    { valor: 19, label: "19 - Extremadamente difícil", significado: "Esfuerzo casi máximo que solo se puede mantener brevemente." },
    { valor: 20, label: "20 - Esfuerzo máximo", significado: "Máximo esfuerzo posible para la tarea." }
  ],

  // ---------- Función de interpretación ----------
  // No hay "cálculo" como tal (es un solo valor), pero se entrega la
  // interpretación práctica y una frecuencia cardíaca estimada de
  // referencia (valor × 10), útil para contexto clínico.
  interpretar: function (valorSeleccionado) {
    const opcion = this.opciones.find((o) => o.valor === valorSeleccionado);
    if (!opcion) {
      return null;
    }
    return {
      valor: valorSeleccionado,
      significado: opcion.significado,
      frecuenciaCardiacaEstimada: valorSeleccionado * 10,
      nota: "La frecuencia cardíaca estimada es aproximada (valor × 10) y varía según edad, condición física y medicación (ej. betabloqueadores)."
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaBorgRPE);
}
