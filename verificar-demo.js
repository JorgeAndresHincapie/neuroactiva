/*
  verificar-demo.js
  ------------------------------------------------------------
  Verificación de acceso demo. Se ejecuta justo después de leer
  el documento del usuario en Firestore, en el flujo de LOGIN
  (normalmente en index.html, después de signInWithEmailAndPassword
  y de obtener snap.data()).

  EJEMPLO DE INTEGRACIÓN en tu función de login actual:

    const snap = await getDoc(doc(db, 'usuarios', user.uid));
    const datosUsuario = snap.data();

    // <<< AGREGAR AQUÍ >>>
    const chequeo = verificarAccesoDemo(datosUsuario);
    if (!chequeo.permitido) {
      await signOut(auth);
      mostrarError(chequeo.mensaje);
      return;
    }
    // <<< FIN AGREGAR >>>

    // ... continúa el flujo normal, redirige según datosUsuario.rol
*/

function verificarAccesoDemo(datosUsuario) {
  // Si el plan es 'activo' (suscripción pagada), siempre permite el acceso
  if (!datosUsuario.plan || datosUsuario.plan === "activo") {
    return { permitido: true };
  }

  // Si es plan 'demo', verificar la fecha de vencimiento
  if (datosUsuario.plan === "demo") {
    if (!datosUsuario.fechaVencimientoDemo) {
      // Por seguridad, si no tiene fecha registrada, se permite el acceso
      return { permitido: true };
    }

    const ahora = new Date();
    const vencimiento = new Date(datosUsuario.fechaVencimientoDemo);

    if (ahora > vencimiento) {
      const diasVencido = Math.floor((ahora - vencimiento) / (1000 * 60 * 60 * 24));
      return {
        permitido: false,
        mensaje: `Tu periodo de prueba terminó hace ${diasVencido} día(s). Contacta al administrador para activar tu suscripción.`,
      };
    }

    // Aún dentro del periodo demo — calcular días restantes para avisar
    const diasRestantes = Math.ceil((vencimiento - ahora) / (1000 * 60 * 60 * 24));
    return {
      permitido: true,
      avisoDiasRestantes: diasRestantes, // úsalo para mostrar un banner "Te quedan X días de prueba"
    };
  }

  // Cualquier otro valor de 'plan' no reconocido: permitir por defecto
  return { permitido: true };
}

// Función auxiliar opcional para mostrar el banner de días restantes
// dentro de cualquier dashboard (admin, terapeuta o paciente)
function mostrarBannerDemo(diasRestantes) {
  if (diasRestantes === undefined) return;
  const color = diasRestantes <= 3 ? "#C53030" : "#C05621";
  const bg = diasRestantes <= 3 ? "#FFF5F5" : "#FFF3EB";
  const banner = document.createElement("div");
  banner.style.cssText = `background:${bg};color:${color};border:1.5px solid ${color}40;border-radius:8px;padding:.7rem 1rem;font-size:.8rem;margin-bottom:1.2rem;text-align:center`;
  banner.innerHTML = `⏳ <strong>Periodo de prueba:</strong> te ${diasRestantes === 1 ? "queda 1 día" : "quedan " + diasRestantes + " días"}. Contacta al administrador para activar tu suscripción.`;
  const main = document.querySelector("main") || document.body;
  main.insertBefore(banner, main.firstChild);
}
