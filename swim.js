/* ============================================================
   SWIM — Swim Water Independence Scale (SWIS)
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   11 ítems, cada uno puntuado con la misma escala tipo FIM adaptada
   al medio acuático (1 a 7). Puntaje mínimo 11, máximo 77.
   ============================================================ */

// Escala FIM adaptada (1-7), común a los 11 ítems del SWIM
function opcionesFIM_Acuatico() {
  return [
    { valor: 1, label: "1 - Dependencia Total: realiza <25% del esfuerzo o requiere dos terapeutas" },
    { valor: 2, label: "2 - Asistencia Máxima: realiza 25%-49% del esfuerzo; el terapeuta sostiene casi todo el cuerpo" },
    { valor: 3, label: "3 - Asistencia Moderada: realiza 50%-74% del esfuerzo" },
    { valor: 4, label: "4 - Asistencia Mínima (Contacto): realiza ≥75% del esfuerzo; el terapeuta solo da estabilidad táctil" },
    { valor: 5, label: "5 - Supervisión / Preparación: solo requiere indicaciones verbales, pistas visuales o cercanía del terapeuta sin tocarlo" },
    { valor: 6, label: "6 - Independencia Modificada: requiere más tiempo, material adaptado o implica riesgos" },
    { valor: 7, label: "7 - Independencia Completa: realiza la tarea de forma segura, sin ayuda y en tiempo normal" }
  ];
}

const escalaSWIM = {
  id: "swim-water-independence-scale",
  nombre: "Swim Water Independence Scale (SWIS / SWIM)",
  especialidad: "hidroterapia",
  descripcion: "Cuestionario que evalúa la independencia funcional en el medio acuático, con escala de puntuación tipo FIM (1-7) adaptada al agua.",
  puntajeMinimo: 11,
  puntajeMaximo: 77,

  items: [
    {
      id: "swim-01",
      numero: 1,
      texto: "Adaptación General",
      descripcion: "Reacción al agua, inmersión del torso y control de la ansiedad.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-02",
      numero: 2,
      texto: "Entrada y Salida",
      descripcion: "Capacidad para ingresar y egresar de la piscina de forma segura.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-03",
      numero: 3,
      texto: "Control Respiratorio",
      descripcion: "Habilidad para soplar burbujas, sumergir cara y abrir ojos.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-04",
      numero: 4,
      texto: "Flotación Supina",
      descripcion: "Sostén boca arriba en el agua (control del empuje y alineación).",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-05",
      numero: 5,
      texto: "Flotación Prona",
      descripcion: "Sostén boca abajo con control de la vía aérea.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-06",
      numero: 6,
      texto: "Propulsión / Chapoteo",
      descripcion: "Movimiento activo de extremidades para generar desplazamiento.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-07",
      numero: 7,
      texto: "Inmersión Total",
      descripcion: "Capacidad de sumergir la cabeza por completo voluntariamente.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-08",
      numero: 8,
      texto: "Control Postural / Rotación",
      descripcion: "Giros (sagital/transversal) y retorno a una posición segura.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-09",
      numero: 9,
      texto: "Progreso en la Pared",
      descripcion: "Desplazamiento lateral autónomo sujeto del borde.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-10",
      numero: 10,
      texto: "Bipedestación (Estar de pie)",
      descripcion: "Mantenimiento del equilibrio vertical sin apoyos fijos.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-11",
      numero: 11,
      texto: "Control de Material Adaptado",
      descripcion: "Sujeción y tracción en cuerdas, barras o corcheras.",
      opciones: opcionesFIM_Acuatico()
    }
  ],

  // ---------- Clasificación del nivel de independencia ----------
  clasificar: function (total) {
    if (total >= 66) return "Independencia (Completa o Modificada)";
    if (total >= 44) return "Dependencia Moderada / Leve (requiere supervisión o mínima asistencia)";
    if (total >= 22) return "Dependencia Severa (requiere asistencia física moderada o máxima)";
    return "Dependencia Total (asistencia total en todas las actividades)"; // 21-11
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    let itemsRespondidos = 0;

    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        total += valor;
        itemsRespondidos++;
      }
    });

    return {
      total,
      puntajeMinimo: this.puntajeMinimo,
      puntajeMaximo: this.puntajeMaximo,
      itemsRespondidos,
      porcentaje: Math.round(((total - this.puntajeMinimo) / (this.puntajeMaximo - this.puntajeMinimo)) * 100),
      clasificacion: itemsRespondidos === this.items.length ? this.clasificar(total) : null
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaSWIM);
}
