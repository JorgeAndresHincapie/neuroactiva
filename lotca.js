/* ============================================================
   LOTCA — Loewenstein Occupational Therapy Cognitive Assessment
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   20 ítems en 5 áreas cognitivas. Escala 1-4 (NUNCA se usa 0), con
   dos excepciones que permiten un 5 ("Criterio de Excelencia"):
   VM3 (Construcción en 3D) y OP2 (Secuencias Lógicas).

   IMPORTANTE: a diferencia de las demás escalas del banco, el LOTCA
   NO devuelve un puntaje total sumado — el documento fuente es
   explícito en que sumarlo todo diluye la información clínica y es
   metodológicamente incorrecto. Se devuelven 5 subtotales
   independientes por área (un "perfil", no un solo número).
   ============================================================ */

function opciones1a4() {
  return [
    { valor: 1, label: "1 - Incapacidad Total: no comprende la consigna o no inicia la tarea" },
    { valor: 2, label: "2 - Ejecución Parcial con Asistencia: completa menos de la mitad con guía física o verbal constante" },
    { valor: 3, label: "3 - Ejecución Casi Completa: resuelve la tarea con lentitud, errores menores autodefectados o pistas mínimas" },
    { valor: 4, label: "4 - Ejecución Perfecta: resuelve de forma fluida, correcta y autónoma en el tiempo estándar" }
  ];
}

function opciones1a5() {
  return [
    ...opciones1a4(),
    { valor: 5, label: "5 - Criterio de Excelencia: ejecución inmediata sin titubeo, o con estrategia avanzada de resolución" }
  ];
}

