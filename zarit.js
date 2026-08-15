/* ============================================================
   ESCALA DE ZARIT — Carga del Cuidador (Zarit Burden Interview)
   Especialidad: Psicología
   ============================================================
   22 ítems, escala 0-4. Rango total: 0-88. Evalúa la sobrecarga
   percibida por el cuidador principal, no al paciente.
   ============================================================ */

function opcionesZarit() {
  return [
    { valor: 0, label: "0 - Nunca" },
    { valor: 1, label: "1 - Rara vez" },
    { valor: 2, label: "2 - Algunas veces" },
    { valor: 3, label: "3 - Bastantes veces" },
    { valor: 4, label: "4 - Casi siempre" }
  ];
}

const escalaZarit = {
  id: "zarit-burden-interview",
  nombre: "Escala de Zarit (Carga del Cuidador)",
  especialidad: "psicologia",
  descripcion: "Evalúa la sobrecarga física, emocional y económica percibida por el cuidador principal de un paciente dependiente. Complemento obligatorio en casos con puntajes altos de dependencia funcional (EFPT, WeeFIM, PEDI).",
  puntajeMaximo: 88,

  items: [
    { id: "z1", texto: "¿Siente que su familiar solicita más ayuda de la que realmente necesita?", opciones: opcionesZarit() },
    { id: "z2", texto: "¿Siente que a causa del tiempo que dedica a su familiar ya no tiene tiempo suficiente para usted?", opciones: opcionesZarit() },
    { id: "z3", texto: "¿Se siente estresado/a al tener que cuidar a su familiar y atender otras responsabilidades?", opciones: opcionesZarit() },
    { id: "z4", texto: "¿Se siente avergonzado/a por la conducta de su familiar?", opciones: opcionesZarit() },
    { id: "z5", texto: "¿Se siente enfadado/a cuando está cerca de su familiar?", opciones: opcionesZarit() },
    { id: "z6", texto: "¿Piensa que cuidar a su familiar afecta negativamente su relación con otros miembros de la familia?", opciones: opcionesZarit() },
    { id: "z7", texto: "¿Siente temor por el futuro de su familiar?", opciones: opcionesZarit() },
    { id: "z8", texto: "¿Piensa que su familiar depende de usted?", opciones: opcionesZarit() },
    { id: "z9", texto: "¿Se siente tenso/a cuando está cerca de su familiar?", opciones: opcionesZarit() },
    { id: "z10", texto: "¿Piensa que su salud ha empeorado debido a tener que cuidar a su familiar?", opciones: opcionesZarit() },
    { id: "z11", texto: "¿Siente que no tiene tanta intimidad como le gustaría debido a cuidar a su familiar?", opciones: opcionesZarit() },
    { id: "z12", texto: "¿Siente que su vida social se ha visto afectada negativamente por cuidar a su familiar?", opciones: opcionesZarit() },
    { id: "z13", texto: "¿Se siente incómodo/a por distanciarse de sus amistades debido a cuidar a su familiar?", opciones: opcionesZarit() },
    { id: "z14", texto: "¿Piensa que su familiar le considera a usted la única persona que le puede cuidar?", opciones: opcionesZarit() },
    { id: "z15", texto: "¿Piensa que no tiene suficientes ingresos para cuidar a su familiar, además de sus otros gastos?", opciones: opcionesZarit() },
    { id: "z16", texto: "¿Piensa que no será capaz de cuidar a su familiar por mucho más tiempo?", opciones: opcionesZarit() },
    { id: "z17", texto: "¿Siente que ha perdido el control de su vida desde que la enfermedad de su familiar se manifestó?", opciones: opcionesZarit() },
    { id: "z18", texto: "¿Desearía poder dejar el cuidado de su familiar a otra persona?", opciones: opcionesZarit() },
    { id: "z19", texto: "¿Se siente indeciso/a sobre qué hacer con su familiar?", opciones: opcionesZarit() },
    { id: "z20", texto: "¿Piensa que debería hacer más por su familiar?", opciones: opcionesZarit() },
    { id: "z21", texto: "¿Piensa que podría cuidar mejor a su familiar?", opciones: opcionesZarit() },
    { id: "z22", texto: "En general, ¿qué grado de sobrecarga experimenta por el hecho de cuidar a su familiar?", opciones: opcionesZarit() }
  ],

  clasificar: function (total) {
    if (total <= 46) return "Sin sobrecarga";
    if (total <= 55) return "Sobrecarga leve";
    return "Sobrecarga intensa"; // >=56
  },

  calcularPuntaje: function (respuestas) {
    const total = this.items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);
    return { total, puntajeMaximo: this.puntajeMaximo, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasPsicologia !== "undefined") {
  escalasPsicologia.push(escalaZarit);
}
