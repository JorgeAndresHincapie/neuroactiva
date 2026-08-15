/* ============================================================
   ÍNDICE DE BARTHEL ADAPTADO ACUÁTICO (IBAA)
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   10 ítems, puntaje máximo 100. Cada ítem tiene su propio rango de
   opciones (algunos 0/5, otros 0/5/10, otros 0/5/10/15) — a
   diferencia de las escalas FMA, aquí NO todos los ítems valen lo
   mismo.
   ============================================================ */

const escalaBarthelAcuatico = {
  id: "barthel-adaptado-acuatico",
  nombre: "Índice de Barthel Adaptado Acuático (IBAA)",
  especialidad: "hidroterapia",
  descripcion: "Evalúa el grado de autonomía del paciente en actividades básicas dentro del entorno acuático (adaptación del Índice de Barthel clásico).",
  puntajeMaximo: 100,

  items: [
    {
      id: "ibaa-01",
      numero: 1,
      texto: "Comer y beber",
      opciones: [
        { valor: 0, label: "0 - Incapaz" },
        { valor: 5, label: "5 - Ayuda para abrir/sostener botella" },
        { valor: 10, label: "10 - Independiente" }
      ]
    },
    {
      id: "ibaa-02",
      numero: 2,
      texto: "Lavarse / Bañarse",
      opciones: [
        { valor: 0, label: "0 - Dependiente en ducha" },
        { valor: 5, label: "5 - Independiente en ducha/piscina" }
      ]
    },
    {
      id: "ibaa-03",
      numero: 3,
      texto: "Arreglo personal",
      opciones: [
        { valor: 0, label: "0 - Requiere ayuda con gorro/gafas" },
        { valor: 5, label: "5 - Autónomo con gorro/gafas" }
      ]
    },
    {
      id: "ibaa-04",
      numero: 4,
      texto: "Vestirse",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Ayuda en prendas húmedas/órtesis" },
        { valor: 10, label: "10 - Independiente" }
      ]
    },
    {
      id: "ibaa-05",
      numero: 5,
      texto: "Deposición",
      opciones: [
        { valor: 0, label: "0 - Incontinente/Accidentes" },
        { valor: 5, label: "5 - Accidente ocasional" },
        { valor: 10, label: "10 - Continente total" }
      ]
    },
    {
      id: "ibaa-06",
      numero: 6,
      texto: "Micción",
      opciones: [
        { valor: 0, label: "0 - Incontinente/Sonda sin manejo" },
        { valor: 5, label: "5 - Pérdida ocasional" },
        { valor: 10, label: "10 - Continente total" }
      ]
    },
    {
      id: "ibaa-07",
      numero: 7,
      texto: "Uso del retrete",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Necesita apoyo para equilibrio/ropa" },
        { valor: 10, label: "10 - Independiente" }
      ]
    },
    {
      id: "ibaa-08",
      numero: 8,
      texto: "Traslado al agua",
      opciones: [
        { valor: 0, label: "0 - Grúa/Asistencia total" },
        { valor: 5, label: "5 - Ayuda física grande" },
        { valor: 10, label: "10 - Apoyo leve/Supervisión" },
        { valor: 15, label: "15 - Independiente por rampa/escalera" }
      ]
    },
    {
      id: "ibaa-09",
      numero: 9,
      texto: "Deambulación",
      opciones: [
        { valor: 0, label: "0 - Inmóvil/Flotación pasiva" },
        { valor: 5, label: "5 - Silla acuática/Andador" },
        { valor: 10, label: "10 - Con ayuda de 1 persona/Paralelas" },
        { valor: 15, label: "15 - Independiente >50m sin apoyos" }
      ]
    },
    {
      id: "ibaa-10",
      numero: 10,
      texto: "Escaleras de acceso",
      opciones: [
        { valor: 0, label: "0 - Incapaz" },
        { valor: 5, label: "5 - Precisa ayuda física o rampas asistidas" },
        { valor: 10, label: "10 - Independiente con barandilla" }
      ]
    }
  ],

  // ---------- Clasificación del grado de dependencia acuática ----------
  clasificar: function (total) {
    if (total === 100) return "Independencia acuática total";
    if (total >= 91) return "Dependencia acuática leve";
    if (total >= 61) return "Dependencia acuática moderada";
    if (total >= 21) return "Dependencia acuática severa";
    return "Dependencia acuática total"; // < 20 (y también cubre 20 exacto, no definido explícitamente en la fuente)
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        total += valor;
      }
    });

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      porcentaje: Math.round((total / this.puntajeMaximo) * 100),
      clasificacion: this.clasificar(total)
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaBarthelAcuatico);
}
