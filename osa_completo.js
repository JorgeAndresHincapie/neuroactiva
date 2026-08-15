/* ============================================================
   OSA — Occupational Self-Assessment (Autoevaluación Ocupacional)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   VERSIÓN ENRIQUECIDA: mismos 21 ítems que la versión anterior
   (osa.js), pero esta fuente agrega la agrupación en 3 áreas
   (Autocuidado, Rol/Relaciones, Productividad/Placer), subtotales
   de Competencia e Importancia, y el cálculo de "% Eficacia
   Percibida" con su propia clasificación clínica — además del
   Índice de Brecha Ocupacional (IBO) ya construido. Reemplaza a
   osa.js si se desea la versión completa.
   ============================================================ */

function opcionesCapacidadOSA() {
  return [
    { valor: 1, label: "1 - Tengo mucha dificultad para hacer esto" },
    { valor: 2, label: "2 - Tengo alguna dificultad para hacer esto" },
    { valor: 3, label: "3 - Lo hago bien" },
    { valor: 4, label: "4 - Lo hago extremadamente bien" }
  ];
}

function opcionesImportanciaOSA() {
  return [
    { valor: 1, label: "1 - Esto no es importante para mí" },
    { valor: 2, label: "2 - Esto es importante para mí" },
    { valor: 3, label: "3 - Esto es muy importante para mí" },
    { valor: 4, label: "4 - Esto es fundamental / una prioridad absoluta para mí" }
  ];
}

