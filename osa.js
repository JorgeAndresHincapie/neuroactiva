/* ============================================================
   OSA — Occupational Self-Assessment (Autoevaluación Ocupacional)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   21 ítems con DOS respuestas cada uno: Capacidad (C, 1-4) e
   Importancia (I, 1-4). No se suma un total — se calcula el Índice
   de Brecha Ocupacional (IBO = I - C) por ítem, y se genera un
   listado de objetivos prioritarios ordenado de mayor a menor IBO.
   ============================================================ */

function opcionesCapacidad() {
  return [
    { valor: 1, label: "1 - Tener mucha dificultad" },
    { valor: 2, label: "2 - Tener alguna dificultad" },
    { valor: 3, label: "3 - Hacerlo bien" },
    { valor: 4, label: "4 - Hacerlo extremadamente bien" }
  ];
}

function opcionesImportancia() {
  return [
    { valor: 1, label: "1 - No es importante" },
    { valor: 2, label: "2 - Es importante" },
    { valor: 3, label: "3 - Es muy importante" },
    { valor: 4, label: "4 - Es fundamental para mí" }
  ];
}

const escalaOSA = {
  id: "osa",
  nombre: "OSA (Autoevaluación Ocupacional)",
  especialidad: "terapia-ocupacional",
  descripcion: "Herramienta gold standard para medir la perspectiva del propio paciente sobre su competencia y el valor que le asigna a sus actividades. Genera automáticamente una lista priorizada de objetivos de tratamiento.",

  items: [
    { id: "o1", texto: "Concentrarme" },
    { id: "o2", texto: "Controlar mis emociones" },
    { id: "o3", texto: "Cuidar de mí mismo" },
    { id: "o4", texto: "Cuidar mi lugar de vida" },
    { id: "o5", texto: "Expresar mis ideas" },
    { id: "o6", texto: "Llevarme bien con otros" },
    { id: "o7", texto: "Irme a donde necesito" },
    { id: "o8", texto: "Manejar mis finanzas" },
    { id: "o9", texto: "Organizar mi tiempo" },
    { id: "o10", texto: "Disfrutar del ocio" },
    { id: "o11", texto: "Hacer actividades productivas" },
    { id: "o12", texto: "Cuidar mi cuerpo" },
    { id: "o13", texto: "Tomar decisiones por mí mismo" },
    { id: "o14", texto: "Mantener mi rutina" },
    { id: "o15", texto: "Trabajar o estudiar" },
    { id: "o16", texto: "Relajarme" },
    { id: "o17", texto: "Usar mis herramientas cotidianas" },
    { id: "o18", texto: "Buscar metas personales" },
    { id: "o19", texto: "Cumplir mis roles" },
    { id: "o20", texto: "Adaptarme a los cambios" },
    { id: "o21", texto: "Participar en mi comunidad" }
  ],

  opcionesCapacidad: opcionesCapacidad(),
  opcionesImportancia: opcionesImportancia(),

  // ---------- Función de cálculo: Índice de Brecha Ocupacional (IBO) ----------
  // respuestas: { o1: {capacidad: 2, importancia: 4}, o2: {capacidad: 3, importancia: 3}, ... }
  calcularBrechas: function (respuestas) {
    const resultados = [];

    this.items.forEach((item) => {
      const r = respuestas[item.id];
      if (r && typeof r.capacidad === "number" && typeof r.importancia === "number") {
        resultados.push({
          id: item.id,
          texto: item.texto,
          capacidad: r.capacidad,
          importancia: r.importancia,
          ibo: r.importancia - r.capacidad
        });
      }
    });

    // Ordenar de mayor a menor IBO -> los primeros son los objetivos prioritarios
    const objetivosPrioritarios = [...resultados].sort((a, b) => b.ibo - a.ibo);

    return {
      itemsEvaluados: resultados.length,
      resultados,
      objetivosPrioritarios
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaOSA);
}
