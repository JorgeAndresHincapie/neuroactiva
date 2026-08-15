/* ============================================================
   ACIS — Assessment of Communication and Interaction Skills
   (Habilidades de Interacción)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   20 ítems en 3 dominios (Corporalidad 6, Intercambio de
   Información 6, Relaciones 8), escala 1-4.
   NOTA: el documento fuente dice "no se recomienda sumar un
   puntaje total plano", pero también declara explícitamente
   "Puntaje Máximo del Test: 80 puntos" y da rangos de % de
   competencia GLOBAL para la clasificación final. Se interpretó
   como: no mostrar solo el total sin contexto — pero sí calcularlo
   junto con los 3 subtotales, ya que la clasificación final los
   necesita.
   ============================================================ */

function opcionesACIS() {
  return [
    { valor: 4, label: "4 - Habilidad Competente: se comunica e interactúa con fluidez, sin signos de limitación" },
    { valor: 3, label: "3 - Habilidad Cuestionable: conductas intermitentes o inapropiadas que ponen en duda la eficacia, pero termina la interacción" },
    { valor: 2, label: "2 - Ineficacia / Limitación: errores evidentes que interrumpen la comunicación o causan desentendimiento menor" },
    { valor: 1, label: "1 - Déficit Severo / Restricción: interacción completamente disruptiva, ausente o destructiva" }
  ];
}

const escalaACIS = {
  id: "acis",
  nombre: "ACIS (Habilidades de Interacción y Comunicación)",
  especialidad: "terapia-ocupacional",
  descripcion: "Escala de observación directa (no de lápiz y papel) que evalúa el desempeño comunicativo mientras la persona participa en una ocupación real, individual o grupal.",
  puntajeMaximo: 80,

  dominios: [
    {
      id: "corporalidad",
      nombre: "Dominio 1: Corporalidad (Uso del cuerpo en la comunicación)",
      rango: { minimo: 6, maximo: 24 },
      items: [
        { id: "c1", texto: "Contacto (Contacts): hace contacto físico con otros de forma adecuada al contexto", opciones: opcionesACIS() },
        { id: "c2", texto: "Mirada (Gazes): utiliza los ojos para establecer contacto visual o regular la interacción", opciones: opcionesACIS() },
        { id: "c3", texto: "Gestos (Gestures): usa movimientos de manos y cuerpo para enfatizar o dar significado al mensaje", opciones: opcionesACIS() },
        { id: "c4", texto: "Postura (Postures): adopta posiciones físicas adecuadas respecto a los demás", opciones: opcionesACIS() },
        { id: "c5", texto: "Reorientación (Orients): gira y orienta el cuerpo hacia la persona con la que interactúa", opciones: opcionesACIS() },
        { id: "c6", texto: "Locación (Locates): se ubica a una distancia correcta de personas u objetos durante la actividad", opciones: opcionesACIS() }
      ]
    },
    {
      id: "intercambio",
      nombre: "Dominio 2: Intercambio de Información (Uso del lenguaje y la voz)",
      rango: { minimo: 6, maximo: 24 },
      items: [
        { id: "i1", texto: "Articulación (Modulates): emplea volumen, tono y velocidad de voz claros y comprensibles", opciones: opcionesACIS() },
        { id: "i2", texto: "Expresión (Shares): entrega información relevante, ideas o sentimientos sobre sí mismo o la tarea", opciones: opcionesACIS() },
        { id: "i3", texto: "Petición (Asks): solicita información, aclaraciones, ayuda o feedback de manera oportuna", opciones: opcionesACIS() },
        { id: "i4", texto: "Respuestas (Asserts): contesta de forma lógica a preguntas o demandas comunicativas", opciones: opcionesACIS() },
        { id: "i5", texto: "Flujo (Expresses): mantiene un discurso fluido, continuo, sin interrupciones abruptas o pausas extrañas", opciones: opcionesACIS() },
        { id: "i6", texto: "Sintonía (Informs): utiliza lenguaje apropiado para el nivel cultural y de comprensión del oyente", opciones: opcionesACIS() }
      ]
    },
    {
      id: "relaciones",
      nombre: "Dominio 3: Relaciones (Dinámica y adaptación social)",
      rango: { minimo: 8, maximo: 32 },
      items: [
        { id: "r1", texto: "Colaboración (Collaborates): trabaja en equipo hacia un objetivo común durante la ocupación", opciones: opcionesACIS() },
        { id: "r2", texto: "Respeto (Conforms): sigue las normas implícitas o explícitas del grupo y el entorno", opciones: opcionesACIS() },
        { id: "r3", texto: "Enfoque (Focuses): dirige la conversación e interacciones hacia el tema principal de la actividad", opciones: opcionesACIS() },
        { id: "r4", texto: "Relación (Relates): establece una conexión o lazo social adecuado (empatía/cordialidad)", opciones: opcionesACIS() },
        { id: "r5", texto: "Respeto de Turnos (Respects): espera su momento para hablar o actuar sin interrumpir", opciones: opcionesACIS() },
        { id: "r6", texto: "Modificación (Adapts): ajusta su comportamiento social ante imprevistos o malentendidos", opciones: opcionesACIS() },
        { id: "r7", texto: "Manejo del Conflicto (Heeds): utiliza estrategias pacíficas para resolver desacuerdos o tensiones", opciones: opcionesACIS() },
        { id: "r8", texto: "Transición (Times): inicia y finaliza las interacciones en el momento exacto y adecuado", opciones: opcionesACIS() }
      ]
    }
  ],

  // ---------- Clasificación por % de competencia global ----------
  clasificar: function (porcentaje) {
    if (porcentaje >= 85) return "Interacción Social Funcional: habilidades óptimas, sin requerir apoyos terapéuticos en este canal";
    if (porcentaje >= 60) return "Riesgo de Interacción Ocupacional: fallas intermitentes (comúnmente en Relaciones); se sugiere entrenamiento en habilidades sociales";
    return "Restricción Severa de la Comunicación: el comportamiento interactivo rompe la ocupación o genera aislamiento; requiere intervención prioritaria en entornos estructurados"; // <60%
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotalesPorDominio = {};

    this.dominios.forEach((dom) => {
      let subtotal = 0;
      dom.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") subtotal += valor;
      });
      subtotalesPorDominio[dom.id] = { subtotal, rango: dom.rango };
      total += subtotal;
    });

    const porcentaje = Math.round((total / this.puntajeMaximo) * 100);

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      porcentaje,
      clasificacion: this.clasificar(porcentaje),
      subtotalesPorDominio
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaACIS);
}
