/* ============================================================
   MASA — Mann Assessment of Swallowing Ability (2002)
   Especialidad: Terapia del Lenguaje / Fonoaudiología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   24 ítems con puntuación ponderada variable por ítem (0-2-5-8-10
   o 0-5-10-15-20 según la estructura), evaluando el mecanismo
   deglutorio completo. Clasificación DUAL: severidad de disfagia +
   riesgo de aspiración (variables independientes entre sí).

   ⚠️ INCONSISTENCIA DETECTADA Y VERIFICADA CON CÁLCULO:
   El documento declara "puntuación máxima de 200 puntos", pero
   sumando el máximo declarado de cada uno de los 24 ítems tal como
   están descritos, el total real es 240, no 200 (diferencia de 40
   puntos). A diferencia del caso del WAB (donde sí pude identificar
   con certeza qué corregir), aquí NO hay forma de saber cuáles de
   los 24 ítems tienen un valor de puntos mal transcrito sin el
   manual oficial de Mann — así que NO se fabricó una corrección.
   Se implementó con los valores literales de cada ítem tal como
   vienen en el documento, y el máximo se calcula de forma DINÁMICA
   (240), no se fuerza a 200. Los cortes de clasificación (139, 167,
   177, 178 / 170, 180) se dejaron tal cual, ya que fueron diseñados
   para una escala de 200 — deben validarse contra el manual oficial
   antes de usarse en producción con esta discrepancia sin resolver.
   ============================================================ */

