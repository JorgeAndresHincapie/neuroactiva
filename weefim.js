/* ============================================================
   WeeFIM — Functional Independence Measure for Children
   (Funcional Pediátrico)
   Especialidad: Terapia Ocupacional (Neurorrehabilitación infantil)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   18 ítems en 3 dominios (Autocuidado 6, Movilidad/Esfínteres 7,
   Cognitivo 5), escala 1-7. Total: 18-126. Incluye cálculo del
   Cociente Funcional (CF) cruzando el puntaje con la edad.

   ⚠️ NOTA IMPORTANTE sobre la curva de referencia por edad: el
   documento fuente solo da 2 puntos de referencia concretos (3 años
   ≈ 70-80 pts, 5 años ≈ 100-110 pts) y el máximo teórico (7 años =
   126 pts), sin fórmula exacta para edades intermedias o fuera de
   ese rango. Se implementó interpolación lineal ÚNICAMENTE entre
   esos 3 puntos documentados (usando el punto medio de cada rango:
   3 años=75, 5 años=105, 7 años=126). Para edades fuera de 3-7 años,
   la función devuelve null en vez de inventar una extrapolación sin
   respaldo — ajustar si se cuenta con la curva de referencia oficial
   completa del WeeFIM.
   ============================================================ */

function opcionesWeeFIM() {
  return [
    { valor: 7, label: "7 - Independencia Completa: realiza la tarea de forma segura, sin modificaciones, en tiempo normal para su edad" },
    { valor: 6, label: "6 - Independencia Modificada: requiere dispositivo especial o más tiempo del habitual" },
    { valor: 5, label: "5 - Supervisión o Preparación: el adulto está cerca, da pistas verbales o prepara materiales, sin contacto físico" },
    { valor: 4, label: "4 - Asistencia de Contacto Mínimo: el niño realiza ≥75% del esfuerzo; el adulto solo da estabilidad táctil" },
    { valor: 3, label: "3 - Asistencia Moderada: el niño realiza entre 50% y 74% del esfuerzo físico" },
    { valor: 2, label: "2 - Asistencia Máxima: el niño realiza entre 25% y 49% del esfuerzo" },
    { valor: 1, label: "1 - Asistencia Total / Dependencia: el niño realiza menos del 25% del esfuerzo, o requiere dos adultos" }
  ];
}

