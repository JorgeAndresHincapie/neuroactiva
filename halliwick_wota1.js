/* ============================================================
   HALLIWICK WOTA1 — Water Orientation Test Alyn 1
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   26 ítems de la sección A-C, más 4 estilos de natación en la sección D
   (27 ítems totales).
   PARTICULARIDAD: muchos ítems tienen una opción "X - No puede ser
   evaluado" que EXCLUYE ese ítem del cálculo (no suma como 0, se
   descuenta también del puntaje máximo posible). El valor de esa
   opción se representa como null en vez de un número.
   ============================================================ */

// Opciones estándar 0-3 (Ítem 1, sin opción X)
function opcionesAdaptacionMental() {
  return [
    { valor: 0, label: "0 - Asustado / Llora / Protesta" },
    { valor: 1, label: "1 - Indiferente" },
    { valor: 2, label: "2 - Ligeramente dubitativo, disfruta de algunas actividades" },
    { valor: 3, label: "3 - Feliz, relajado, chapotea" }
  ];
}

// Opciones X,0,1,2,3 para control de respiración (ítems 2-6)
function opcionesRespiracion(textoX) {
  return [
    { valor: null, label: `X - No puede ser evaluado (${textoX})` },
    { valor: 0, label: "0 - No lo ejecuta / parece capaz pero no coopera" },
    { valor: 1, label: "1 - Baja calidad" },
    { valor: 2, label: "2 - Calidad media" },
    { valor: 3, label: "3 - Alta calidad" }
  ];
}

// Opciones X,0,1,2,3 para apoyo/independencia (ítems 7-23)
function opcionesApoyo(textoX) {
  return [
    { valor: null, label: `X - No puede ser evaluado (${textoX})` },
    { valor: 0, label: "0 - No lo ejecuta / parece capaz pero no coopera" },
    { valor: 1, label: "1 - Apoyo total del instructor" },
    { valor: 2, label: "2 - Apoyo parcial del instructor" },
    { valor: 3, label: "3 - Independiente" }
  ];
}

// Opciones X,0,1,2,3 para natación por distancia (ítems 24-27)
function opcionesNatacion(textoX) {
  return [
    { valor: null, label: `X - No puede ser evaluado (${textoX})` },
    { valor: 0, label: "0 - No lo ejecuta" },
    { valor: 1, label: "1 - Nada 20m, 3-7 paradas para descansar" },
    { valor: 2, label: "2 - Nada 20m, 1-2 paradas para descansar" },
    { valor: 3, label: "3 - Nada 20m de forma continua, sin paradas" }
  ];
}

const CONTRAINDICACION_ORAL = "traqueostomía / infección de oídos / contraindicación a meter la boca en el agua";
const CONTRAINDICACION_NASAL = "traqueostomía / infección de oídos / contraindicación a meter la nariz en el agua";
const CONTRAINDICACION_FACIAL = "traqueostomía / infección de oídos / contraindicación a meter la cara en el agua";
const CONTRAINDICACION_TRANSFERENCIA = "transferencia contraindicada";
const CONTRAINDICACION_CARGA = "paraplejia o contraindicación con la puesta en carga o dar pasos";
const CONTRAINDICACION_GENERAL = "contraindicación, ej. traqueostomía o infección de oídos";
const CONTRAINDICACION_MIEMBROS = "paraplejia, amputación de miembros inferiores o contraindicación al movimiento";
const CONTRAINDICACION_NATACION = "contraindicación, ej. traqueostomía, riesgo de aspiración";

