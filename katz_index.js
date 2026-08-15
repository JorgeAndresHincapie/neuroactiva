/* ============================================================
   ESCALA DE KATZ (Índice de Independencia de las ABVD)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   6 ítems binarios (1=Independiente, 0=Dependiente). A diferencia
   de las demás escalas, Katz NO solo suma puntos (0-6) — también
   asigna una CLASE (letra A-H) según un patrón JERÁRQUICO de
   pérdida de funciones (las funciones se pierden en un orden
   típico: primero Baño, luego Vestirse, Inodoro, Movilidad,
   Continencia, y por último Alimentación).
   ============================================================ */

const escalaKatz = {
  id: "katz-index",
  nombre: "Escala de Katz (Índice de Independencia de las ABVD)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa 6 funciones básicas clasificándolas en Independiente/Dependiente, y asigna un grado cualitativo (Clase A-H) según el patrón jerárquico de pérdida de habilidades, ideal para analíticas epidemiológicas.",

  // Orden jerárquico oficial (primero en perderse -> último en perderse)
  ordenJerarquico: ["banio", "vestirse", "inodoro", "movilidad", "continencia", "alimentacion"],

  items: [
    { id: "banio", numero: 1, texto: "Baño", pregunta: "¿Se lava solo todo el cuerpo o necesita ayuda en más de una zona?" },
    { id: "vestirse", numero: 2, texto: "Vestirse", pregunta: "¿Toma la ropa de los cajones y se la coloca de manera autónoma?" },
    { id: "inodoro", numero: 3, texto: "Uso del Inodoro", pregunta: "¿Va al baño, se limpia y se arregla la ropa solo?" },
    { id: "movilidad", numero: 4, texto: "Movilidad / Transferencias", pregunta: "¿Se levanta de la cama o silla y se acuesta de forma autónoma?" },
    { id: "continencia", numero: 5, texto: "Continencia", pregunta: "¿Tiene control total de su micción y defecación?" },
    { id: "alimentacion", numero: 6, texto: "Alimentación", pregunta: "¿Lleva la comida al plato y a la boca solo? (excluye cortar la carne)" }
  ],

  opciones: [
    { valor: 1, label: "1 - Independiente" },
    { valor: 0, label: "0 - Dependiente" }
  ],

  // ---------- Motor lógico de clasificación jerárquica (A-H) ----------
  // respuestas: { banio: 1, vestirse: 1, inodoro: 0, movilidad: 1, continencia: 1, alimentacion: 1 }
  clasificarLetra: function (respuestas) {
    const dependiente = (id) => respuestas[id] === 0;
    const independiente = (id) => respuestas[id] === 1;

    const totalDependientes = this.ordenJerarquico.filter((id) => dependiente(id)).length;

    if (totalDependientes === 0) {
      return { clase: "A", descripcion: "Independiente en las 6 funciones" };
    }
    if (totalDependientes === 6) {
      return { clase: "G", descripcion: "Dependiente en las 6 funciones por completo" };
    }
    if (totalDependientes === 1) {
      return { clase: "B", descripcion: "Independiente en 5 funciones y dependiente en solo 1 de ellas" };
    }
    if (totalDependientes === 2) {
      if (dependiente("banio")) {
        return { clase: "C", descripcion: "Independiente en todas, excepto en el Baño y otra función adicional" };
      }
      return { clase: "H", descripcion: "Dependencia en dos o más funciones que no encajan en la progresión jerárquica exacta (Otros)" };
    }
    if (totalDependientes === 3) {
      if (dependiente("banio") && dependiente("vestirse")) {
        return { clase: "D", descripcion: "Independiente en todas, excepto en Baño, Vestirse y otra función adicional" };
      }
      return { clase: "H", descripcion: "Dependencia en dos o más funciones que no encajan en la progresión jerárquica exacta (Otros)" };
    }
    if (totalDependientes === 4) {
      if (dependiente("banio") && dependiente("vestirse") && dependiente("inodoro")) {
        return { clase: "E", descripcion: "Independiente en todas, excepto en Baño, Vestirse, Uso del Inodoro y otra adicional" };
      }
      return { clase: "H", descripcion: "Dependencia en dos o más funciones que no encajan en la progresión jerárquica exacta (Otros)" };
    }
    if (totalDependientes === 5) {
      if (dependiente("banio") && dependiente("vestirse") && dependiente("inodoro") && dependiente("movilidad")) {
        return { clase: "F", descripcion: "Independiente en todas, excepto en Baño, Vestirse, Uso del Inodoro, Movilidad y otra adicional" };
      }
      return { clase: "H", descripcion: "Dependencia en dos o más funciones que no encajan en la progresión jerárquica exacta (Otros)" };
    }

    // No debería llegar aquí (totalDependientes ya cubre 0-6 arriba)
    return { clase: "H", descripcion: "Patrón no clasificable" };
  },

  // ---------- Función de cálculo consolidada ----------
  calcularResultado: function (respuestas) {
    let puntajeCuantitativo = 0;
    let itemsRespondidos = 0;

    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        puntajeCuantitativo += valor;
        itemsRespondidos++;
      }
    });

    if (itemsRespondidos < this.items.length) {
      return {
        puntajeCuantitativo,
        itemsRespondidos,
        clase: null,
        descripcion: "Faltan ítems por responder — la clasificación jerárquica requiere los 6 ítems completos"
      };
    }

    const resultadoClase = this.clasificarLetra(respuestas);

    return {
      puntajeCuantitativo, // 0 a 6
      itemsRespondidos,
      clase: resultadoClase.clase,
      descripcion: resultadoClase.descripcion
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaKatz);
}