const escalaOSA_Completa = {
  id: "osa-completo",
  nombre: "OSA (Autoevaluación Ocupacional) — Versión Completa",
  especialidad: "terapia-ocupacional",
  descripcion: "Instrumento de autoinforme (no de juicio del terapeuta) que captura la percepción del propio paciente sobre su competencia ocupacional y el valor que asigna a sus actividades diarias.",

  areas: [
    {
      id: "autocuidado",
      nombre: "Área A: Competencia en el Cuidado de Uno Mismo",
      items: [
        { id: "o1", texto: "Cuidar de mí mismo: manejar el aseo, la alimentación y la salud personal" },
        { id: "o2", texto: "Cuidar el lugar donde vivo: mantener la limpieza y el orden del hogar" },
        { id: "o3", texto: "Irme a donde necesito: desplazarse por la comunidad o usar transporte" },
        { id: "o4", texto: "Manejar mis finanzas: controlar el dinero y pagar las cuentas a tiempo" },
        { id: "o5", texto: "Organizar mi tiempo: distribuir las horas del día de manera eficiente" },
        { id: "o6", texto: "Cuidar mi cuerpo: mantenerse en buena condición física, ejercicio o descanso" },
        { id: "o7", texto: "Usar mis herramientas cotidianas: manejar objetos del hogar, llaves, electrodomésticos, dispositivos" }
      ]
    },
    {
      id: "rol-relaciones",
      nombre: "Área B: Competencia en el Rol y Relaciones Interpersonales",
      items: [
        { id: "o8", texto: "Concentrarme: mantener la atención necesaria en las actividades sin dispersarse" },
        { id: "o9", texto: "Controlar mis emociones: responder de manera equilibrada al estrés o los imprevistos" },
        { id: "o10", texto: "Expresar mi opinión y deseos: comunicar ideas de forma clara y asertiva" },
        { id: "o11", texto: "Llevarme bien con otros: interactuar con familiares, amigos, vecinos o compañeros" },
        { id: "o12", texto: "Tomar decisiones por mí mismo: elegir de forma autónoma lo que quiero hacer" },
        { id: "o13", texto: "Cumplir mis roles: responder a las demandas de ser padre, hijo, trabajador, estudiante, etc." },
        { id: "o14", texto: "Participar en mi comunidad: involucrarse en actividades grupales, vecinales o recreativas" }
      ]
    },
    {
      id: "productividad-placer",
      nombre: "Área C: Competencia en la Productividad y el Placer",
      items: [
        { id: "o15", texto: "Disfrutar del ocio: dedicar tiempo a pasatiempos que generen satisfacción personal" },
        { id: "o16", texto: "Hacer actividades productivas: realizar tareas que aporten valor a otros o a mí mismo" },
        { id: "o17", texto: "Trabajar o estudiar: desempeñarse de forma constante en un empleo o formación académica" },
        { id: "o18", texto: "Relajarme: encontrar momentos para descansar la mente y aliviar la tensión diaria" },
        { id: "o19", texto: "Buscar metas personales: trabajar activamente por proyectos o sueños a mediano/largo plazo" },
        { id: "o20", texto: "Adaptarme a los cambios: flexibilidad psicológica ante nuevas situaciones de vida" },
        { id: "o21", texto: "Mantener mi rutina: sostener una estructura diaria equilibrada y funcional" }
      ]
    }
  ],

  opcionesCapacidad: opcionesCapacidadOSA(),
  opcionesImportancia: opcionesImportanciaOSA(),

  rangos: {
    competencia: { minimo: 21, maximo: 84 },
    importancia: { minimo: 21, maximo: 84 }
  },

  // ---------- Clasificación por % de Eficacia Percibida ----------
  clasificarEficacia: function (porcentaje) {
    if (porcentaje >= 80) return "Identidad Ocupacional Sólida: se percibe capaz y alineado con sus valores. Apto para alta o mantenimiento autónomo";
    if (porcentaje >= 50) return "Conflictos de Competencia / Identidad Ocupacional en Riesgo: discrepancias marcadas en roles o actividades específicas; se sugiere adaptar el entorno";
    return "Disfunción Ocupacional y Sentimiento de Ineficacia Severo: fuerte impacto emocional; alto riesgo de depresión reactiva o abandono de roles; requiere apoyo urgente con logros terapéuticos rápidos"; // <50%
  },

  // ---------- Función de cálculo consolidada ----------
  // respuestas: { o1: {capacidad: 2, importancia: 4}, ... }
  calcularResultado: function (respuestas) {
    let totalCompetencia = 0;
    let totalImportancia = 0;
    const resultadosPorItem = [];
    const subtotalesPorArea = {};

    this.areas.forEach((area) => {
      let subC = 0;
      let subI = 0;
      area.items.forEach((item) => {
        const r = respuestas[item.id];
        if (r && typeof r.capacidad === "number" && typeof r.importancia === "number") {
          subC += r.capacidad;
          subI += r.importancia;
          totalCompetencia += r.capacidad;
          totalImportancia += r.importancia;
          resultadosPorItem.push({
            id: item.id,
            texto: item.texto,
            area: area.id,
            capacidad: r.capacidad,
            importancia: r.importancia,
            ibo: r.importancia - r.capacidad,
            esCasoCritico: r.importancia === 4 && r.capacidad === 1
          });
        }
      });
      subtotalesPorArea[area.id] = { competencia: subC, importancia: subI };
    });

    const objetivosPrioritarios = [...resultadosPorItem].sort((a, b) => b.ibo - a.ibo);
    const fortalezas = resultadosPorItem.filter((r) => r.ibo <= 0);

    // % Eficacia Percibida = ((Total_Competencia - 21) / 63) * 100
    const porcentajeEficacia = resultadosPorItem.length === this.areas.reduce((a, ar) => a + ar.items.length, 0)
      ? Math.round(((totalCompetencia - this.rangos.competencia.minimo) / (this.rangos.competencia.maximo - this.rangos.competencia.minimo)) * 100)
      : null;

    return {
      totalCompetencia,
      totalImportancia,
      rangos: this.rangos,
      subtotalesPorArea,
      resultadosPorItem,
      objetivosPrioritarios,
      fortalezas,
      porcentajeEficacia,
      clasificacionEficacia: porcentajeEficacia !== null ? this.clasificarEficacia(porcentajeEficacia) : null
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaOSA_Completa);
}