const escalaLOTCA = {
  id: "lotca",
  nombre: "LOTCA (Loewenstein Occupational Therapy Cognitive Assessment)",
  especialidad: "terapia-ocupacional",
  descripcion: "Instrumento gold standard para mapear en profundidad funciones cognitivas y perceptivas en adultos con daño cerebral. A diferencia de un tamizaje rápido (MMSE), identifica exactamente qué área cognitiva específica está fallando.",
  notaMetodologica: "No se calcula un puntaje total único — se reportan 5 subtotales independientes por área, ya que sumarlos diluiría la información clínica.",

  areas: [
    {
      id: "orientacion",
      nombre: "Área 1: Orientación",
      rango: { minimo: 2, maximo: 8 },
      items: [
        { id: "o1", texto: "Orientación Espacial: reconocimiento del entorno físico actual (dónde está, ciudad, dirección)", opciones: opciones1a4() },
        { id: "o2", texto: "Orientación Temporal: comprensión del tiempo cronológico (fecha, año, hora, estación)", opciones: opciones1a4() }
      ]
    },
    {
      id: "percepcion",
      nombre: "Área 2: Percepción Visual y Espacial",
      rango: { minimo: 6, maximo: 24 },
      items: [
        { id: "pv1", texto: "Identificación de Objetos: reconocer visualmente 8 objetos cotidianos en fotografías", opciones: opciones1a4() },
        { id: "pv2", texto: "Identificación de Formas: identificar figuras geométricas básicas impresas en tarjetas", opciones: opciones1a4() },
        { id: "pv3", texto: "Figuras Fondo: discriminar objetos específicos superpuestos o difuminados en una imagen", opciones: opciones1a4() },
        { id: "pv4", texto: "Constancia de Objeto: reconocer un objeto fotografiado desde un ángulo inusual o invertido", opciones: opciones1a4() },
        { id: "pe1", texto: "Percepción Espacial (Cuerpo propio): identificar componentes de su propio esquema corporal", opciones: opciones1a4() },
        { id: "pe2", texto: "Percepción Espacial (Relaciones en el espacio): posición de objetos respecto a su cuerpo y entre sí", opciones: opciones1a4() }
      ]
    },
    {
      id: "praxis",
      nombre: "Área 3: Praxis",
      rango: { minimo: 3, maximo: 12 },
      items: [
        { id: "pr1", texto: "Imitación Motora: capacidad para replicar gestos físicos realizados por el terapeuta", opciones: opciones1a4() },
        { id: "pr2", texto: "Utilización de Objetos: demostrar el uso correcto de herramientas comunes (peine, tijeras, llave)", opciones: opciones1a4() },
        { id: "pr3", texto: "Acciones Secuenciales: ejecutar una cadena de movimientos ordenados (ej. meter una carta en un sobre y sellarlo)", opciones: opciones1a4() }
      ]
    },
    {
      id: "visomotor",
      nombre: "Área 4: Organización Visomotor y Constructiva",
      rango: { minimo: 6, maximo: 25 },
      items: [
        { id: "vm1", texto: "Copia de Formas Geométricas: dibujar figuras geométricas presentadas en un modelo", opciones: opciones1a4() },
        { id: "vm2", texto: "Reproducción de un Modelo de Dos Dimensiones: replicar un diseño plano con bloques o clavijas", opciones: opciones1a4() },
        { id: "vm3", texto: "Construcción en Tres Dimensiones: armar un cubo o pirámide 3D con bloques siguiendo un modelo físico", opciones: opciones1a5() },
        { id: "vm4", texto: "Construcción con Bloques (Diseño en tarjeta): construir una estructura a partir de un plano 2D", opciones: opciones1a4() },
        { id: "vm5", texto: "Rompecabezas / Construcción libre: unir piezas segmentadas para formar una imagen coherente", opciones: opciones1a4() },
        { id: "vm6", texto: "Dibujo de un Objeto Común: dibujar un elemento reconocible de memoria (reloj, casa, bicicleta)", opciones: opciones1a4() }
      ]
    },
    {
      id: "pensamiento",
      nombre: "Área 5: Operaciones de Pensamiento y Razonamiento",
      rango: { minimo: 3, maximo: 13 },
      items: [
        { id: "op1", texto: "Categorización / Clasificación: agrupar objetos o tarjetas siguiendo un criterio lógico", opciones: opciones1a4() },
        { id: "op2", texto: "Secuencias Lógicas (Historias en imágenes): ordenar cronológicamente tarjetas que narran una historia", opciones: opciones1a5() },
        { id: "op3", texto: "Razonamiento Geométrico: resolver problemas espaciales abstractos completando secuencias de formas", opciones: opciones1a4() }
      ]
    }
  ],

  // ---------- Interpretación por área (comparando contra el máximo teórico) ----------
  interpretarArea: function (subtotal, rango) {
    if (subtotal === rango.maximo) {
      return "Puntaje Máximo: integridad del procesamiento cognitivo en este canal. Apto para auto-mantenimiento independiente.";
    }
    const perdida = rango.maximo - subtotal;
    const rangoTotal = rango.maximo - rango.minimo;
    if (perdida <= 2) {
      return "Disminución Leve: disfunciones sutiles. Afecta tareas complejas (manejo de dinero, retorno laboral). Se sugiere entrenamiento con estrategias de compensación (listas, alarmas).";
    }
    if (subtotal <= rango.minimo + Math.round(rangoTotal * 0.25)) {
      return "Disminución Moderada/Severa: falla crítica en el procesamiento neurocognitivo. Alto riesgo para ABVD. Requiere asistencia humana directa y adaptaciones masivas del entorno.";
    }
    return "Disminución moderada: afectación intermedia, requiere valoración clínica adicional para definir nivel de apoyo.";
  },

  // ---------- Función de cálculo (devuelve el PERFIL, no un total) ----------
  calcularPerfil: function (respuestas) {
    const perfil = {};

    this.areas.forEach((area) => {
      let subtotal = 0;
      let itemsRespondidos = 0;
      area.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") {
          subtotal += valor;
          itemsRespondidos++;
        }
      });

      const completo = itemsRespondidos === area.items.length;
      perfil[area.id] = {
        subtotal,
        rango: area.rango,
        itemsRespondidos,
        completo,
        interpretacion: completo ? this.interpretarArea(subtotal, area.rango) : null
      };
    });

    return perfil;
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaLOTCA);
}
