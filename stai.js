/* ============================================================
   STAI — State-Trait Anxiety Inventory
   Especialidad: Psicología
   ============================================================
   40 ítems (20 Estado + 20 Rasgo), escala 1-4, con recodificación
   de ítems positivos (inversión antes de sumar).
   ============================================================ */

const itemsInvertirEstado = ["a1", "a2", "a5", "a8", "a10", "a11", "a15", "a16", "a19", "a20"];
const itemsInvertirRasgo = ["a21", "a26", "a27", "a30", "a33", "a36", "a39"];

function opcionesSTAI() {
  return [
    { valor: 1, label: "1 - Nada/Casi nunca" },
    { valor: 2, label: "2 - Algo/A veces" },
    { valor: 3, label: "3 - Bastante/A menudo" },
    { valor: 4, label: "4 - Mucho/Casi siempre" }
  ];
}

const escalaSTAI = {
  id: "stai",
  nombre: "STAI (Cuestionario de Ansiedad Estado-Rasgo)",
  especialidad: "psicologia",
  descripcion: "Separa analíticamente la ansiedad transitoria (Estado) de la propensión estable del paciente (Rasgo).",

  itemsEstado: Array.from({ length: 20 }, (_, i) => ({ id: `a${i + 1}`, opciones: opcionesSTAI() })),
  itemsRasgo: Array.from({ length: 20 }, (_, i) => ({ id: `a${i + 21}`, opciones: opcionesSTAI() })),

  itemsInvertirEstado,
  itemsInvertirRasgo,

  // ---------- Recodificación: invertir 1=4,2=3,3=2,4=1 ----------
  invertir: function (valor) {
    return 5 - valor;
  },

  calcularPuntaje: function (respuestas) {
    let sumaEstado = 0;
    this.itemsEstado.forEach((item) => {
      const v = respuestas[item.id];
      if (typeof v === "number") {
        sumaEstado += this.itemsInvertirEstado.includes(item.id) ? this.invertir(v) : v;
      }
    });

    let sumaRasgo = 0;
    this.itemsRasgo.forEach((item) => {
      const v = respuestas[item.id];
      if (typeof v === "number") {
        sumaRasgo += this.itemsInvertirRasgo.includes(item.id) ? this.invertir(v) : v;
      }
    });

    return {
      ansiedadEstado: sumaEstado, // rango 20-80
      ansiedadRasgo: sumaRasgo    // rango 20-80
    };
  }
};

if (typeof escalasPsicologia !== "undefined") {
  escalasPsicologia.push(escalaSTAI);
}