const escalaHalliwickWOTA1 = {
  id: "halliwick-wota1",
  nombre: "Halliwick WOTA1 (Water Orientation Test Alyn 1)",
  especialidad: "hidroterapia",
  descripcion: "Evalúa la adaptación mental al agua, control de la respiración, control del equilibrio y progresión/independencia en el agua.",
  notaPuntaje: "El puntaje máximo varía según cuántos ítems se marquen como 'X - No evaluable', ya que esos ítems se excluyen del total (no se cuentan ni como 0).",

  secciones: [
    {
      id: "a-adaptacion-mental",
      nombre: "Sección A: Adaptación Mental General al Agua",
      items: [
        {
          id: "wota1-01",
          numero: 1,
          texto: "Adaptación Mental General al Agua (AM)",
          instruccion: "Mete tus ojos en el agua y ábrelos sin las gafas",
          opciones: opcionesAdaptacionMental()
        }
      ]
    },
    {
      id: "b-control-respiracion",
      nombre: "Sección B: Control de la Respiración",
      items: [
        {
          id: "wota1-02",
          numero: 2,
          texto: "Soplar burbujas por la boca (5 segundos)",
          instruccion: "Mete la boca en el agua. Sopla burbujas por la boca, cuenta hasta 5",
          opciones: opcionesRespiracion(CONTRAINDICACION_ORAL)
        },
        {
          id: "wota1-03",
          numero: 3,
          texto: "Soplar burbujas por la nariz (5 segundos)",
          instruccion: "Mete la nariz en el agua. Sopla burbujas por la nariz, cuenta hasta 5",
          opciones: opcionesRespiracion(CONTRAINDICACION_NASAL)
        },
        {
          id: "wota1-04",
          numero: 4,
          texto: "Soplar burbujas con la cara/cabeza dentro del agua (5 segundos)",
          instruccion: "Mete la cabeza/cara en el agua. Haz burbujas y cuenta hasta 5",
          opciones: opcionesRespiracion(CONTRAINDICACION_FACIAL)
        },
        {
          id: "wota1-05",
          numero: 5,
          texto: "Exhalación en el agua acompasada con movimiento",
          instruccion: "Mete la cabeza/cara en el agua y sácala 10 veces, suelta el aire brevemente en el agua y toma aire una vez fuera del agua",
          opciones: opcionesRespiracion(CONTRAINDICACION_FACIAL)
        },
        {
          id: "wota1-06",
          numero: 6,
          texto: "Exhalación alternando nariz y boca",
          instruccion: "Mete la nariz y la boca en el agua realizando 3 veces este ciclo: soltar el aire por la nariz, soltar el aire por la boca — sin sacar la nariz del agua",
          opciones: opcionesRespiracion(CONTRAINDICACION_ORAL)
        }
      ]
    },
    {
      id: "c-equilibrio-progresion",
      nombre: "Sección C: Control del Equilibrio y Progresión",
      items: [
        {
          id: "wota1-07",
          numero: 7,
          texto: "Entrada en el agua",
          instruccion: "Siéntate en el borde de la piscina, estira las manos hacia delante hacia el agua y ven hacia mí con la cabeza hasta que estés totalmente en el agua",
          opciones: opcionesApoyo(CONTRAINDICACION_TRANSFERENCIA)
        },
        {
          id: "wota1-08",
          numero: 8,
          texto: "Salida del agua",
          instruccion: "Ponte de pie con el agua al nivel del pecho. Empújate hacia arriba sobre el borde de la piscina usando las manos, gírate y siéntate con los pies en el agua",
          opciones: opcionesApoyo(CONTRAINDICACION_TRANSFERENCIA)
        },
        {
          id: "wota1-09",
          numero: 9,
          texto: "Posición de silla (caja) — Sentado en el agua",
          instruccion: "Siéntate derecho sin apoyo como si hubiera una silla debajo durante 20 segundos, estira los brazos hacia delante",
          opciones: opcionesApoyo(CONTRAINDICACION_CARGA)
        },
        {
          id: "wota1-10",
          numero: 10,
          texto: "Progresión por el borde de la piscina, usando las manos",
          instruccion: "Sujétate al borde de la piscina, los pies no deben tocar el suelo. Avanza 3 metros por lo menos a lo largo del borde",
          opciones: opcionesApoyo("hay una contraindicación a este movimiento")
        },
        {
          id: "wota1-11",
          numero: 11,
          texto: "Andar a través de la piscina",
          instruccion: "Anda 6 metros a través de la piscina (agua a la altura del pecho)",
          opciones: opcionesApoyo(CONTRAINDICACION_MIEMBROS)
        },
        {
          id: "wota1-12",
          numero: 12,
          texto: "Saltar a través de la piscina",
          instruccion: "Salta 6 metros a través de la piscina (agua a la altura del pecho)",
          opciones: opcionesApoyo(CONTRAINDICACION_MIEMBROS)
        },
        {
          id: "wota1-13",
          numero: 13,
          texto: "Saltar y zambullirse dentro y fuera del agua",
          instruccion: "Salta y zambúllete en el agua 5 veces metiendo la cabeza/cara en el agua cada vez",
          opciones: opcionesApoyo(CONTRAINDICACION_MIEMBROS)
        },
        {
          id: "wota1-14",
          numero: 14,
          texto: "Cambio de posición: bipedestación → silla (sentado) → flotación bocarriba (RT)",
          instruccion: "Siéntate en el agua y despacio muévete para flotar bocarriba, sin saltar, mientras levantas la pelvis y miras diagonalmente arriba al techo",
          opciones: opcionesApoyo(CONTRAINDICACION_GENERAL)
        },
        {
          id: "wota1-15",
          numero: 15,
          texto: "Flotación bocarriba estática durante 5 segundos",
          instruccion: "Cuenta hasta 5 mientras flotas bocarriba",
          opciones: opcionesApoyo(CONTRAINDICACION_GENERAL)
        },
        {
          id: "wota1-16",
          numero: 16,
          texto: "Cambio de posición de flotación bocarriba a bipedestación",
          instruccion: "Ponte de pie llevando la cabeza hacia delante mientras soplas burbujas, extendiendo los brazos hacia delante y flexionando las rodillas hacia el pecho",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-17",
          numero: 17,
          texto: "Deslizarse en prono desde la pared o bipedestación (5 segundos)",
          instruccion: "Mete la cabeza/cara en el agua y cambia a una posición recta bocabajo, brazos rectos hacia delante, mirando hacia abajo, 5 segundos",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-18",
          numero: 18,
          texto: "Cambio de posición de flotación prono a bipedestación",
          instruccion: "Flexiona las rodillas hacia el pecho, lleva los brazos estirados hacia las rodillas, endereza las piernas hacia el suelo y saca la cabeza del agua",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-19",
          numero: 19,
          texto: "Rotación Longitudinal — bocarriba a prono a bocarriba (lado 1)",
          instruccion: "Mueve la mano alejada y la cabeza en dirección del giro, date la vuelta sobre la tripa y sigue rodando hasta flotar bocarriba",
          notaEspecial: "Si el ítem 15 obtuvo puntuación de 1, este ítem no puede puntuar más de 1",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-20",
          numero: 20,
          texto: "Rotación Longitudinal — repetición hacia el otro lado (lado 2)",
          instruccion: "Repite el movimiento del ítem anterior girando hacia el otro lado",
          notaEspecial: "Si el ítem 15 obtuvo puntuación de 1, este ítem no puede puntuar más de 1",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-21",
          numero: 21,
          texto: "Rotación Combinada — bocabajo a bocarriba (cabeza puede permanecer fuera)",
          instruccion: "Cambia la posición a flotación bocabajo y entonces todo seguido a flotación bocarriba. Puedes tener la cabeza fuera del agua durante toda la tarea",
          opciones: opcionesApoyo(CONTRAINDICACION_GENERAL)
        },
        {
          id: "wota1-22",
          numero: 22,
          texto: "Rotación Combinada — bocarriba a bocabajo con cabeza sumergida, luego de pie",
          instruccion: "Cambia de posición de flotación bocarriba a bocabajo con la cabeza metida en el agua y luego ponte de pie",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-23",
          numero: 23,
          texto: "Inmersión, tocando el fondo de la piscina con ambas manos",
          instruccion: "Tírate con la cabeza hacia abajo, toca el fondo de la piscina con ambas manos y vuelve arriba (pies no tocan el fondo)",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o riesgo de aspiraciones")
        }
      ]
    },
    {
      id: "d-progresion-natacion",
      nombre: "Sección D: Progresión / Estilos de Natación",
      notaSeccion: "Evaluar solo los estilos que el nadador ya haya aprendido.",
      items: [
        {
          id: "wota1-24",
          numero: 24,
          texto: "Progresión sencilla bocarriba (PS)",
          instruccion: "El nadador progresa sobre su espalda utilizando sencillos movimientos de propulsión, distancia de 20 metros",
          opciones: opcionesNatacion(CONTRAINDICACION_GENERAL)
        },
        {
          id: "wota1-25",
          numero: 25,
          texto: "Estilo libre (Crol)",
          instruccion: "Nada 20 metros a crol. Si nada con la cabeza por encima del agua, la calificación debe ser 0",
          opciones: opcionesNatacion(CONTRAINDICACION_NATACION)
        },
        {
          id: "wota1-26",
          numero: 26,
          texto: "Estilo Espalda",
          instruccion: "Nadar 20 metros sobre la espalda con movimientos recíprocos de los brazos",
          opciones: opcionesNatacion(CONTRAINDICACION_NATACION)
        },
        {
          id: "wota1-27",
          numero: 27,
          texto: "Estilo Braza",
          instruccion: "Nada 20 metros a braza. Si el nadador nada con la cabeza por encima del agua, la calificación debe ser 0",
          opciones: opcionesNatacion(CONTRAINDICACION_NATACION)
        }
      ]
    }
  ],

  // ---------- Función de cálculo ----------
  // Los ítems marcados como "X" (valor null) se EXCLUYEN del total y
  // del máximo posible, no cuentan como 0.
  calcularPuntaje: function (respuestas) {
    let total = 0;
    let itemsEvaluados = 0;
    let itemsExcluidos = 0;
    const subtotalesPorSeccion = {};

    this.secciones.forEach((seccion) => {
      let subtotalSeccion = 0;
      let evaluadosSeccion = 0;

      seccion.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (valor === null) {
          itemsExcluidos++;
          return; // excluido, no cuenta en total ni en máximo posible
        }
        if (typeof valor === "number") {
          subtotalSeccion += valor;
          evaluadosSeccion++;
          itemsEvaluados++;
        }
      });

      subtotalesPorSeccion[seccion.id] = {
        subtotal: subtotalSeccion,
        maximoPosible: evaluadosSeccion * 3
      };
      total += subtotalSeccion;
    });

    const maximoPosible = itemsEvaluados * 3;

    return {
      total,
      maximoPosible,
      porcentaje: maximoPosible > 0 ? Math.round((total / maximoPosible) * 100) : null,
      itemsEvaluados,
      itemsExcluidos,
      subtotalesPorSeccion
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaHalliwickWOTA1);
}