const escalaWeeFIM = {
  id: "weefim",
  nombre: "WeeFIM (Funcional Pediátrico)",
  especialidad: "terapia-ocupacional",
  descripcion: "Mide la independencia funcional en niños, cruzando el puntaje obtenido con la edad cronológica para calcular un Cociente Funcional (CF).",

  itemsAutocuidado: [
    { id: "w1", texto: "Alimentación: llevar la comida a la boca, masticar y tragar", opciones: opcionesWeeFIM() },
    { id: "w2", texto: "Aseo Personal: lavarse las manos, la cara, peinarse y cepillarse los dientes de forma segura", opciones: opcionesWeeFIM() },
    { id: "w3", texto: "Baño: lavar y secar el cuerpo completo desde el cuello hacia abajo (excluye la espalda)", opciones: opcionesWeeFIM() },
    { id: "w4", texto: "Vestido Superior: colocarse y quitarse prendas de la cintura hacia arriba", opciones: opcionesWeeFIM() },
    { id: "w5", texto: "Vestido Inferior: colocarse y quitarse prendas de la cintura hacia abajo", opciones: opcionesWeeFIM() },
    { id: "w6", texto: "Higiene Perineal: limpieza personal y manejo de la ropa después de orinar o defecar", opciones: opcionesWeeFIM() }
  ],

  itemsMovilidad: [
    { id: "w7", texto: "Control de Vejiga: frecuencia de accidentes urinarios y necesidad de dispositivos", opciones: opcionesWeeFIM() },
    { id: "w8", texto: "Control de Intestino: frecuencia de accidentes intestinales o control de deposición", opciones: opcionesWeeFIM() },
    { id: "w9", texto: "Transferencia Cama/Silla/Silla de Ruedas: aproximarse, sentarse y levantarse", opciones: opcionesWeeFIM() },
    { id: "w10", texto: "Transferencia Inodoro: sentarse y levantarse del inodoro de forma segura", opciones: opcionesWeeFIM() },
    { id: "w11", texto: "Transferencia Ducha/Bañera: entrar y salir del espacio de baño de forma autónoma", opciones: opcionesWeeFIM() },
    { id: "w12", texto: "Locomoción (Marcha o Silla de Ruedas): distancia mínima según la edad", opciones: opcionesWeeFIM() },
    { id: "w13", texto: "Escaleras: subir y bajar un tramo (12-14 peldaños) de forma segura", opciones: opcionesWeeFIM() }
  ],

  itemsCognitivo: [
    { id: "w14", texto: "Comprensión: entendimiento de comunicación auditiva o visual acorde a su edad", opciones: opcionesWeeFIM() },
    { id: "w15", texto: "Expresión: capacidad para comunicar necesidades y deseos mediante habla o gestos claros", opciones: opcionesWeeFIM() },
    { id: "w16", texto: "Interacción Social: cómo se relaciona con otros niños, familiares y terapeutas", opciones: opcionesWeeFIM() },
    { id: "w17", texto: "Resolución de Problemas: capacidad para resolver inconvenientes cotidianos", opciones: opcionesWeeFIM() },
    { id: "w18", texto: "Memoria: reconocimiento de personas familiares, rutinas diarias, retención de instrucciones simples", opciones: opcionesWeeFIM() }
  ],

  rangos: {
    autocuidado: { minimo: 6, maximo: 42 },
    movilidad: { minimo: 7, maximo: 49 },
    motor: { minimo: 13, maximo: 91 },
    cognitivo: { minimo: 5, maximo: 35 },
    total: { minimo: 18, maximo: 126 }
  },

  // Puntos de referencia documentados para la curva de desarrollo (ver nota arriba)
  _curvaReferenciaEdad: [
    { edad: 3, puntajeEsperado: 75 },   // punto medio de 70-80
    { edad: 5, puntajeEsperado: 105 },  // punto medio de 100-110
    { edad: 7, puntajeEsperado: 126 }   // máximo teórico documentado
  ],

  // ---------- Interpolación lineal SOLO entre los puntos documentados ----------
  obtenerPuntajeEsperadoPorEdad: function (edadAnios) {
    const curva = this._curvaReferenciaEdad;
    if (edadAnios < curva[0].edad || edadAnios > curva[curva.length - 1].edad) {
      return null; // fuera del rango documentado — no se extrapola sin respaldo
    }
    for (let i = 0; i < curva.length - 1; i++) {
      const p1 = curva[i];
      const p2 = curva[i + 1];
      if (edadAnios >= p1.edad && edadAnios <= p2.edad) {
        const proporcion = (edadAnios - p1.edad) / (p2.edad - p1.edad);
        return Math.round(p1.puntajeEsperado + proporcion * (p2.puntajeEsperado - p1.puntajeEsperado));
      }
    }
    return null;
  },

  // ---------- Alertas según Cociente Funcional ----------
  clasificarCF: function (cf) {
    if (cf === null) return null;
    if (cf >= 90) return "Desempeño Funcional Normal para su grupo de edad";
    if (cf >= 70) return "Retraso Funcional Leve/Moderado: sugerir metas de Independencia Modificada (Nivel 6) con adaptaciones en el hogar";
    return "Retraso Funcional Severo / Alta Carga de Cuidados: requiere asistencia física continua (Niveles 1-3); priorizar capacitación ergonómica de cuidadores"; // <70%
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas, edadAnios) {
    const sumar = (items) => items.reduce((acc, item) => {
      const v = respuestas[item.id];
      return acc + (typeof v === "number" ? v : 0);
    }, 0);

    const subtotalAutocuidado = sumar(this.itemsAutocuidado);
    const subtotalMovilidad = sumar(this.itemsMovilidad);
    const subtotalMotor = subtotalAutocuidado + subtotalMovilidad;
    const subtotalCognitivo = sumar(this.itemsCognitivo);
    const total = subtotalMotor + subtotalCognitivo;

    const puntajeEsperado = typeof edadAnios === "number" ? this.obtenerPuntajeEsperadoPorEdad(edadAnios) : null;
    const cf = puntajeEsperado ? Math.round((total / puntajeEsperado) * 100) : null;

    return {
      subtotalAutocuidado,
      subtotalMovilidad,
      subtotalMotor,
      subtotalCognitivo,
      total,
      rangos: this.rangos,
      puntajeEsperadoPorEdad: puntajeEsperado,
      cocienteFuncional: cf,
      interpretacionCF: this.clasificarCF(cf)
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaWeeFIM);
}