const escalaMASA = {
  id: "masa",
  nombre: "MASA (Mann Assessment of Swallowing Ability)",
  especialidad: "terapia-lenguaje",
  descripcion: "Evalúa cuantitativamente los componentes anatomofisiológicos e integradores del mecanismo deglutorio, y estima el riesgo de aspiración, mediante 24 ítems.",
  puntajeMaximoDocumentado: 200,
  notaDiscrepancia: "El máximo real sumando los 24 ítems da 240, no 200 como declara el documento fuente. Ver nota superior — no se fabricó una corrección sin el manual oficial.",

  items: [
    { id: "m1", nombre: "Alerta", opciones: [{ valor: 10, label: "10 - Completamente alerta" }, { valor: 8, label: "8 - Somnoliento/Fácil despertar" }, { valor: 5, label: "5 - Estuporoso/Despertar con estímulo vigoroso" }, { valor: 2, label: "2 - Comatoso" }] },
    { id: "m2", nombre: "Cooperación", opciones: [{ valor: 10, label: "10 - Altamente cooperativo" }, { valor: 5, label: "5 - Cooperación intermitente/Requiere pistas" }, { valor: 0, label: "0 - No coopera o incapaz de seguir instrucciones" }] },
    { id: "m3", nombre: "Lenguaje", opciones: [{ valor: 10, label: "10 - Normal/Sin afasia" }, { valor: 8, label: "8 - Afasia leve" }, { valor: 5, label: "5 - Afasia moderada" }, { valor: 2, label: "2 - Afasia severa/Ausencia de lenguaje" }] },
    { id: "m4", nombre: "Comprensión Auditiva", opciones: [{ valor: 10, label: "10 - Sigue comandos complejos" }, { valor: 5, label: "5 - Sigue solo comandos simples de un paso" }, { valor: 0, label: "0 - Sin comprensión analítica" }] },
    { id: "m5", nombre: "Disartria", opciones: [{ valor: 10, label: "10 - Habla normal" }, { valor: 5, label: "5 - Disartria leve/moderada" }, { valor: 0, label: "0 - Disartria severa/Anartria" }] },
    { id: "m6", nombre: "Apraxia Oral", opciones: [{ valor: 10, label: "10 - Sin apraxia" }, { valor: 5, label: "5 - Apraxia leve (titubeo gestual)" }, { valor: 0, label: "0 - Apraxia severa" }] },
    { id: "m7", nombre: "Salivación", opciones: [{ valor: 10, label: "10 - Normal" }, { valor: 5, label: "5 - Sialorrea (exceso de saliva)" }, { valor: 0, label: "0 - Sequedad extrema (xerostomía)" }] },
    { id: "m8", nombre: "Línea Labial", opciones: [{ valor: 10, label: "10 - Cierre simétrico y fuerte" }, { valor: 5, label: "5 - Debilidad unilateral leve" }, { valor: 0, label: "0 - Incompetencia labial total" }] },
    { id: "m9", nombre: "Movimiento Mandibular", opciones: [{ valor: 5, label: "5 - Movimiento simétrico y fuerza normal" }, { valor: 2, label: "2 - Desviación o rango limitado" }, { valor: 0, label: "0 - Incapacidad de apertura o cierre contra resistencia" }] },
    { id: "m10", nombre: "Reflejo Palatino", opciones: [{ valor: 10, label: "10 - Elevación simétrica del velo" }, { valor: 5, label: "5 - Elevación asimétrica/debilidad unilateral" }, { valor: 0, label: "0 - Sin movimiento palatino" }] },
    { id: "m11", nombre: "Fuerza Lingual", opciones: [{ valor: 10, label: "10 - Rango total y fuerza simétrica" }, { valor: 8, label: "8 - Debilidad leve unilateral" }, { valor: 5, label: "5 - Rango limitado" }, { valor: 2, label: "2 - Movimiento mínimo o fasciculaciones" }] },
    { id: "m12", nombre: "Reflejo Nauseoso", opciones: [{ valor: 5, label: "5 - Presente y normal" }, { valor: 2, label: "2 - Disminuido/Hiporreactivo" }, { valor: 0, label: "0 - Ausente" }] },
    { id: "m13", nombre: "Tos Voluntaria", opciones: [{ valor: 10, label: "10 - Fuerte y efectiva" }, { valor: 5, label: "5 - Débil/Bovina" }, { valor: 0, label: "0 - Ausente" }] },
    { id: "m14", nombre: "Calidad de la Voz", opciones: [{ valor: 10, label: "10 - Normal" }, { valor: 5, label: "5 - Voz húmeda, ronca o disfónica" }, { valor: 0, label: "0 - Afonía total" }] },
    { id: "m15", nombre: "Tránsito Oral", opciones: [{ valor: 10, label: "10 - Normal (<1 segundo)" }, { valor: 8, label: "8 - Retraso leve" }, { valor: 5, label: "5 - Tránsito desorganizado/Residuos orales" }, { valor: 2, label: "2 - Mínima propulsión" }] },
    { id: "m16", nombre: "Limpieza Oral", opciones: [{ valor: 5, label: "5 - Limpieza completa de la cavidad" }, { valor: 2, label: "2 - Residuos en surcos o lengua" }, { valor: 0, label: "0 - Estasis severo del bolo" }] },
    { id: "m17", nombre: "Inicio de la Deglución Faríngea", opciones: [{ valor: 10, label: "10 - Inmediato (palpación de elevación hioidea)" }, { valor: 5, label: "5 - Retraso evidente (>2 segundos)" }, { valor: 0, label: "0 - Ausente" }] },
    { id: "m18", nombre: "Elevación Laríngea", opciones: [{ valor: 10, label: "10 - Elevación completa y normal" }, { valor: 5, label: "5 - Elevación parcial o reducida" }, { valor: 0, label: "0 - Ausente" }] },
    { id: "m19", nombre: "Tos Deglutoria", opciones: [{ valor: 10, label: "10 - Sin tos espontánea" }, { valor: 5, label: "5 - Tos inmediata al tragar" }, { valor: 0, label: "0 - Tos retrasada o ahogo severo" }] },
    { id: "m20", nombre: "Estridor Post-Deglución", opciones: [{ valor: 5, label: "5 - Ausente/Respiración limpia" }, { valor: 2, label: "2 - Estridor inspiratorio leve" }, { valor: 0, label: "0 - Estridor marcado" }] },
    { id: "m21", nombre: "Voz Húmeda Post-Deglución", opciones: [{ valor: 10, label: "10 - Sin cambios/Voz limpia" }, { valor: 5, label: "5 - Cambios evidentes a voz húmeda o \"gorgoteante\"" }, { valor: 0, label: "0 - Incapacidad para fonar de forma limpia" }] },
    { id: "m22", nombre: "Fase Faríngea General", opciones: [{ valor: 10, label: "10 - Ejecución perfecta" }, { valor: 5, label: "5 - Sospecha de residuo faríngeo por múltiples degluciones" }, { valor: 0, label: "0 - Falla masiva" }] },
    { id: "m23", nombre: "Juicio Clínico — Disfagia", opciones: [{ valor: 20, label: "20 - Sin signos de disfagia" }, { valor: 15, label: "15 - Disfagia leve" }, { valor: 10, label: "10 - Disfagia moderada" }, { valor: 5, label: "5 - Disfagia severa" }] },
    { id: "m24", nombre: "Juicio Clínico — Aspiración", opciones: [{ valor: 20, label: "20 - Sin riesgo aparente" }, { valor: 15, label: "15 - Riesgo bajo" }, { valor: 10, label: "10 - Riesgo moderado" }, { valor: 5, label: "5 - Alto riesgo de aspiración clínica o silente" }] }
  ],

  // ---------- Máximo real calculado dinámicamente (ver nota de discrepancia) ----------
  calcularMaximoReal: function () {
    return this.items.reduce((acc, item) => acc + item.opciones[0].valor, 0);
  },

  // ---------- Eje A: Severidad de disfagia ----------
  clasificarSeveridadDisfagia: function (puntajeTotal) {
    if (puntajeTotal >= 178) return "Normal";
    if (puntajeTotal >= 168) return "Déficit Leve";
    if (puntajeTotal >= 139) return "Déficit Moderado";
    return "Déficit Severo"; // <139
  },

  // ---------- Eje B: Riesgo de aspiración ----------
  clasificarRiesgoAspiracion: function (puntajeTotal) {
    if (puntajeTotal >= 180) return "Riesgo Bajo";
    if (puntajeTotal >= 170) return "Riesgo Moderado";
    return "Riesgo Alto"; // <170
  },

  // ---------- Función de cálculo consolidada (equivalente al TypeScript entregado) ----------
  calcularMASA: function (respuestas) {
    const valores = this.items.map((item) => respuestas[item.id]);
    if (valores.some((v) => typeof v !== "number")) {
      throw new Error("El vector de reactivos del MASA debe contener los 24 ítems completos.");
    }

    const puntajeTotal = valores.reduce((acc, v) => acc + v, 0);
    const severidadDisfagia = this.clasificarSeveridadDisfagia(puntajeTotal);
    const riesgoAspiracion = this.clasificarRiesgoAspiracion(puntajeTotal);

    let alertaClinica = "Mecanismo deglutorio seguro y estable.";
    if (riesgoAspiracion === "Riesgo Alto" || severidadDisfagia === "Déficit Severo") {
      alertaClinica = "🚨 CRÍTICO: Alto riesgo de aspiración y/o disfagia severa detectados. Se sugiere suspensión inmediata de la vía oral por seguridad e interconsulta para Videofluoroscopia.";
    } else if (riesgoAspiracion === "Riesgo Moderado") {
      alertaClinica = "⚠️ PRECAUCIÓN: Riesgo de aspiración moderado. Se recomienda alimentación bajo estricta supervisión y uso de consistencias adaptadas.";
    }

    return { puntajeTotal, maximoReal: this.calcularMaximoReal(), severidadDisfagia, riesgoAspiracion, alertaClinica };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaMASA);
}
