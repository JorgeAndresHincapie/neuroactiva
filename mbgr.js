/* ============================================================
   PROTOCOLO MBGR — Marchesan, Berretin-Felix, Genaro y Rehder
   Especialidad: Terapia del Lenguaje / Motricidad Orofacial
   ============================================================
   Escala INVERTIDA: 0=Normal, valores mayores=más patología.
   Subtotales separados (Anatomía vs. Funciones) para no diluir
   el diagnóstico. NOTA: el documento da solo 4 ítems de ejemplo
   por componente (postura_labios, freno_lingual, tonus_masetero,
   paladar_duro / respiracion_modo, masticacion_patron,
   deglucion_escape, fono_distorsion) — el protocolo oficial completo
   tiene más reactivos; se estructura con los dados, ampliable.
   ============================================================ */

const escalaMBGR = {
  id: "mbgr",
  nombre: "Protocolo MBGR (Motricidad Orofacial)",
  especialidad: "terapia-lenguaje",
  descripcion: "Estándar de oro en Motricidad Orofacial y Terapia Miofuncional en Latinoamérica. Evalúa estructuras anatómicas y funciones orofaciales.",
  notaAlcance: "El documento fuente da 4 ítems de ejemplo por componente; el protocolo oficial completo tiene más reactivos — estructura ampliable.",

  opciones: [
    { valor: 0, label: "0 - Normal" },
    { valor: 1, label: "1 - Alteración leve" },
    { valor: 2, label: "2 - Alteración moderada" },
    { valor: 3, label: "3 - Alteración severa" }
  ],

  componentes: {
    anatomia: {
      nombre: "Anatomía",
      items: [
        { id: "postura_labios", texto: "Postura de labios" },
        { id: "freno_lingual", texto: "Frenillo lingual" },
        { id: "tonus_masetero", texto: "Tono del masetero" },
        { id: "paladar_duro", texto: "Paladar duro" }
      ]
    },
    funciones: {
      nombre: "Funciones",
      items: [
        { id: "respiracion_modo", texto: "Modo respiratorio" },
        { id: "masticacion_patron", texto: "Patrón de masticación" },
        { id: "deglucion_escape", texto: "Escape en la deglución" },
        { id: "fono_distorsion", texto: "Distorsión fonoarticulatoria" }
      ]
    }
  },

  clasificar: function (total) {
    if (total <= 10) return "Variación anatómica menor sin impacto funcional";
    if (total <= 30) return "Disfunción miofuncional moderada: requiere terapia miofuncional (TMF)";
    return "Disfunción miofuncional severa: alta correlación con respiradores orales crónicos o maloclusiones esqueléticas; interconsulta con Ortodoncia/Otorrinolaringología"; // >30
  },

  calcularPuntaje: function (respuestas) {
    const sumar = (items) => items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);
    const subtotalAnatomia = sumar(this.componentes.anatomia.items);
    const subtotalFunciones = sumar(this.componentes.funciones.items);
    const total = subtotalAnatomia + subtotalFunciones;
    return { subtotalAnatomia, subtotalFunciones, total, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaMBGR);
}
