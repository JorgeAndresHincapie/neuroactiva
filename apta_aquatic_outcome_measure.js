/* ============================================================
   APTA AQUATIC OUTCOME MEASURE
   (la ficha fuente se autodenomina internamente "WOTA 2", pero es
   un instrumento distinto en contenido a Halliwick WOTA2 ya
   construido — se usa un id/prefijo propio para evitar colisión)
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   27 ítems, TODOS con la misma escala 0-3 (más simple que Halliwick:
   sin opción "X", sin rangos distintos por sección). Máximo 81.
   Diseñado para pacientes que comprenden y siguen instrucciones
   verbales funcionales.
   ============================================================ */

function opcionesAPTA() {
  return [
    { valor: 0, label: "0 - No realiza: no puede realizar la tarea, muestra rechazo severo o requiere asistencia física total" },
    { valor: 1, label: "1 - Asistencia Máxima/Moderada: inicia la tarea pero requiere soporte físico constante del terapeuta" },
    { valor: 2, label: "2 - Asistencia Mínima/Supervisión: la realiza de forma independiente pero con fallas de equilibrio, lentitud o bajo supervisión estrecha" },
    { valor: 3, label: "3 - Independencia Completa: la realiza con perfecto control postural, fluidez y sin ningún tipo de asistencia" }
  ];
}

const escalaAPTA_AquaticOutcomeMeasure = {
  id: "apta-aquatic-outcome-measure",
  nombre: "APTA Aquatic Outcome Measure",
  especialidad: "hidroterapia",
  descripcion: "Ficha clínica de evaluación acuática para pacientes que comprenden y siguen instrucciones verbales funcionales. Evalúa adaptación mental, control postural/rotaciones y desplazamiento/propulsión.",
  puntajeMaximo: 81,

  secciones: [
    {
      id: "i-adaptacion-mental-entrada",
      nombre: "I. Adaptación Mental y Entrada",
      items: [
        { id: "apta-aqm-01", numero: 1, texto: "Entrada independiente a la piscina (escaleras, rampa o borde)", opciones: opcionesAPTA() },
        { id: "apta-aqm-02", numero: 2, texto: "Caminar o desplazarse en el agua manteniendo el equilibrio vertical", opciones: opcionesAPTA() },
        { id: "apta-aqm-03", numero: 3, texto: "Mojarse la cara voluntariamente con las manos", opciones: opcionesAPTA() },
        { id: "apta-aqm-04", numero: 4, texto: "Soplar burbujas metiendo la boca en el agua", opciones: opcionesAPTA() },
        { id: "apta-aqm-05", numero: 5, texto: "Soplar burbujas metiendo la boca y la nariz simultáneamente", opciones: opcionesAPTA() },
        { id: "apta-aqm-06", numero: 6, texto: "Inmersión total de la cabeza durante al menos 3 segundos", opciones: opcionesAPTA() },
        { id: "apta-aqm-07", numero: 7, texto: "Abrir los ojos debajo del agua para mirar un objeto", opciones: opcionesAPTA() }
      ]
    },
    {
      id: "ii-control-postural-rotaciones",
      nombre: "II. Control Postural y Rotaciones",
      items: [
        { id: "apta-aqm-08", numero: 8, texto: "Transición de pie a flotación prona (boca abajo)", opciones: opcionesAPTA() },
        { id: "apta-aqm-09", numero: 9, texto: "Mantener flotación prona durante 5 segundos", opciones: opcionesAPTA() },
        { id: "apta-aqm-10", numero: 10, texto: "Rotación longitudinal en prono (girar hacia un lado)", opciones: opcionesAPTA() },
        { id: "apta-aqm-11", numero: 11, texto: "Transición de flotación prona a la posición de pie de forma autónoma", opciones: opcionesAPTA() },
        { id: "apta-aqm-12", numero: 12, texto: "Transición de pie a flotación supina (boca arriba)", opciones: opcionesAPTA() },
        { id: "apta-aqm-13", numero: 13, texto: "Mantener flotación supina durante 5 segundos", opciones: opcionesAPTA() },
        { id: "apta-aqm-14", numero: 14, texto: "Rotación longitudinal en supino (girar hacia un lado)", opciones: opcionesAPTA() },
        { id: "apta-aqm-15", numero: 15, texto: "Transición de flotación supina a la posición de pie de forma autónoma", opciones: opcionesAPTA() },
        { id: "apta-aqm-16", numero: 16, texto: "Rotación transversal: pasar de posición supina a prona", opciones: opcionesAPTA() },
        { id: "apta-aqm-17", numero: 17, texto: "Rotación transversal: pasar de posición prona a supina", opciones: opcionesAPTA() },
        { id: "apta-aqm-18", numero: 18, texto: "Enderezamiento sagital (controlar el empuje lateral del agua)", opciones: opcionesAPTA() }
      ]
    },
    {
      id: "iii-desplazamiento-propulsion",
      nombre: "III. Desplazamiento y Propulsión",
      items: [
        { id: "apta-aqm-19", numero: 19, texto: "Flotación pasiva (mantenerse relajado mientras el terapeuta lo mueve)", opciones: opcionesAPTA() },
        { id: "apta-aqm-20", numero: 20, texto: "Desplazamiento lateral sujeto del borde de la piscina", opciones: opcionesAPTA() },
        { id: "apta-aqm-21", numero: 21, texto: "Propulsión en posición prona usando solo las piernas (pataleo)", opciones: opcionesAPTA() },
        { id: "apta-aqm-22", numero: 22, texto: "Propulsión en posición prona usando solo los brazos", opciones: opcionesAPTA() },
        { id: "apta-aqm-23", numero: 23, texto: "Propulsión en posición supina usando solo las piernas", opciones: opcionesAPTA() },
        { id: "apta-aqm-24", numero: 24, texto: "Propulsión en posición supina usando solo los brazos", opciones: opcionesAPTA() },
        { id: "apta-aqm-25", numero: 25, texto: "Combinación de brazos y piernas en posición prona (nado básico)", opciones: opcionesAPTA() },
        { id: "apta-aqm-26", numero: 26, texto: "Combinación de brazos y piernas en posición supina", opciones: opcionesAPTA() },
        { id: "apta-aqm-27", numero: 27, texto: "Salida independiente de la piscina hacia la superficie seca", opciones: opcionesAPTA() }
      ]
    }
  ],

  // ---------- Clasificación por porcentaje de independencia ----------
  clasificar: function (porcentaje) {
    if (porcentaje >= 76) return "Independencia Alta: listo para transición a estilos de natación adaptada o actividades comunitarias sin asistencia";
    if (porcentaje >= 36) return "Independencia Intermedia: domina el entorno pero falla en los giros. Priorizar trabajo de rotaciones y control de tronco";
    return "Dependencia Alta: centrar el tratamiento en adaptación mental al agua y control de la respiración"; // 0-35%
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotalesPorSeccion = {};

    this.secciones.forEach((seccion) => {
      let subtotal = 0;
      seccion.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") {
          subtotal += valor;
        }
      });
      subtotalesPorSeccion[seccion.id] = subtotal;
      total += subtotal;
    });

    const porcentaje = Math.round((total / this.puntajeMaximo) * 100);

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      porcentaje,
      clasificacion: this.clasificar(porcentaje),
      subtotalesPorSeccion
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaAPTA_AquaticOutcomeMeasure);
}
