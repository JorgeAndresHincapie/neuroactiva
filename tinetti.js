/* ============================================================
   ESCALA DE TINETTI — Performance-Oriented Mobility Assessment (POMA)
   Especialidad: Fisioterapia (también usada en Neuropsicología/TO)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   ⚠️ INCONSISTENCIA DETECTADA EN EL DOCUMENTO FUENTE:
   La sección de Marcha se documenta con "Rango de 0 a 12 puntos",
   pero sumando los ítems tal como están descritos (M1:1, M2 derecho:1,
   M2 izquierdo:1, M3:1, M4:1, M5:2, M6:2, M7:1) el máximo real es 10,
   no 12 — faltan 2 puntos sin ítem que los explique. La sección de
   Equilibrio SÍ cuadra exactamente en 16 (validado), lo que confirma
   que el método de conteo es correcto y el problema está en la
   sección de Marcha del documento original.
   Este archivo calcula el máximo de forma DINÁMICA a partir de las
   opciones reales de cada ítem (no lo fija en 28), para que el
   resultado sea siempre matemáticamente consistente con el
   formulario. Si tienes la versión oficial completa del POMA con el
   ítem faltante, avisa para corregirlo.
   ============================================================ */

const escalaTinetti = {
  id: "tinetti-poma",
  nombre: "Escala de Tinetti (Performance-Oriented Mobility Assessment)",
  especialidad: "fisioterapia",
  descripcion: "Indicador gold standard para predecir caídas mecánicas y evaluar la marcha y el equilibrio.",

  seccionEquilibrio: {
    nombre: "Sección A: Subescala de Equilibrio",
    items: [
      { id: "e1", numero: 1, texto: "Equilibrio sentado", opciones: [{ valor: 0, label: "0 - Se inclina/desliza" }, { valor: 1, label: "1 - Seguro y firme" }] },
      { id: "e2", numero: 2, texto: "Levantarse", opciones: [{ valor: 0, label: "0 - Incapaz sin ayuda" }, { valor: 1, label: "1 - Capaz usando los brazos" }, { valor: 2, label: "2 - Capaz sin usar brazos" }] },
      { id: "e3", numero: 3, texto: "Intentos de levantarse", opciones: [{ valor: 0, label: "0 - Incapaz" }, { valor: 1, label: "1 - Capaz pero requiere más de 1 intento" }, { valor: 2, label: "2 - Capaz al primer intento" }] },
      { id: "e4", numero: 4, texto: "Equilibrio en bipedestación inmediata (primeros 5 segundos)", opciones: [{ valor: 0, label: "0 - Inestable" }, { valor: 1, label: "1 - Estable con andador/apoyo" }, { valor: 2, label: "2 - Estable sin ningún apoyo" }] },
      { id: "e5", numero: 5, texto: "Equilibrio en bipedestación prolongada", opciones: [{ valor: 0, label: "0 - Inestable" }, { valor: 1, label: "1 - Apoya pies separados o usa bastón" }, { valor: 2, label: "2 - Base estrecha sin apoyos" }] },
      { id: "e6", numero: 6, texto: "Empujón (pies juntos, el terapeuta empuja levemente 3 veces en el esternón)", opciones: [{ valor: 0, label: "0 - Empieza a caerse" }, { valor: 1, label: "1 - Oscila pero se recupera solo" }, { valor: 2, label: "2 - Firme y estable" }] },
      { id: "e7", numero: 7, texto: "Ojos cerrados (en la posición E6)", opciones: [{ valor: 0, label: "0 - Inestable" }, { valor: 1, label: "1 - Estable" }] },
      { id: "e8", numero: 8, texto: "Giro de 360 grados", opciones: [{ valor: 0, label: "0 - Pasos discontinuos/inestables" }, { valor: 1, label: "1 - Pasos continuos pero rígidos" }, { valor: 2, label: "2 - Seguro y fluido" }] },
      { id: "e9", numero: 9, texto: "Sentarse", opciones: [{ valor: 0, label: "0 - Inseguro/se deja caer bruscamente" }, { valor: 1, label: "1 - Usa los brazos de forma controlada" }, { valor: 2, label: "2 - Seguro y suave" }] }
    ]
  },

  seccionMarcha: {
    nombre: "Sección B: Subescala de Marcha",
    instruccion: "El paciente camina por un pasillo a paso normal y luego a paso rápido.",
    items: [
      { id: "m1", numero: 1, texto: "Iniciación de la marcha (inmediatamente después de decir 'camine')", opciones: [{ valor: 0, label: "0 - Duda o requiere varios intentos" }, { valor: 1, label: "1 - Inicia sin vacilación" }] },
      { id: "m2d", numero: "2 (derecho)", texto: "Longitud y altura del paso — Pie derecho", opciones: [{ valor: 0, label: "0 - No sobrepasa al pie izquierdo / no se separa del suelo" }, { valor: 1, label: "1 - Sobrepasa al izquierdo y se eleva correctamente" }] },
      { id: "m2i", numero: "2 (izquierdo)", texto: "Longitud y altura del paso — Pie izquierdo", opciones: [{ valor: 0, label: "0 - No sobrepasa al pie derecho / no se separa del suelo" }, { valor: 1, label: "1 - Sobrepasa al derecho y se eleva correctamente" }] },
      { id: "m3", numero: 3, texto: "Simetría del paso", opciones: [{ valor: 0, label: "0 - La longitud de los pasos derecho e izquierdo es diferente" }, { valor: 1, label: "1 - Los pasos son iguales" }] },
      { id: "m4", numero: 4, texto: "Continuidad de los pasos", opciones: [{ valor: 0, label: "0 - Detiene o interrumpe la marcha entre pasos" }, { valor: 1, label: "1 - Marcha fluida y continua" }] },
      { id: "m5", numero: 5, texto: "Trayectoria (desviación en 3 metros)", opciones: [{ valor: 0, label: "0 - Desviación severa" }, { valor: 1, label: "1 - Desviación leve o usa ayudas" }, { valor: 2, label: "2 - Línea recta perfecta sin apoyos" }] },
      { id: "m6", numero: 6, texto: "Estabilidad del tronco", opciones: [{ valor: 0, label: "0 - Balanceo marcado o requiere andador" }, { valor: 1, label: "1 - No se balancea pero flexiona rodillas o abre los brazos" }, { valor: 2, label: "2 - Tronco firme, braceo normal y sin apoyos" }] },
      { id: "m7", numero: 7, texto: "Postura al caminar (base de sustentación)", opciones: [{ valor: 0, label: "0 - Los talones se separan lateralmente" }, { valor: 1, label: "1 - Los talones casi se tocan al caminar" }] }
    ]
  },

  // ---------- Clasificación de riesgo de caídas ----------
  clasificarRiesgo: function (total) {
    if (total < 19) return "Riesgo ALTO de caídas (probabilidad de caída multiplicada por 5)";
    if (total <= 24) return "Riesgo MODERADO de caídas";
    return "Riesgo BAJO / Normal"; // 25-28 (o hasta el máximo real calculado)
  },

  // ---------- Máximo dinámico (ver nota de inconsistencia arriba) ----------
  calcularMaximoPosible: function () {
    const maxEquilibrio = this.seccionEquilibrio.items.reduce((acc, it) => acc + it.opciones[it.opciones.length - 1].valor, 0);
    const maxMarcha = this.seccionMarcha.items.reduce((acc, it) => acc + it.opciones[it.opciones.length - 1].valor, 0);
    return { maxEquilibrio, maxMarcha, maxTotal: maxEquilibrio + maxMarcha };
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let subtotalEquilibrio = 0;
    this.seccionEquilibrio.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") subtotalEquilibrio += valor;
    });

    let subtotalMarcha = 0;
    this.seccionMarcha.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") subtotalMarcha += valor;
    });

    const total = subtotalEquilibrio + subtotalMarcha;
    const maximos = this.calcularMaximoPosible();

    return {
      subtotalEquilibrio,
      subtotalMarcha,
      total,
      maximoDocumentado: 28, // valor citado en el documento fuente (equilibrio 16 + marcha 12)
      maximoCalculadoReal: maximos.maxTotal, // valor real sumando los ítems dados (actualmente 26)
      clasificacion: this.clasificarRiesgo(total)
    };
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaTinetti);
}
