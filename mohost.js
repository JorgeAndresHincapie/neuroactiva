/* ============================================================
   MOHOST — Model of Human Occupation Screening Tool
   (Perfil Ocupacional Humano)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   24 ítems en 6 dimensiones (4 ítems c/u), escala 1-4 donde MAYOR
   puntaje = mayor independencia (4=Facilita, 3=Adecuado, 2=Inhibe,
   1=Restringe). Rango por subescala: 4-16. Rango global: 24-96.
   ============================================================ */

function opcionesMOHOST() {
  return [
    { valor: 4, label: "4 - F (Facilita): apoya fuertemente la participación independiente, sin necesidad de intervención" },
    { valor: 3, label: "3 - A (Adecuado/Permite): permite la participación, aunque con ligeras inconsistencias" },
    { valor: 2, label: "2 - I (Inhibe): interfiere o dificulta la participación; requiere supervisión o adaptaciones menores" },
    { valor: 1, label: "1 - R (Restringe): impide por completo la participación independiente; requiere asistencia total o intervención prioritaria" }
  ];
}

const escalaMOHOST = {
  id: "mohost",
  nombre: "MOHOST (Perfil Ocupacional Humano)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa 6 dimensiones del desempeño ocupacional (volición, habituación, comunicación/interacción, procesamiento, motoras, y entorno) mediante 24 ítems.",
  puntajeMinimo: 24,
  puntajeMaximo: 96,

  dimensiones: [
    {
      id: "volicion",
      nombre: "Volición (Motivación por la Ocupación)",
      items: [
        { id: "m1", numero: 1, texto: "Elección de la Ocupación: capacidad para elegir y comprometerse en actividades", opciones: opcionesMOHOST() },
        { id: "m2", numero: 2, texto: "Intereses: grado de interés y curiosidad que demuestra por las cosas que hace", opciones: opcionesMOHOST() },
        { id: "m3", numero: 3, texto: "Valoración de la Ocupación: percepción sobre la importancia y utilidad de sus actividades diarias", opciones: opcionesMOHOST() },
        { id: "m4", numero: 4, texto: "Sentido de Capacidad (Autoeficacia): confianza en sus propias habilidades ocupacionales", opciones: opcionesMOHOST() }
      ]
    },
    {
      id: "habituacion",
      nombre: "Habituación (Organización de la Vida Cotidiana)",
      items: [
        { id: "h1", numero: 1, texto: "Roles Ocupacionales: habilidad para asumir y cumplir roles familiares, laborales o comunitarios", opciones: opcionesMOHOST() },
        { id: "h2", numero: 2, texto: "Rutinas: organización de las actividades diarias en un horario equilibrado y predecible", opciones: opcionesMOHOST() },
        { id: "h3", numero: 3, texto: "Adaptabilidad de las Rutinas: flexibilidad para responder a cambios o imprevistos", opciones: opcionesMOHOST() },
        { id: "h4", numero: 4, texto: "Estilo de Vida: equilibrio entre actividades productivas, de autocuidado y de ocio", opciones: opcionesMOHOST() }
      ]
    },
    {
      id: "comunicacion-interaccion",
      nombre: "Habilidades de Comunicación e Interacción",
      items: [
        { id: "c1", numero: 1, texto: "Contacto Físico y Gestual: uso del cuerpo, expresiones faciales y gestos para comunicarse", opciones: opcionesMOHOST() },
        { id: "c2", numero: 2, texto: "Expresión Oral / Intercambio de Información: claridad, ritmo y modulación del habla", opciones: opcionesMOHOST() },
        { id: "c3", numero: 3, texto: "Relaciones Sociales: habilidad para entablar, mantener y adaptarse a dinámicas con diferentes personas", opciones: opcionesMOHOST() },
        { id: "c4", numero: 4, texto: "Comportamiento en Grupo: capacidad para colaborar y seguir normas implícitas en entornos grupales", opciones: opcionesMOHOST() }
      ]
    },
    {
      id: "procesamiento",
      nombre: "Habilidades de Procesamiento (Cognición Ocupacional)",
      items: [
        { id: "p1", numero: 1, texto: "Conocimiento y Elección de Objetos: selección adecuada de herramientas y materiales para una tarea", opciones: opcionesMOHOST() },
        { id: "p2", numero: 2, texto: "Organización del Espacio: capacidad para estructurar y ordenar el entorno de trabajo/actividad", opciones: opcionesMOHOST() },
        { id: "p3", numero: 3, texto: "Resolución de Problemas: capacidad para identificar fallas en la tarea y corregirlas sobre la marcha", opciones: opcionesMOHOST() },
        { id: "p4", numero: 4, texto: "Atención y Persistencia: mantenimiento del enfoque en la actividad desde el inicio hasta su finalización", opciones: opcionesMOHOST() }
      ]
    },
    {
      id: "motoras",
      nombre: "Habilidades Motoras (Desempeño Físico Ocupacional)",
      items: [
        { id: "o1", numero: 1, texto: "Postura y Flexibilidad: control postural adecuado durante transferencias y ejecución de la tarea", opciones: opcionesMOHOST() },
        { id: "o2", numero: 2, texto: "Movilidad y Desplazamiento: capacidad para moverse de forma eficiente en el espacio de la actividad", opciones: opcionesMOHOST() },
        { id: "o3", numero: 3, texto: "Coordinación y Manipulación: uso fluido de las extremidades superiores para manejar objetos y herramientas", opciones: opcionesMOHOST() },
        { id: "o4", numero: 4, texto: "Fuerza y Resistencia: energía física suficiente para completar las actividades sin fatiga extrema", opciones: opcionesMOHOST() }
      ]
    },
    {
      id: "entorno",
      nombre: "Entorno (Factores Ambientales)",
      items: [
        { id: "e1", numero: 1, texto: "Espacio Físico: accesibilidad y barreras arquitectónicas en los lugares donde interactúa", opciones: opcionesMOHOST() },
        { id: "e2", numero: 2, texto: "Objetos y Recursos: disponibilidad y adecuación de las herramientas y materiales necesarios", opciones: opcionesMOHOST() },
        { id: "e3", numero: 3, texto: "Grupos Sociales (Personas): apoyo emocional o interferencia de la familia, amigos o cuidadores", opciones: opcionesMOHOST() },
        { id: "e4", numero: 4, texto: "Demandas Ocupacionales: nivel de exigencia de las tareas habituales frente a las capacidades reales", opciones: opcionesMOHOST() }
      ]
    }
  ],

  // ---------- Clasificación clínica ----------
  clasificar: function (total) {
    if (total >= 80) return "Participación Ocupacional Óptima: funciona de manera independiente o con apoyos naturales mínimos";
    if (total >= 56) return "Participación Limitada / Riesgo Ocupacional: existen dimensiones críticas que inhiben el desempeño; sugerida intervención en TO enfocada en adaptación de rutinas";
    if (total >= 32) return "Disfunción Ocupacional Moderada: múltiples factores restringen o inhiben la participación diaria; requiere asistencia técnica y modificación intensiva del entorno";
    return "Disfunción Ocupacional Severa: dependencia generalizada; el plan terapéutico debe enfocarse en estimulación basal y entrenamiento estricto del cuidador primario"; // 24-31
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotalesPorDimension = {};

    this.dimensiones.forEach((dim) => {
      let subtotal = 0;
      dim.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") {
          subtotal += valor;
        }
      });
      subtotalesPorDimension[dim.id] = subtotal;
      total += subtotal;
    });

    return {
      total,
      puntajeMinimo: this.puntajeMinimo,
      puntajeMaximo: this.puntajeMaximo,
      clasificacion: this.clasificar(total),
      subtotalesPorDimension
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaMOHOST);
}
