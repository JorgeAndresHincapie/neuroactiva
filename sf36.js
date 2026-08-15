/* ============================================================
   SF-36 HEALTH SURVEY (Calidad de Vida) — Versión 1.0
   Especialidad: Psicología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Motor completo: 36 ítems, imputación de datos perdidos,
   recodificación por tipos, 8 dimensiones (0-100), y Componentes
   Sumatorios Físico (PCS) y Mental (MCS) estandarizados (media 50,
   DE 10) usando valores de normalización poblacional.
   ============================================================ */

const escalaSF36 = {
  id: "sf-36-health-survey",
  nombre: "SF-36 Health Survey (Calidad de Vida)",
  especialidad: "psicologia",
  descripcion: "Cuestionario genérico de calidad de vida relacionada con la salud. Calcula 8 dimensiones (0-100) y dos componentes sumatorios estandarizados: Físico (PCS) y Mental (MCS).",

  // ---------- Definición de ítems y bloques (para renderizar el formulario) ----------
  bloques: [
    {
      id: "salud-general-evolucion",
      nombre: "Bloque 1: Salud General y Evolución",
      items: [
        {
          id: "p1", numero: 1,
          texto: "En general, usted diría que su salud es:",
          opciones: [
            { valor: 1, label: "Excelente" }, { valor: 2, label: "Muy buena" },
            { valor: 3, label: "Buena" }, { valor: 4, label: "Regular" }, { valor: 5, label: "Mala" }
          ]
        },
        {
          id: "p2", numero: 2,
          texto: "¿Cómo es su salud actual comparada con la de hace un año?",
          opciones: [
            { valor: 1, label: "Mucho mejor" }, { valor: 2, label: "Algo mejor" }, { valor: 3, label: "Igual" },
            { valor: 4, label: "Algo peor" }, { valor: 5, label: "Mucho peor" }
          ]
        }
      ]
    },
    {
      id: "funcionamiento-fisico",
      nombre: "Bloque 2: Funcionamiento Físico (FF)",
      instruccion: "¿Su salud actual le limita para hacer estas actividades?",
      opcionesComunes: [
        { valor: 1, label: "Sí, me limita mucho" }, { valor: 2, label: "Sí, me limita un poco" }, { valor: 3, label: "No, no me limita nada" }
      ],
      items: [
        { id: "p3", numero: 3, texto: "Esfuerzos intensos (correr, levantar objetos pesados, deportes)." },
        { id: "p4", numero: 4, texto: "Esfuerzos moderados (mover una mesa, pasar la aspiradora, caminar > 1 hora)." },
        { id: "p5", numero: 5, texto: "Levantar o llevar la bolsa de la compra o el mandado." },
        { id: "p6", numero: 6, texto: "Subir varios pisos por la escalera." },
        { id: "p7", numero: 7, texto: "Subir un solo piso por la escalera." },
        { id: "p8", numero: 8, texto: "Agacharse, doblarse o arrodillarse." },
        { id: "p9", numero: 9, texto: "Caminar un kilómetro o más." },
        { id: "p10", numero: 10, texto: "Caminar varias manzanas o cuadras (unos 500 metros)." },
        { id: "p11", numero: 11, texto: "Caminar una manzana o cuadra (unos 100 metros)." },
        { id: "p12", numero: 12, texto: "Bañarse o vestirse por sí mismo." }
      ]
    },
    {
      id: "rol-fisico",
      nombre: "Bloque 3: Rol Físico (RF)",
      instruccion: "¿Ha tenido alguno de los siguientes problemas en su trabajo o actividades cotidianas a causa de su salud física?",
      opcionesComunes: [{ valor: 1, label: "SÍ" }, { valor: 2, label: "NO" }],
      items: [
        { id: "p13", numero: 13, texto: "¿Redujo el tiempo dedicado al trabajo o a sus actividades cotidianas?" },
        { id: "p14", numero: 14, texto: "¿Hizo menos de lo que hubiera querido hacer?" },
        { id: "p15", numero: 15, texto: "¿Tuvo que limitar el tipo de trabajo o de actividades?" },
        { id: "p16", numero: 16, texto: "¿Tuvo dificultad para realizar su trabajo o actividades (ej. le costó más esfuerzo)?" }
      ]
    },
    {
      id: "rol-emocional",
      nombre: "Bloque 4: Rol Emocional (RE)",
      instruccion: "¿Ha tenido alguno de los siguientes problemas a causa de algún problema emocional (como estar deprimido o ansioso)?",
      opcionesComunes: [{ valor: 1, label: "SÍ" }, { valor: 2, label: "NO" }],
      items: [
        { id: "p17", numero: 17, texto: "¿Redujo el tiempo dedicado al trabajo o a sus actividades cotidianas?" },
        { id: "p18", numero: 18, texto: "¿Hizo menos de lo que hubiera querido hacer?" },
        { id: "p19", numero: 19, texto: "¿No hizo su trabajo o actividades cotidianas con tanto cuidado como de costumbre?" }
      ]
    },
    {
      id: "social-dolor",
      nombre: "Bloque 5: Funcionamiento Social (FS) y Dolor Corporal (DC)",
      items: [
        {
          id: "p20", numero: 20,
          texto: "Durante las últimas 4 semanas, ¿hasta qué punto su salud física o emocional ha interferido en sus actividades sociales habituales con la familia, amigos o vecinos?",
          opciones: [
            { valor: 1, label: "Nada" }, { valor: 2, label: "Un poco" }, { valor: 3, label: "Moderadamente" },
            { valor: 4, label: "Bastante" }, { valor: 5, label: "Mucho" }
          ]
        },
        {
          id: "p21", numero: 21,
          texto: "¿Cuánto dolor corporal ha tenido durante las últimas 4 semanas?",
          opciones: [
            { valor: 1, label: "Ninguno" }, { valor: 2, label: "Muy poco" }, { valor: 3, label: "Poco" },
            { valor: 4, label: "Moderado" }, { valor: 5, label: "Mucho" }, { valor: 6, label: "Muy intenso" }
          ]
        },
        {
          id: "p22", numero: 22,
          texto: "Durante las últimas 4 semanas, ¿hasta qué punto el dolor ha interferido en su trabajo habitual (tanto fuera de casa como en el hogar)?",
          opciones: [
            { valor: 1, label: "Nada" }, { valor: 2, label: "Un poco" }, { valor: 3, label: "Moderadamente" },
            { valor: 4, label: "Bastante" }, { valor: 5, label: "Mucho" }
          ]
        }
      ]
    },
    {
      id: "vitalidad-salud-mental",
      nombre: "Bloque 6: Vitalidad (VT) y Salud Mental (SM)",
      instruccion: "¿Con qué frecuencia se sintió así durante las últimas 4 semanas?",
      opcionesComunes: [
        { valor: 1, label: "Siempre" }, { valor: 2, label: "Casi siempre" }, { valor: 3, label: "Muchas veces" },
        { valor: 4, label: "Algunas veces" }, { valor: 5, label: "Rara vez" }, { valor: 6, label: "Nunca" }
      ],
      items: [
        { id: "p23", numero: 23, texto: "¿Se ha sentido lleno de vitalidad y energía?" },
        { id: "p24", numero: 24, texto: "¿Ha estado muy nervioso?" },
        { id: "p25", numero: 25, texto: "¿Se ha sentido tan bajo de moral que nada podía animarle?" },
        { id: "p26", numero: 26, texto: "¿Se ha sentido calmado y tranquilo?" },
        { id: "p27", numero: 27, texto: "¿Ha tenido mucha energía?" },
        { id: "p28", numero: 28, texto: "¿Se ha sentido desanimado y triste?" },
        { id: "p29", numero: 29, texto: "¿Se ha sentido agotado?" },
        { id: "p30", numero: 30, texto: "¿Se ha sentido feliz?" },
        { id: "p31", numero: 31, texto: "¿Se ha sentido cansado?" },
        {
          id: "p32", numero: 32,
          texto: "Durante las últimas 4 semanas, ¿con qué frecuencia la salud física o los problemas emocionales han dificultado sus actividades sociales (como visitar a amigos o familiares)?",
          opciones: [
            { valor: 1, label: "Siempre" }, { valor: 2, label: "Casi siempre" }, { valor: 3, label: "Algunas veces" },
            { valor: 4, label: "Rara vez" }, { valor: 5, label: "Nunca" }
          ]
        }
      ]
    },
    {
      id: "perspectivas-salud",
      nombre: "Bloque 7: Perspectivas de Salud (SG)",
      instruccion: "¿Qué tan cierta o falsa le parece cada una de las siguientes afirmaciones?",
      opcionesComunes: [
        { valor: 1, label: "Totalmente cierta" }, { valor: 2, label: "Bastante cierta" }, { valor: 3, label: "No lo sé" },
        { valor: 4, label: "Bastante falsa" }, { valor: 5, label: "Totalmente falsa" }
      ],
      items: [
        { id: "p33", numero: 33, texto: "Creo que me enfermo más fácilmente que otras personas." },
        { id: "p34", numero: 34, texto: "Estoy tan sano como cualquiera de las personas que conozco." },
        { id: "p35", numero: 35, texto: "Creo que mi salud va a empeorar." },
        { id: "p36", numero: 36, texto: "Mi salud es excelente." }
      ]
    }
  ],

  // ---------- Definición de dimensiones (qué ítems componen cada una) ----------
  dimensionesDef: {
    FF: { items: ["p3","p4","p5","p6","p7","p8","p9","p10","p11","p12"], minimo: 10, rango: 20 },
    RF: { items: ["p13","p14","p15","p16"], minimo: 4, rango: 4 },
    RE: { items: ["p17","p18","p19"], minimo: 3, rango: 3 },
    VT: { items: ["p23","p24","p25","p27"], minimo: 4, rango: 20 },
    SM: { items: ["p24","p25","p26","p28","p30"], minimo: 5, rango: 25 },
    FS: { items: ["p20","p32"], minimo: 2, rango: 8 },
    DC: { items: ["p21","p22"], minimo: 2, rango: 9 },
    SG: { items: ["p1","p33","p34","p35","p36"], minimo: 5, rango: 20 }
  },

  // ---------- Tablas de recodificación ----------
  _tipoA: { 1: 5.0, 2: 4.4, 3: 3.4, 4: 2.0, 5: 1.0 },       // P1, P34, P36
  _tipoB: { 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 },            // P23, P26, P27, P30
  _tipoC: { 1: 5, 2: 4, 3: 3, 4: 2, 5: 1 },                  // P20
  _itemsTipoA: ["p1", "p34", "p36"],
  _itemsTipoB: ["p23", "p26", "p27", "p30"],
  _itemsTipoC: ["p20"], // NOTA: el documento fuente lista P20,P22,P32 en la tabla genérica del
                         // Paso 2, pero la fórmula de FS en el Paso 3 usa "P32" sin sufijo "_Recod"
                         // (a diferencia de "P20_Recod"), y P22 ya tiene su propia regla especial
                         // (Matriz de Dolor, ver abajo). Validado con pruebas de máximo/mínimo: si
                         // P32 se recodifica igual que P20, sus direcciones quedan opuestas y FS
                         // nunca alcanza 0 ni 100. Por eso P32 usa su valor crudo, según la
                         // notación literal del Paso 3.
  _p21recod: { 1: 6.0, 2: 5.4, 3: 4.2, 4: 3.1, 5: 2.2, 6: 1.0 },

  // Valores de normalización poblacional (Gold Standard) para Z-score
  _normas: {
    FF: { mu: 84.52404, sigma: 22.89090 },
    RF: { mu: 81.19907, sigma: 33.79729 },
    DC: { mu: 75.49196, sigma: 23.55844 },
    SG: { mu: 72.21316, sigma: 20.16964 },
    VT: { mu: 61.05454, sigma: 20.86942 },
    FS: { mu: 83.29973, sigma: 22.38236 },
    RE: { mu: 81.33828, sigma: 33.02717 },
    SM: { mu: 74.83958, sigma: 18.01469 }
  },

  // Coeficientes factoriales de ponderación
  _pesosPCS: { FF: 0.42402, RF: 0.35111, DC: 0.31754, SG: 0.24954, VT: 0.02877, FS: -0.00753, RE: -0.19206, SM: -0.22069 },
  _pesosMCS: { FF: -0.22999, RF: -0.12329, DC: -0.09731, SG: -0.01571, VT: 0.23534, FS: 0.26876, RE: 0.43407, SM: 0.48581 },

  // ============================================================
  // PASO 1: Imputación de datos perdidos (por dimensión, sobre valores crudos)
  // ============================================================
  imputarDatosFaltantes: function (respuestasCrudas) {
    const imputadas = { ...respuestasCrudas };
    const dimensionesNulas = [];

    Object.entries(this.dimensionesDef).forEach(([dim, def]) => {
      const valores = def.items.map((id) => respuestasCrudas[id]);
      const respondidos = valores.filter((v) => typeof v === "number");
      const porcentajeRespondido = respondidos.length / def.items.length;

      if (respondidos.length === def.items.length) {
        return; // completa, nada que imputar
      }

      if (porcentajeRespondido >= 0.5) {
        const promedio = respondidos.reduce((a, b) => a + b, 0) / respondidos.length;
        def.items.forEach((id) => {
          if (typeof imputadas[id] !== "number") {
            imputadas[id] = promedio;
          }
        });
      } else {
        dimensionesNulas.push(dim);
        // Se deja como null explícitamente; calcularDimensiones devolverá NaN para esta dimensión
        def.items.forEach((id) => {
          if (typeof imputadas[id] !== "number") {
            imputadas[id] = null;
          }
        });
      }
    });

    return { respuestas: imputadas, dimensionesNulas };
  },

  // ============================================================
  // PASO 2: Recodificación de ítems
  // ============================================================
  recodificarVector: function (respuestas) {
    const recod = { ...respuestas };

    this._itemsTipoA.forEach((id) => {
      if (typeof respuestas[id] === "number") {
        recod[id] = this._tipoA[respuestas[id]];
      }
    });
    this._itemsTipoB.forEach((id) => {
      if (typeof respuestas[id] === "number") {
        recod[id] = this._tipoB[respuestas[id]];
      }
    });
    this._itemsTipoC.forEach((id) => {
      if (typeof respuestas[id] === "number") {
        recod[id] = this._tipoC[respuestas[id]];
      }
    });

    // Recodificación especial Matriz de Dolor (P21, P22)
    if (typeof respuestas["p21"] === "number") {
      recod["p21"] = this._p21recod[respuestas["p21"]];
    }
    const p21raw = respuestas["p21"];
    const p22raw = respuestas["p22"];
    if (p21raw === 1 && (p22raw === null || p22raw === undefined || p22raw === 1)) {
      recod["p22"] = 5;
    } else if (typeof p22raw === "number") {
      recod["p22"] = this._tipoC[p22raw]; // misma tabla 1→5..5→1
    }
    // Ítems no mencionados (P2, P3-19, P24, P25, P28, P29, P31, P33, P35) conservan su valor original

    return recod;
  },

  // ============================================================
  // PASO 3: Cálculo de las 8 dimensiones (0-100)
  // ============================================================
  calcularDimensiones: function (respuestasCrudas) {
    const { respuestas: imputadas, dimensionesNulas } = this.imputarDatosFaltantes(respuestasCrudas);
    const recod = this.recodificarVector(imputadas);

    const dimensiones = {};
    Object.entries(this.dimensionesDef).forEach(([dim, def]) => {
      if (dimensionesNulas.includes(dim)) {
        dimensiones[dim] = null; // NaN declarado por regla de datos perdidos
        return;
      }
      const pb = def.items.reduce((suma, id) => suma + (recod[id] ?? 0), 0);
      const valor = ((pb - def.minimo) / def.rango) * 100;
      dimensiones[dim] = Math.round(valor * 100) / 100;
    });

    return dimensiones;
  },

  // ============================================================
  // PASO 4: Componentes Sumatorios PCS y MCS (T-score, media 50, DE 10)
  // ============================================================
  calcularComponentesSumarios: function (dimensiones) {
    const dims = ["FF", "RF", "DC", "SG", "VT", "FS", "RE", "SM"];

    // Si alguna dimensión es null, no se puede calcular PCS/MCS de forma confiable
    if (dims.some((d) => dimensiones[d] === null || dimensiones[d] === undefined)) {
      return { PCS: null, MCS: null, motivo: "Una o más dimensiones no se pudieron calcular (datos insuficientes)." };
    }

    const z = {};
    dims.forEach((d) => {
      const { mu, sigma } = this._normas[d];
      z[d] = (dimensiones[d] - mu) / sigma;
    });

    let aggPCS = 0;
    let aggMCS = 0;
    dims.forEach((d) => {
      aggPCS += z[d] * this._pesosPCS[d];
      aggMCS += z[d] * this._pesosMCS[d];
    });

    const PCS = Math.round((aggPCS * 10 + 50) * 100) / 100;
    const MCS = Math.round((aggMCS * 10 + 50) * 100) / 100;

    return {
      PCS,
      MCS,
      interpretacion: {
        PCS_bajoUmbral: PCS < 42,
        MCS_bajoUmbral: MCS < 42,
        nota: "Un valor de 50 es el promedio poblacional. Por debajo de 42 indica un déficit funcional o de salud mental clínicamente significativo."
      }
    };
  },

  // ---------- Función consolidada ----------
  calcularResultadoCompleto: function (respuestasCrudas) {
    const dimensiones = this.calcularDimensiones(respuestasCrudas);
    const componentesSumarios = this.calcularComponentesSumarios(dimensiones);
    return { dimensiones, componentesSumarios };
  }
};

if (typeof escalasPsicologia !== "undefined") {
  escalasPsicologia.push(escalaSF36);
}
