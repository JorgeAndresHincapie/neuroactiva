/* ============================================================
   FIM-FAM (Functional Independence Measure + Functional Assessment
   Measure) — Independencia Funcional Avanzada
   Especialidad: Terapia Ocupacional (también usado en Neuropsicología)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   30 ítems (16 motores + 14 cognitivos/comunicación), escala 1-7
   por ítem. Motor: rango 16-112. Cognitivo: rango 14-98.
   Total: rango 30-210.
   ============================================================ */

function opcionesFIMFAM() {
  return [
    { valor: 7, label: "7 - Independencia completa" },
    { valor: 6, label: "6 - Independencia modificada (usa prótesis, medicación o requiere más tiempo)" },
    { valor: 5, label: "5 - Supervisión o preparación (pistas verbales, no hay contacto)" },
    { valor: 4, label: "4 - Asistencia mínima (realiza el 75% o más del esfuerzo físico)" },
    { valor: 3, label: "3 - Asistencia moderada (realiza entre 50% y 74% del esfuerzo)" },
    { valor: 2, label: "2 - Asistencia máxima (realiza entre 25% y 49% del esfuerzo)" },
    { valor: 1, label: "1 - Asistencia total / Dependencia (realiza menos del 25% del esfuerzo)" }
  ];
}

const escalaFIMFAM = {
  id: "fim-fam",
  nombre: "FIM-FAM (Independencia Funcional Avanzada)",
  especialidad: "terapia-ocupacional",
  descripcion: "Gold standard en neurorrehabilitación para medir la carga de cuidados, combinando el FIM clásico con los ítems ampliados del FAM (cognición, comunicación y reinserción comunitaria).",

  itemsMotor: [
    { id: "m1", numero: 1, texto: "Alimentación", opciones: opcionesFIMFAM() },
    { id: "m2", numero: 2, texto: "Aseo personal", opciones: opcionesFIMFAM() },
    { id: "m3", numero: 3, texto: "Baño", opciones: opcionesFIMFAM() },
    { id: "m4", numero: 4, texto: "Vestido superior", opciones: opcionesFIMFAM() },
    { id: "m5", numero: 5, texto: "Vestido inferior", opciones: opcionesFIMFAM() },
    { id: "m6", numero: 6, texto: "Aseo íntimo", opciones: opcionesFIMFAM() },
    { id: "m7", numero: 7, texto: "Control de vejiga", opciones: opcionesFIMFAM() },
    { id: "m8", numero: 8, texto: "Control de intestino", opciones: opcionesFIMFAM() },
    { id: "m9", numero: 9, texto: "Transferencia cama/silla", opciones: opcionesFIMFAM() },
    { id: "m10", numero: 10, texto: "Transferencia inodoro", opciones: opcionesFIMFAM() },
    { id: "m11", numero: 11, texto: "Transferencia ducha", opciones: opcionesFIMFAM() },
    { id: "m12", numero: 12, texto: "Marcha o Silla de ruedas", opciones: opcionesFIMFAM() },
    { id: "m13", numero: 13, texto: "Escaleras", opciones: opcionesFIMFAM() },
    { id: "m14", numero: 14, texto: "Deglución (Tragar) [FAM]", opciones: opcionesFIMFAM() },
    { id: "m15", numero: 15, texto: "Transferencia carro [FAM]", opciones: opcionesFIMFAM() },
    { id: "m16", numero: 16, texto: "Seguridad en la comunidad [FAM]", opciones: opcionesFIMFAM() }
  ],

  itemsCognitivo: [
    { id: "c1", numero: 1, texto: "Comprensión", opciones: opcionesFIMFAM() },
    { id: "c2", numero: 2, texto: "Expresión", opciones: opcionesFIMFAM() },
    { id: "c3", numero: 3, texto: "Interacción social", opciones: opcionesFIMFAM() },
    { id: "c4", numero: 4, texto: "Resolución de problemas", opciones: opcionesFIMFAM() },
    { id: "c5", numero: 5, texto: "Memoria", opciones: opcionesFIMFAM() },
    { id: "c6", numero: 6, texto: "Lectura [FAM]", opciones: opcionesFIMFAM() },
    { id: "c7", numero: 7, texto: "Escritura [FAM]", opciones: opcionesFIMFAM() },
    { id: "c8", numero: 8, texto: "Habla [FAM]", opciones: opcionesFIMFAM() },
    { id: "c9", numero: 9, texto: "Orientación [FAM]", opciones: opcionesFIMFAM() },
    { id: "c10", numero: 10, texto: "Atención [FAM]", opciones: opcionesFIMFAM() },
    { id: "c11", numero: 11, texto: "Estabilidad emocional [FAM]", opciones: opcionesFIMFAM() },
    { id: "c12", numero: 12, texto: "Adaptabilidad al cambio [FAM]", opciones: opcionesFIMFAM() },
    { id: "c13", numero: 13, texto: "Habilidades laborales / Uso del tiempo [FAM]", opciones: opcionesFIMFAM() },
    { id: "c14", numero: 14, texto: "Integración comunitaria [FAM]", opciones: opcionesFIMFAM() }
  ],

  rangos: {
    motor: { minimo: 16, maximo: 112 },
    cognitivo: { minimo: 14, maximo: 98 },
    total: { minimo: 30, maximo: 210 }
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let subtotalMotor = 0;
    let motorRespondidos = 0;
    this.itemsMotor.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        subtotalMotor += valor;
        motorRespondidos++;
      }
    });

    let subtotalCognitivo = 0;
    let cognitivoRespondidos = 0;
    this.itemsCognitivo.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        subtotalCognitivo += valor;
        cognitivoRespondidos++;
      }
    });

    return {
      subtotalMotor,
      motorRespondidos,
      motorCompleto: motorRespondidos === this.itemsMotor.length,
      subtotalCognitivo,
      cognitivoRespondidos,
      cognitivoCompleto: cognitivoRespondidos === this.itemsCognitivo.length,
      total: subtotalMotor + subtotalCognitivo,
      rangos: this.rangos
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaFIMFAM);
}
