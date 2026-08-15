/* ============================================================
   TIMED UP AND GO (TUG)
   Especialidad: Fisioterapia
   ============================================================
   Prueba cronometrada: levantarse de una silla, caminar 3 metros,
   girar, regresar y sentarse. Mide en segundos, no en puntos.
   ============================================================ */

const escalaTUG = {
  id: "timed-up-and-go",
  nombre: "Timed Up and Go (TUG)",
  especialidad: "fisioterapia",
  descripcion: "Prueba cronometrada de movilidad funcional básica: el paciente se levanta de una silla, camina 3 metros, gira, regresa y se sienta.",
  tipo: "medicion-tiempo",

  instrucciones: "El paciente inicia sentado con la espalda apoyada en el respaldo. A la señal, se levanta, camina 3 metros a paso normal y seguro, gira, regresa a la silla y se sienta. Se cronometra desde la señal de inicio hasta que vuelve a sentarse. Se recomienda 1 intento de práctica y luego el intento real cronometrado.",

  // ---------- Clasificación por tiempo en segundos ----------
  clasificar: function (segundos) {
    if (segundos < 10) return "Movilidad normal, sin riesgo aumentado de caídas";
    if (segundos <= 19) return "Buena movilidad funcional, riesgo bajo de caídas";
    if (segundos <= 29) return "Movilidad variable, riesgo de caídas aumentado — requiere valoración adicional";
    return "Movilidad deficiente, alto riesgo de caídas — requiere asistencia para movilidad segura"; // >=30
  },

  calcularResultado: function (tiempoSegundos) {
    if (typeof tiempoSegundos !== "number" || tiempoSegundos < 0) {
      throw new Error("El tiempo debe ser un número positivo en segundos.");
    }
    return {
      tiempoSegundos,
      clasificacion: this.clasificar(tiempoSegundos),
      puntoCorteRiesgoCaidas: 13.5 // umbral frecuentemente citado en la literatura para riesgo aumentado de caídas en adultos mayores
    };
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaTUG);
}
