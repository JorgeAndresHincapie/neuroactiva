/* ============================================================
   ESCALA DE ASHWORTH MODIFICADA (MAS)
   Especialidad: Fisioterapia
   ============================================================
   Evalúa espasticidad muscular mediante resistencia al
   estiramiento pasivo. Escala de 6 niveles (0, 1, 1+, 2, 3, 4) —
   ítem único por grupo muscular evaluado, aplicable a varios
   grupos musculares en la misma sesión.
   ============================================================ */

const escalaAshworth = {
  id: "ashworth-modificada",
  nombre: "Escala de Ashworth Modificada (MAS)",
  especialidad: "fisioterapia",
  descripcion: "Evalúa el grado de espasticidad muscular mediante la resistencia percibida al estiramiento pasivo de una articulación. Se aplica por grupo muscular (puede evaluarse varios en la misma sesión).",

  opciones: [
    { valor: 0, label: "0 - Sin aumento del tono muscular" },
    { valor: 1, label: "1 - Ligero aumento del tono, con detención mínima al final del arco de movimiento" },
    { valor: 1.5, label: "1+ - Ligero aumento del tono, con detención en menos de la mitad del arco de movimiento restante" },
    { valor: 2, label: "2 - Aumento más marcado del tono en la mayor parte del arco, pero la parte afectada se mueve fácilmente" },
    { valor: 3, label: "3 - Considerable aumento del tono; el movimiento pasivo es difícil" },
    { valor: 4, label: "4 - Parte afectada rígida en flexión o extensión (no se puede movilizar)" }
  ],

  gruposMuscularesComunes: [
    "Flexores de codo", "Extensores de codo", "Flexores de muñeca", "Extensores de muñeca",
    "Flexores de cadera", "Extensores de cadera", "Aductores de cadera",
    "Flexores de rodilla", "Extensores de rodilla", "Flexores plantares de tobillo (gastrocnemio/sóleo)"
  ],

  interpretarValor: function (valor) {
    const opcion = this.opciones.find((o) => o.valor === valor);
    return opcion ? opcion.label : null;
  },

  // ---------- Registro de evaluación (varios grupos musculares en una sesión) ----------
  // respuestas: { "flexores_codo_derecho": 1.5, "extensores_rodilla_izq": 2, ... }
  calcularPerfil: function (respuestas) {
    const perfil = {};
    Object.entries(respuestas).forEach(([grupo, valor]) => {
      if (typeof valor === "number") {
        perfil[grupo] = { valor, interpretacion: this.interpretarValor(valor) };
      }
    });
    return perfil;
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaAshworth);
}
