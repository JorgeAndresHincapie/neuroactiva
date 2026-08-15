/* ============================================================
   ROLE CHECKLIST (Checklist de Roles)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   10 roles, cada uno con 2 partes:
   - Parte I: Distribución Temporal (pasado/presente/futuro — pueden
     marcarse varias casillas a la vez, no es excluyente)
   - Parte II: Grado de Valor (1-3, una sola selección)
   Calcula: Índice de Pérdida Ocupacional (IPO), Índice de Deseo
   Futuro (IDF), Puntaje Bruto de Valoración Total, y un perfil
   funcional cualitativo (1/2/3).
   ============================================================ */

const escalaRoleChecklist = {
  id: "role-checklist",
  nombre: "Role Checklist (Checklist de Roles)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa la participación temporal (pasado/presente/futuro) y el valor personal asignado a 10 roles ocupacionales clave.",

  roles: [
    { id: "ro1", texto: "Estudiante: asistir a la escuela, universidad o cursos de formación" },
    { id: "ro2", texto: "Trabajador: tener un empleo remunerado (tiempo completo o parcial)" },
    { id: "ro3", texto: "Voluntario: donar tiempo a servicios comunitarios o instituciones sin fines de lucro" },
    { id: "ro4", texto: "Cuidador: responsabilidad directa de criar niños o asistir a familiares enfermos/ancianos" },
    { id: "ro5", texto: "Proveedor de Hogar: responsabilidad principal de mantener limpia la casa, cocinar o gestionar el hogar" },
    { id: "ro6", texto: "Amigo: participar en actividades sociales interpersonales con pares o conocidos" },
    { id: "ro7", texto: "Miembro de Familia: cumplir responsabilidades y dinámicas como hijo, padre, hermano o pareja" },
    { id: "ro8", texto: "Aficionado / Practicante de Ocio: dedicar tiempo constante a pasatiempos, deportes o artes" },
    { id: "ro9", texto: "Miembro de Organización: participar activamente en clubes, iglesias, sindicatos o comités vecinales" },
    { id: "ro10", texto: "Ciudadano: involucrarse en deberes cívicos o políticos de la comunidad (votar, reuniones locales)" }
  ],

  opcionesValor: [
    { valor: 1, label: "1 - Nada valioso: no tiene importancia afectiva o práctica" },
    { valor: 2, label: "2 - Valioso: es importante para su bienestar" },
    { valor: 3, label: "3 - Muy valioso: es una prioridad absoluta para su identidad" }
  ],

  rangoValoracionTotal: { minimo: 10, maximo: 30 },

  // ---------- Función de cálculo consolidada ----------
  // respuestas: { ro1: { pasado: true, presente: false, futuro: false, valor: 3 }, ... }
  calcularResultado: function (respuestas) {
    let totalValor = 0;
    let itemsRespondidos = 0;

    const rolesConDetalle = [];

    this.roles.forEach((rol) => {
      const r = respuestas[rol.id];
      if (r && typeof r.valor === "number") {
        totalValor += r.valor;
        itemsRespondidos++;
        rolesConDetalle.push({
          id: rol.id,
          texto: rol.texto,
          pasado: !!r.pasado,
          presente: !!r.presente,
          futuro: !!r.futuro,
          valor: r.valor
        });
      }
    });

    // A. Índice de Pérdida Ocupacional (IPO): valioso (>=2), solo pasado (no presente, no futuro)
    const indicePerdidaOcupacional = rolesConDetalle.filter(
      (r) => r.valor >= 2 && r.pasado && !r.presente && !r.futuro
    );

    // B. Índice de Deseo Futuro (IDF): futuro=true y valor=3 (muy valioso)
    const indiceDeseoFuturo = rolesConDetalle.filter(
      (r) => r.futuro && r.valor === 3
    );

    // Perfil funcional cualitativo (heurística basada en los patrones descritos,
    // ya que el documento no da cortes numéricos exactos)
    const muyValiososPasadoYPresente = rolesConDetalle.filter(
      (r) => r.valor === 3 && r.pasado && r.presente
    ).length;
    const muyValiososSoloPasado = rolesConDetalle.filter(
      (r) => r.valor === 3 && r.pasado && !r.presente
    ).length;
    const rolesPresentes = rolesConDetalle.filter((r) => r.presente).length;
    const concentracionFuturo = indiceDeseoFuturo.length;

    let perfil = null;
    if (itemsRespondidos === this.roles.length) {
      if (muyValiososPasadoYPresente >= 2 && rolesPresentes >= 4) {
        perfil = {
          nombre: "Perfil 1: Continuidad Ocupacional Eficiente",
          descripcion: "Alta coincidencia entre roles Pasados y Presentes que son Muy Valiosos. Conserva sus redes de apoyo y su identidad a pesar de la condición de salud. Pronóstico favorable."
        };
      } else if (muyValiososSoloPasado >= 2 && rolesPresentes <= 2) {
        perfil = {
          nombre: "Perfil 2: Ruptura Ocupacional Severa",
          descripcion: "Muchos roles Pasados con valor alto, pero cero o muy pocos roles Presentes. Alerta de aislamiento social y frustración existencial. Priorizar que el paciente retome al menos 2 roles básicos de inmediato."
        };
      } else if (rolesPresentes <= 2 && concentracionFuturo >= 3) {
        perfil = {
          nombre: "Perfil 3: Identidad Ocupacional en Construcción o Transición",
          descripcion: "Bajos roles en pasado/presente, pero alta concentración de intenciones en el Futuro. Común en adolescentes con discapacidad o adultos jóvenes en reconversión laboral. Sugerir exploración de intereses y entrenamiento pre-laboral."
        };
      }
      // Si no encaja claramente en ninguno de los 3 patrones descritos, se deja
      // sin perfil asignado (null) en vez de forzar una clasificación dudosa.
    }

    return {
      totalValor,
      rangoValoracionTotal: this.rangoValoracionTotal,
      itemsRespondidos,
      indicePerdidaOcupacional,
      indiceDeseoFuturo,
      perfil,
      rolesConDetalle
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaRoleChecklist);
}
