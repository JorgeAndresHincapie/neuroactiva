/* ============================================================
   MMSE — Mini-Mental State Examination (Folstein)
   Especialidad: Neuropsicología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   30 ítems binarios (1=Acierto, 0=Error) en 6 secciones. El bloque
   de Atención y Cálculo permite 2 métodos alternativos (restar de 7
   en 7, o deletrear MUNDO al revés) — ambos puntúan igual (máx 5),
   se registra cuál se usó de forma informativa.
   ============================================================ */

function opcionesMMSE() {
  return [
    { valor: 1, label: "1 - Acierto" },
    { valor: 0, label: "0 - Error" }
  ];
}

const escalaMMSE = {
  id: "mmse",
  nombre: "MMSE (Mini-Mental State Examination de Folstein)",
  especialidad: "neuropsicologia",
  descripcion: "El tamizaje cognitivo más utilizado del mundo. Evalúa orientación, fijación, atención/cálculo, evocación, y lenguaje/praxis.",
  puntajeMaximo: 30,

  secciones: [
    {
      id: "orientacion-temporal",
      nombre: "Orientación Temporal",
      puntajeMaximoSeccion: 5,
      items: [
        { id: "p1", numero: 1, texto: "Año", opciones: opcionesMMSE() },
        { id: "p2", numero: 2, texto: "Estación", opciones: opcionesMMSE() },
        { id: "p3", numero: 3, texto: "Mes", opciones: opcionesMMSE() },
        { id: "p4", numero: 4, texto: "Día del mes", opciones: opcionesMMSE() },
        { id: "p5", numero: 5, texto: "Día de la semana", opciones: opcionesMMSE() }
      ]
    },
    {
      id: "orientacion-espacial",
      nombre: "Orientación Espacial",
      puntajeMaximoSeccion: 5,
      items: [
        { id: "p6", numero: 6, texto: "Lugar exacto (hospital/casa)", opciones: opcionesMMSE() },
        { id: "p7", numero: 7, texto: "Piso/Planta", opciones: opcionesMMSE() },
        { id: "p8", numero: 8, texto: "Ciudad", opciones: opcionesMMSE() },
        { id: "p9", numero: 9, texto: "Provincia/Estado", opciones: opcionesMMSE() },
        { id: "p10", numero: 10, texto: "País", opciones: opcionesMMSE() }
      ]
    },
    {
      id: "fijacion-registro",
      nombre: "Fijación / Registro",
      puntajeMaximoSeccion: 3,
      instruccion: "Repetición inmediata de 3 palabras (ej: Peseta, Caballo, Manzana). 1 punto por cada palabra correcta al primer intento.",
      items: [
        { id: "p11", numero: 11, texto: "Palabra 1 repetida correctamente", opciones: opcionesMMSE() },
        { id: "p12", numero: 12, texto: "Palabra 2 repetida correctamente", opciones: opcionesMMSE() },
        { id: "p13", numero: 13, texto: "Palabra 3 repetida correctamente", opciones: opcionesMMSE() }
      ]
    },
    {
      id: "atencion-calculo",
      nombre: "Atención y Cálculo",
      puntajeMaximoSeccion: 5,
      instruccion: "Elegir UN método: (A) restar de 7 en 7 desde 100, o (B) deletrear MUNDO al revés. Ambos puntúan igual (máx. 5).",
      metodos: {
        A: { nombre: "Restar de 7 en 7 desde 100", valoresEsperados: [93, 86, 79, 72, 65] },
        B: { nombre: "Deletrear MUNDO al revés", valoresEsperados: ["O", "D", "N", "U", "M"] }
      },
      items: [
        { id: "p14_1", numero: "14.1", texto: "Paso 1 correcto", opciones: opcionesMMSE() },
        { id: "p14_2", numero: "14.2", texto: "Paso 2 correcto", opciones: opcionesMMSE() },
        { id: "p14_3", numero: "14.3", texto: "Paso 3 correcto", opciones: opcionesMMSE() },
        { id: "p14_4", numero: "14.4", texto: "Paso 4 correcto", opciones: opcionesMMSE() },
        { id: "p14_5", numero: "14.5", texto: "Paso 5 correcto", opciones: opcionesMMSE() }
      ]
    },
    {
      id: "evocacion",
      nombre: "Evocación / Memoria",
      puntajeMaximoSeccion: 3,
      instruccion: "Recordar las 3 palabras del ítem de fijación tras unos minutos.",
      items: [
        { id: "p16", numero: 16, texto: "Palabra 1 recordada", opciones: opcionesMMSE() },
        { id: "p17", numero: 17, texto: "Palabra 2 recordada", opciones: opcionesMMSE() },
        { id: "p18", numero: 18, texto: "Palabra 3 recordada", opciones: opcionesMMSE() }
      ]
    },
    {
      id: "lenguaje-praxis",
      nombre: "Lenguaje y Praxis",
      puntajeMaximoSeccion: 9,
      items: [
        { id: "p19", numero: 19, texto: "Nombrar un reloj", opciones: opcionesMMSE() },
        { id: "p20", numero: 20, texto: "Nombrar un bolígrafo", opciones: opcionesMMSE() },
        { id: "p21", numero: 21, texto: 'Repetir la frase: "Ni sí, ni no, ni pero"', opciones: opcionesMMSE() },
        { id: "p22", numero: 22, texto: 'Orden 3 tiempos - Paso 1: "Tome este papel con la mano derecha"', opciones: opcionesMMSE() },
        { id: "p23", numero: 23, texto: "Orden 3 tiempos - Paso 2: dóblelo por la mitad", opciones: opcionesMMSE() },
        { id: "p24", numero: 24, texto: "Orden 3 tiempos - Paso 3: póngalo en el suelo", opciones: opcionesMMSE() },
        { id: "p25", numero: 25, texto: 'Leer y ejecutar la orden escrita: "CIERRE LOS OJOS"', opciones: opcionesMMSE() },
        { id: "p26", numero: 26, texto: "Escribir una frase con sentido (sujeto y predicado)", opciones: opcionesMMSE() },
        { id: "p27", numero: 27, texto: "Copiar el dibujo de dos pentágonos cruzados (deben cruzarse en un cuadrilátero)", opciones: opcionesMMSE() }
      ]
    }
  ],

  // ---------- Clasificación clínica ----------
  clasificar: function (total) {
    if (total >= 27) return "Normal / Sin deterioro cognitivo";
    if (total >= 24) return "Sospecha / Deterioro cognitivo leve";
    if (total >= 12) return "Deterioro cognitivo moderado";
    return "Deterioro cognitivo severo"; // 0-11
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotalesPorSeccion = {};

    this.secciones.forEach((seccion) => {
      let subtotal = 0;
      seccion.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") {
          subtotal += valor;
        }
      });
      subtotalesPorSeccion[seccion.id] = subtotal;
      total += subtotal;
    });

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      clasificacion: this.clasificar(total),
      subtotalesPorSeccion
    };
  }
};

if (typeof escalasNeuropsicologia !== "undefined") {
  escalasNeuropsicologia.push(escalaMMSE);
}
