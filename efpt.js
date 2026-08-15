/* ============================================================
   EFPT — Executive Function Performance Test
   Especialidad: Terapia Ocupacional / Neuropsicología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Matriz de 4 tareas x 5 funciones ejecutivas = 20 celdas, escala
   0-5 por celda (¡OJO: aquí 0=mejor desempeño, 5=peor — al revés
   que la mayoría de las demás escalas del banco!).
   Rango por tarea: 0-25. Rango por función: 0-20. Total: 0-100.
   ============================================================ */

function opcionesEFPT() {
  return [
    { valor: 0, label: "0 - Independiente: no requiere asistencia física ni verbal" },
    { valor: 1, label: "1 - Pista Verbal: guía o recordatorio oral general (máx. 2 pistas por paso)" },
    { valor: 2, label: "2 - Pista Gestual/Visual: el terapeuta señala o usa gestos sin tocar los materiales" },
    { valor: 3, label: "3 - Asistencia Directa: el terapeuta dice exactamente qué hacer o entrega el objeto en la mano" },
    { valor: 4, label: "4 - Asistencia Física: el terapeuta realiza parte de la acción física por el paciente" },
    { valor: 5, label: "5 - Incapaz: el terapeuta asume la tarea por completo o la detiene por riesgo de seguridad" }
  ];
}

const escalaEFPT = {
  id: "efpt",
  nombre: "EFPT (Executive Function Performance Test)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa 5 funciones ejecutivas mientras el paciente ejecuta 4 tareas cotidianas reales. A diferencia de la mayoría de escalas, un puntaje MÁS ALTO indica MAYOR déficit (0=independiente, 5=incapaz).",
  puntajeMaximo: 100,
  notaDireccion: "IMPORTANTE: en esta escala 0 = mejor desempeño y 100 = peor (dependencia total) — dirección inversa a la mayoría de las demás escalas del banco.",

  tareas: [
    { id: "t1", nombre: "T1. Preparación de avena (Cooking)", descripcion: "Seguir instrucciones escritas para cocinar avena en la estufa o microondas" },
    { id: "t2", nombre: "T2. Uso del teléfono (Telephone)", descripcion: "Buscar un número específico en una agenda y realizar una llamada simulada" },
    { id: "t3", nombre: "T3. Gestión de la medicación (Medication)", descripcion: "Leer etiquetas de tres frascos falsos y organizar la toma diaria según una receta" },
    { id: "t4", nombre: "T4. Pago de cuentas (Bill Paying)", descripcion: "Calcular el balance de una chequera, pagar dos cuentas con cheques ficticios y registrar el saldo" }
  ],

  funciones: [
    { id: "f1", nombre: "F1. Iniciación", descripcion: "Capacidad para comenzar la tarea física o mentalmente de forma autónoma" },
    { id: "f2", nombre: "F2. Organización", descripcion: "Capacidad para reunir, disponer y manejar los materiales necesarios en el espacio" },
    { id: "f3", nombre: "F3. Secuenciación", descripcion: "Capacidad para ejecutar los pasos en el orden cronológico y lógico correcto" },
    { id: "f4", nombre: "F4. Juicio y Seguridad", descripcion: "Capacidad para evitar peligros y tomar decisiones seguras durante la actividad" },
    { id: "f5", nombre: "F5. Finalización", descripcion: "Capacidad para concluir la tarea de forma correcta sin sobre-ejecutar o dejarla incompleta" }
  ],

  opciones: opcionesEFPT(),

  // ---------- Clasificación clínica (0=mejor, 100=peor) ----------
  clasificar: function (total) {
    if (total === 0) return "Independencia ejecutiva absoluta: apto para retorno a vida comunitaria y laboral compleja sin supervisión";
    if (total <= 20) return "Déficit Ejecutivo Leve: suele atascarse en organización o secuenciación; se beneficia de listas de verificación o calendarios digitales";
    if (total <= 50) return "Déficit Ejecutivo Moderado: requiere soporte intermitente o pistas directas; supervisión parcial en actividades de riesgo (cocina, finanzas)";
    return "Déficit Ejecutivo Severo / Dependencia: incapacidad para resolver problemas o mantener la seguridad; exige cuidador permanente y entorno estructurado"; // 51-100
  },

  // ---------- Función de cálculo ----------
  // respuestas: { "t1-f1": 2, "t1-f2": 0, ..., "t4-f5": 3 }  (16 celdas máx si están las 4 tareas x 5 funciones = 20 celdas)
  calcularPuntaje: function (respuestas) {
    const celda = (tareaId, funcionId) => respuestas[`${tareaId}-${funcionId}`];

    const totalesPorTarea = {};
    this.tareas.forEach((t) => {
      let subtotal = 0;
      this.funciones.forEach((f) => {
        const v = celda(t.id, f.id);
        if (typeof v === "number") subtotal += v;
      });
      totalesPorTarea[t.id] = subtotal;
    });

    const totalesPorFuncion = {};
    this.funciones.forEach((f) => {
      let subtotal = 0;
      this.tareas.forEach((t) => {
        const v = celda(t.id, f.id);
        if (typeof v === "number") subtotal += v;
      });
      totalesPorFuncion[f.id] = subtotal;
    });

    const total = Object.values(totalesPorTarea).reduce((a, b) => a + b, 0);

    return {
      totalesPorTarea,        // cada una: rango 0-25
      totalesPorFuncion,      // cada una: rango 0-20
      total,                  // rango 0-100
      puntajeMaximo: this.puntajeMaximo,
      clasificacion: this.clasificar(total)
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaEFPT);
}
