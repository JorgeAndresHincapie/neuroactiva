/* ============================================================
   ÍNDICE DE LAWTON-BRODY (Actividades Instrumentales de la Vida Diaria)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   8 ítems, cada uno con varias sub-opciones que ya vienen marcadas
   como Independiente (1) o Dependiente (0) — el puntaje del ítem es
   binario, no una escala 0-2 como en Barthel.
   Incluye: ajuste proporcional por datos perdidos (institucionalización)
   y opción de sesgo de género clásico (1969, histórico, desactivado
   por defecto).
   ============================================================ */

const escalaLawtonBrody = {
  id: "lawton-brody",
  nombre: "Índice de Lawton-Brody (Actividades Instrumentales de la Vida Diaria)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa la capacidad para realizar actividades instrumentales complejas (teléfono, compras, finanzas, etc.), necesarias para vivir de forma autónoma en la comunidad.",

  items: [
    {
      id: "lb-telefono", numero: 1, texto: "Capacidad para usar el teléfono",
      opciones: [
        { valor: 1, label: "Utiliza el teléfono por iniciativa propia, busca y marca los números de forma autónoma" },
        { valor: 1, label: "Marca unos cuantos números bien conocidos de memoria o con facilidad" },
        { valor: 1, label: "Contesta el teléfono, pero no es capaz de marcar de forma autónoma" },
        { valor: 0, label: "No es capaz de usar el teléfono en absoluto" }
      ]
    },
    {
      id: "lb-compras", numero: 2, texto: "Hacer compras",
      opciones: [
        { valor: 1, label: "Realiza todas las compras necesarias de forma independiente sin supervisión" },
        { valor: 0, label: "Realiza pequeñas compras de forma independiente, pero necesita compañía para compras grandes" },
        { valor: 0, label: "Necesita que lo acompañen en cualquier intento de compra" },
        { valor: 0, label: "Es completamente incapaz de hacer compras" }
      ]
    },
    {
      id: "lb-comida", numero: 3, texto: "Preparación de la comida",
      opciones: [
        { valor: 1, label: "Organiza, prepara y sirve las comidas por sí mismo de forma correcta y segura" },
        { valor: 0, label: "Prepara las comidas si se le proporcionan los ingredientes necesarios de antemano" },
        { valor: 0, label: "Prepara la comida pero no mantiene una dieta adecuada o requiere supervisión" },
        { valor: 0, label: "Necesita que le preparen y sirvan las comidas por completo" }
      ]
    },
    {
      id: "lb-casa", numero: 4, texto: "Cuidado de la casa / Tareas domésticas",
      opciones: [
        { valor: 1, label: "Mantiene la casa sola o con ayuda regular para trabajos pesados de manera autónoma" },
        { valor: 1, label: "Realiza tareas domésticas ligeras de forma eficiente (lavar platos, hacer la cama)" },
        { valor: 1, label: "Realiza tareas ligeras pero no mantiene un nivel de limpieza aceptable" },
        { valor: 0, label: "Necesita ayuda en todas las labores de la casa y no participa eficientemente" },
        { valor: 0, label: "No participa en ninguna tarea doméstica" }
      ]
    },
    {
      id: "lb-ropa", numero: 5, texto: "Lavado de la ropa",
      opciones: [
        { valor: 1, label: "Lava toda su ropa personal de forma completamente independiente" },
        { valor: 1, label: "Lava prendas pequeñas de forma independiente (ej. ropa interior, calcetines)" },
        { valor: 0, label: "Toda la ropa debe ser lavada y gestionada por un tercero" }
      ]
    },
    {
      id: "lb-transporte", numero: 6, texto: "Uso de medios de transporte",
      opciones: [
        { valor: 1, label: "Viaja de forma independiente en transporte público o conduce su propio vehículo" },
        { valor: 1, label: "Es capaz de organizar sus propios viajes en taxi, pero no usa otro transporte público" },
        { valor: 1, label: "Viaja en transporte público si va acompañado por otra persona" },
        { valor: 0, label: "Solo viaja en taxi o automóvil con auxilio directo y constante de otros" },
        { valor: 0, label: "No viaja en absoluto" }
      ]
    },
    {
      id: "lb-medicacion", numero: 7, texto: "Responsabilidad respecto a su medicación",
      opciones: [
        { valor: 1, label: "Es capaz de tomar su medicación en las dosis y horarios correctos de forma autónoma" },
        { valor: 0, label: "Toma sus medicamentos si se le preparan o dosifican de forma anticipada (pastilleros)" },
        { valor: 0, label: "Es completamente incapaz de hacerse cargo de su propia medicación" }
      ]
    },
    {
      id: "lb-finanzas", numero: 8, texto: "Capacidad para manejar asuntos económicos / Finanzas",
      opciones: [
        { valor: 1, label: "Se encarga de sus asuntos económicos de forma independiente (paga cuentas, va al banco)" },
        { valor: 1, label: "Realiza el manejo diario de dinero efectivo pero necesita ayuda para transacciones grandes" },
        { valor: 0, label: "Incapaz de manejar dinero de forma autónoma" }
      ]
    }
  ],

  // ---------- Función de cálculo (equivalente al motor TypeScript entregado) ----------
  // respuestas: { "lb-telefono": 1, "lb-compras": 0, ... } — usar null u omitir
  // el ítem para marcarlo como "no aplica / no evaluable" (institucionalización)
  // sexo: 'M' | 'F', usarAjusteClasicoGenero: boolean (histórico, 1969, desactivado
  // por defecto en el estándar moderno)
  calcularPuntaje: function (respuestas, sexo, usarAjusteClasicoGenero) {
    const itemsExcluidos = usarAjusteClasicoGenero && sexo === "M"
      ? ["lb-comida", "lb-casa", "lb-ropa"]
      : [];

    let sumaBruta = 0;
    let conteoValidos = 0;

    this.items.forEach((item) => {
      if (itemsExcluidos.includes(item.id)) return;
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        sumaBruta += valor;
        conteoValidos++;
      }
    });

    if (conteoValidos === 0) {
      return { puntajeBruto: 0, puntajeAjustado: 0, dimensionesEvaluadas: 0, maximoPosible: 0, interpretacion: "Datos insuficientes" };
    }

    const maximoEsperado = itemsExcluidos.length > 0 ? 5 : 8;

    // Regla Gold Standard de ajuste proporcional por datos perdidos/institucionales
    const puntajeAjustado = Math.round((sumaBruta / conteoValidos) * maximoEsperado);

    let interpretacion = "";
    if (maximoEsperado === 8) {
      if (puntajeAjustado === 8) interpretacion = "Independencia Total";
      else if (puntajeAjustado >= 6) interpretacion = "Dependencia Leve";
      else if (puntajeAjustado >= 4) interpretacion = "Dependencia Moderada";
      else if (puntajeAjustado >= 2) interpretacion = "Dependencia Severa";
      else interpretacion = "Dependencia Total / Grave";
    } else {
      if (puntajeAjustado === 5) interpretacion = "Independencia Total (Escala de 5)";
      else if (puntajeAjustado === 4) interpretacion = "Dependencia Leve";
      else if (puntajeAjustado >= 2) interpretacion = "Dependencia Moderada";
      else interpretacion = "Dependencia Severa / Total";
    }

    return {
      puntajeBruto: sumaBruta,
      puntajeAjustado,
      dimensionesEvaluadas: conteoValidos,
      maximoPosible: maximoEsperado,
      interpretacion
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaLawtonBrody);
}
