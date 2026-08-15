/* ============================================================
   ESCALA DE RANKIN MODIFICADA (mRS)
   Especialidad: Neurología / ACV
   ============================================================
   Escala ordinal de UN solo ítem (0-6), mide el grado de
   discapacidad/dependencia en las actividades tras un ACV u otro
   evento neurológico. Muy citada junto al NIHSS (severidad aguda)
   como medida de resultado funcional a mediano/largo plazo.
   ============================================================ */

const escalaRankin = {
  id: "rankin-modificada",
  nombre: "Escala de Rankin Modificada (mRS)",
  especialidad: "neurologia",
  descripcion: "Mide el grado de discapacidad o dependencia en las actividades de la vida diaria tras un ACV u otro evento neurológico agudo. Es la medida de resultado funcional más usada en ensayos clínicos de ACV.",
  tipo: "seleccion-unica",

  niveles: [
    { valor: 0, descripcion: "Sin síntomas" },
    { valor: 1, descripcion: "Sin discapacidad significativa a pesar de los síntomas: capaz de realizar todas las actividades y obligaciones habituales" },
    { valor: 2, descripcion: "Discapacidad leve: incapaz de realizar todas las actividades previas, pero capaz de cuidar de sus propios asuntos sin asistencia" },
    { valor: 3, descripcion: "Discapacidad moderada: requiere alguna ayuda, pero capaz de caminar sin asistencia" },
    { valor: 4, descripcion: "Discapacidad moderadamente severa: incapaz de caminar sin asistencia e incapaz de atender sus propias necesidades corporales sin asistencia" },
    { valor: 5, descripcion: "Discapacidad severa: postrado en cama, incontinente, requiere cuidados de enfermería y atención constante" },
    { valor: 6, descripcion: "Fallecido" }
  ],

  interpretar: function (valor) {
    const nivel = this.niveles.find((n) => n.valor === valor);
    if (!nivel) return null;

    let categoria;
    if (valor <= 1) categoria = "Resultado funcional favorable / independencia funcional";
    else if (valor <= 2) categoria = "Independencia funcional con limitaciones leves";
    else if (valor <= 5) categoria = "Dependencia funcional (requiere algún grado de asistencia)";
    else categoria = "Desenlace fatal";

    return { valor, descripcion: nivel.descripcion, categoria };
  }
};

if (typeof escalasNeurologia !== "undefined") {
  escalasNeurologia.push(escalaRankin);
}
