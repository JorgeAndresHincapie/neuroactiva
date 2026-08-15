/* ============================================================
   REE / OPHI-II — Escala del Entorno Ocupacional
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   12 ítems en 3 grupos (Ambiente Físico, Ambiente Social, Demandas
   Ocupacionales), escala 1-4. Máximo 48. Indispensable para
   telemedicina y visitas domiciliarias.
   ============================================================ */

function opcionesREE() {
  return [
    { valor: 4, label: "4 - Impacto fuertemente facilitador: el ambiente potencia la independencia" },
    { valor: 3, label: "3 - Impacto atenuado o neutro: el ambiente permite la tarea sin intervenir" },
    { valor: 2, label: "2 - Impacto inhibidor moderado: el ambiente presenta barreras corregibles" },
    { valor: 1, label: "1 - Barrera severa/Restricción: el entorno bloquea por completo el desempeño" }
  ];
}

const escalaREE = {
  id: "ree-ophi2",
  nombre: "REE / OPHI-II (Escala del Entorno Ocupacional)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa el impacto del ambiente físico y social sobre el desempeño del usuario. Indispensable para telemedicina y visitas domiciliarias.",
  puntajeMaximo: 48,

  grupos: [
    {
      id: "ambiente-fisico",
      nombre: "Ambiente Físico",
      items: [
        { id: "e1", texto: "Espacio físico (accesibilidad)", opciones: opcionesREE() },
        { id: "e2", texto: "Seguridad del entorno", opciones: opcionesREE() },
        { id: "e3", texto: "Estímulos visuales/auditivos", opciones: opcionesREE() },
        { id: "e4", texto: "Disponibilidad de objetos/tecnología asistiva", opciones: opcionesREE() }
      ]
    },
    {
      id: "ambiente-social",
      nombre: "Ambiente Social",
      items: [
        { id: "e5", texto: "Apoyo emocional de la familia/cuidadores", opciones: opcionesREE() },
        { id: "e6", texto: "Expectativas del grupo social", opciones: opcionesREE() },
        { id: "e7", texto: "Red comunitaria o institucional", opciones: opcionesREE() },
        { id: "e8", texto: "Dinámica de comunicación en el hogar", opciones: opcionesREE() }
      ]
    },
    {
      id: "demandas-ocupacionales",
      nombre: "Demandas Ocupacionales",
      items: [
        { id: "e9", texto: "Exigencias de las tareas diarias", opciones: opcionesREE() },
        { id: "e10", texto: "Flexibilidad de los horarios", opciones: opcionesREE() },
        { id: "e11", texto: "Recursos económicos del entorno", opciones: opcionesREE() },
        { id: "e12", texto: "Barreras culturales o actitudinales", opciones: opcionesREE() }
      ]
    }
  ],

  // ---------- Clasificación ----------
  clasificar: function (total) {
    if (total >= 37) return "Entorno Altamente Facilitador";
    if (total >= 25) return "Entorno con Barreras Modificables";
    return "Entorno Restrictivo / Alerta de Inaccesibilidad"; // 12-24
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotalesPorGrupo = {};

    this.grupos.forEach((grupo) => {
      let subtotal = 0;
      grupo.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") subtotal += valor;
      });
      subtotalesPorGrupo[grupo.id] = subtotal;
      total += subtotal;
    });

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      clasificacion: this.clasificar(total),
      subtotalesPorGrupo
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaREE);
}
