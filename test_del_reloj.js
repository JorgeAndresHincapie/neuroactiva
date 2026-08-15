/* ============================================================
   TEST DEL RELOJ (Clock Drawing Test)
   Especialidad: Neuropsicología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   10 ítems binarios (1/0), evalúa función ejecutiva, apraxia y
   constructo visoespacial. Máximo 10 puntos.
   ============================================================ */

function opcionesReloj() {
  return [
    { valor: 1, label: "1 - Sí cumple el criterio" },
    { valor: 0, label: "0 - No cumple el criterio" }
  ];
}

const escalaTestDelReloj = {
  id: "test-del-reloj",
  nombre: "Test del Reloj (Clock Drawing Test)",
  especialidad: "neuropsicologia",
  descripcion: "Prueba gold standard para evaluar funciones ejecutivas, apraxias y constructo visoespacial mediante el dibujo de un reloj.",
  puntajeMaximo: 10,

  items: [
    { id: "r1", numero: 1, texto: "Dibuja una circunferencia cerrada y con una forma aceptable", opciones: opcionesReloj() },
    { id: "r2", numero: 2, texto: "Incluye todos los números del 1 al 12 dentro del reloj", opciones: opcionesReloj() },
    { id: "r3", numero: 3, texto: "Los números están colocados en el orden correcto", opciones: opcionesReloj() },
    { id: "r4", numero: 4, texto: "Los números guardan una distancia y distribución espacial simétrica", opciones: opcionesReloj() },
    { id: "r5", numero: 5, texto: "Los números están en la posición horaria exacta (12 arriba, 6 abajo, etc.)", opciones: opcionesReloj() },
    { id: "r6", numero: 6, texto: "El reloj incluye las dos manecillas (horaria y minutera)", opciones: opcionesReloj() },
    { id: "r7", numero: 7, texto: "La manecilla de la hora apunta exactamente al número indicado", opciones: opcionesReloj() },
    { id: "r8", numero: 8, texto: 'La manecilla de los minutos apunta exactamente al número indicado (ej. "y diez")', opciones: opcionesReloj() },
    { id: "r9", numero: 9, texto: "Las dos manecillas se unen claramente en el centro del reloj", opciones: opcionesReloj() },
    { id: "r10", numero: 10, texto: "La proporción de tamaño entre las manecillas es correcta (la de la hora notablemente más corta)", opciones: opcionesReloj() }
  ],

  // ---------- Clasificación clínica ----------
  clasificar: function (total) {
    if (total >= 7) return "Normal. Función ejecutiva conservada";
    return "Positivo para deterioro cognitivo / Apraxia. Alto riesgo de demencia"; // 0-6
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        total += valor;
      }
    });

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      clasificacion: this.clasificar(total)
    };
  }
};

if (typeof escalasNeuropsicologia !== "undefined") {
  escalasNeuropsicologia.push(escalaTestDelReloj);
}
