/* ============================================================
   NIHSS — National Institutes of Health Stroke Scale
   Especialidad: Neurología / ACV (nueva categoría — verificar si
   ya existe en la plataforma o si debe crearse junto con
   escalasNeurologia)
   ============================================================
   Escala neurológica estandarizada para cuantificar la severidad
   de un ACV agudo, mediante 15 ítems (11 numerados, 4 con
   sub-ítems bilaterales). Rango total: 0-42. A MAYOR puntaje,
   MAYOR severidad del déficit neurológico.
   ============================================================ */

const escalaNIHSS = {
  id: "nihss",
  nombre: "NIHSS (National Institutes of Health Stroke Scale)",
  especialidad: "neurologia",
  descripcion: "Escala más usada mundialmente para cuantificar la severidad neurológica de un ACV agudo, guiar decisiones terapéuticas (ej. trombólisis) y monitorizar la evolución del paciente.",
  puntajeMaximo: 42,

  items: [
    {
      id: "1a", numero: "1a", texto: "Nivel de Conciencia",
      opciones: [
        { valor: 0, label: "0 - Alerta" },
        { valor: 1, label: "1 - No alerta, pero se despierta con mínima estimulación" },
        { valor: 2, label: "2 - No alerta, requiere estimulación repetida o dolorosa para responder" },
        { valor: 3, label: "3 - Responde solo con reflejos motores/autonómicos, o no responde (flácido, arreflexia)" }
      ]
    },
    {
      id: "1b", numero: "1b", texto: "Preguntas sobre Nivel de Conciencia (mes actual y edad)",
      opciones: [
        { valor: 0, label: "0 - Responde ambas correctamente" },
        { valor: 1, label: "1 - Responde una correctamente" },
        { valor: 2, label: "2 - No responde ninguna correctamente" }
      ]
    },
    {
      id: "1c", numero: "1c", texto: "Órdenes sobre Nivel de Conciencia (abrir/cerrar ojos, cerrar/abrir mano)",
      opciones: [
        { valor: 0, label: "0 - Realiza ambas órdenes correctamente" },
        { valor: 1, label: "1 - Realiza una orden correctamente" },
        { valor: 2, label: "2 - No realiza ninguna orden correctamente" }
      ]
    },
    {
      id: "2", numero: 2, texto: "Mejor Mirada Conjugada (horizontal)",
      opciones: [
        { valor: 0, label: "0 - Normal" },
        { valor: 1, label: "1 - Parálisis parcial de la mirada" },
        { valor: 2, label: "2 - Desviación forzada, o paresia total de la mirada no vencida con maniobra oculocefálica" }
      ]
    },
    {
      id: "3", numero: 3, texto: "Campos Visuales",
      opciones: [
        { valor: 0, label: "0 - Sin déficit campimétrico" },
        { valor: 1, label: "1 - Hemianopsia parcial" },
        { valor: 2, label: "2 - Hemianopsia completa" },
        { valor: 3, label: "3 - Hemianopsia bilateral (ceguera cortical incluida)" }
      ]
    },
    {
      id: "4", numero: 4, texto: "Paresia Facial",
      opciones: [
        { valor: 0, label: "0 - Movimiento normal simétrico" },
        { valor: 1, label: "1 - Paresia menor (asimetría al sonreír)" },
        { valor: 2, label: "2 - Paresia parcial (parálisis total o casi total de la porción inferior de la cara)" },
        { valor: 3, label: "3 - Parálisis completa uni o bilateral (ausencia de movimiento en cara superior e inferior)" }
      ]
    },
    {
      id: "5a", numero: "5a", texto: "Motor — Brazo Izquierdo",
      opciones: opcionesMotorNIHSS()
    },
    {
      id: "5b", numero: "5b", texto: "Motor — Brazo Derecho",
      opciones: opcionesMotorNIHSS()
    },
    {
      id: "6a", numero: "6a", texto: "Motor — Pierna Izquierda",
      opciones: opcionesMotorNIHSS()
    },
    {
      id: "6b", numero: "6b", texto: "Motor — Pierna Derecha",
      opciones: opcionesMotorNIHSS()
    },
    {
      id: "7", numero: 7, texto: "Ataxia de Miembros (dedo-nariz, talón-rodilla)",
      opciones: [
        { valor: 0, label: "0 - Ausente" },
        { valor: 1, label: "1 - Presente en una extremidad" },
        { valor: 2, label: "2 - Presente en dos extremidades" }
      ]
    },
    {
      id: "8", numero: 8, texto: "Sensibilidad (pinchazo)",
      opciones: [
        { valor: 0, label: "0 - Normal, sin pérdida sensitiva" },
        { valor: 1, label: "1 - Pérdida sensitiva leve a moderada" },
        { valor: 2, label: "2 - Pérdida sensitiva severa o total" }
      ]
    },
    {
      id: "9", numero: 9, texto: "Mejor Lenguaje",
      opciones: [
        { valor: 0, label: "0 - Sin afasia, normal" },
        { valor: 1, label: "1 - Afasia leve a moderada" },
        { valor: 2, label: "2 - Afasia severa" },
        { valor: 3, label: "3 - Mudo, afasia global, sin habla ni comprensión útil" }
      ]
    },
    {
      id: "10", numero: 10, texto: "Disartria",
      opciones: [
        { valor: 0, label: "0 - Normal" },
        { valor: 1, label: "1 - Disartria leve a moderada" },
        { valor: 2, label: "2 - Disartria severa, ininteligible o anartria" }
      ]
    },
    {
      id: "11", numero: 11, texto: "Extinción e Inatención (negligencia)",
      opciones: [
        { valor: 0, label: "0 - Sin anormalidad" },
        { valor: 1, label: "1 - Inatención o extinción a estimulación bimodal en una modalidad" },
        { valor: 2, label: "2 - Hemi-inatención severa o extinción a más de una modalidad" }
      ]
    }
  ],

  clasificar: function (total) {
    if (total === 0) return "Sin síntomas de ACV";
    if (total <= 4) return "ACV Leve (Minor Stroke)";
    if (total <= 15) return "ACV Moderado";
    if (total <= 20) return "ACV Moderado a Severo";
    return "ACV Severo"; // 21-42
  },

  calcularPuntaje: function (respuestas) {
    const total = this.items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);
    return { total, puntajeMaximo: this.puntajeMaximo, clasificacion: this.clasificar(total) };
  }
};

function opcionesMotorNIHSS() {
  return [
    { valor: 0, label: "0 - Sin caída, mantiene la extremidad 10s (brazo) o 5s (pierna)" },
    { valor: 1, label: "1 - Claudica antes de completar el tiempo, sin llegar a tocar la cama/camilla" },
    { valor: 2, label: "2 - Algún esfuerzo contra gravedad, pero la extremidad cae hasta la cama/camilla" },
    { valor: 3, label: "3 - Sin esfuerzo contra gravedad, la extremidad cae de inmediato" },
    { valor: 4, label: "4 - Ningún movimiento" }
  ];
}

if (typeof escalasNeurologia !== "undefined") {
  escalasNeurologia.push(escalaNIHSS);
}
