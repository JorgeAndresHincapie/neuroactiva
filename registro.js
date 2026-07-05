import {
  auth, db,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  doc, setDoc, serverTimestamp
} from './firebase.js';

// ── Elementos del DOM ──────────────────────────────────────────────
const btnRegistro = document.getElementById('btnRegistro');
const btnText     = document.getElementById('btnText');
const spinner     = document.getElementById('spinner');
const errorMsg    = document.getElementById('errorMsg');
const errorText   = document.getElementById('errorText');
const exitoMsg    = document.getElementById('exitoMsg');
const exitoText   = document.getElementById('exitoText');

const inputNombre   = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputEmail    = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputConfirm  = document.getElementById('confirmPassword');
const selectEsp     = document.getElementById('especialidad');

// ── Utilidades ─────────────────────────────────────────────────────
function setLoading(loading) {
  btnRegistro.disabled    = loading;
  spinner.style.display   = loading ? 'block' : 'none';
  btnText.textContent     = loading ? 'Creando cuenta…' : 'Crear cuenta';
}

function showError(msg) {
  errorText.textContent = msg;
  errorMsg.classList.add('visible');
  exitoMsg.classList.remove('visible');
}

function showExito(msg) {
  exitoText.textContent = msg;
  exitoMsg.classList.add('visible');
  errorMsg.classList.remove('visible');
}

function hideMessages() {
  errorMsg.classList.remove('visible');
  exitoMsg.classList.remove('visible');
}

// ── Validaciones ───────────────────────────────────────────────────
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarPassword(pass) {
  return {
    longitud:  pass.length >= 8,
    mayuscula: /[A-Z]/.test(pass),
    numero:    /[0-9]/.test(pass),
    simbolo:   /[^A-Za-z0-9]/.test(pass),
    valida:    pass.length >= 8 && /[A-Z]/.test(pass) && /[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass)
  };
}

// ── Registro ───────────────────────────────────────────────────────
btnRegistro.addEventListener('click', async () => {
  hideMessages();

  const nombre   = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();
  const email    = inputEmail.value.trim();
  const password = inputPassword.value;
  const confirm  = inputConfirm.value;
  const rol      = window._rolRegistro || 'terapeuta';
  const esp      = rol === 'terapeuta' ? selectEsp.value : null;

  // ── Validaciones en el cliente ──
  if (!nombre) {
    showError('Por favor ingresa tu nombre.');
    inputNombre.focus();
    return;
  }

  if (!apellido) {
    showError('Por favor ingresa tu apellido.');
    inputApellido.focus();
    return;
  }

  if (rol === 'terapeuta' && !esp) {
    showError('Por favor selecciona tu especialidad.');
    selectEsp.focus();
    return;
  }

  if (!email) {
    showError('Por favor ingresa tu correo electrónico.');
    inputEmail.focus();
    return;
  }

  if (!validarEmail(email)) {
    showError('El correo electrónico no tiene un formato válido.');
    inputEmail.focus();
    return;
  }

  const passCheck = validarPassword(password);
  if (!passCheck.valida) {
    let msg = 'La contraseña no cumple los requisitos: ';
    const fallas = [];
    if (!passCheck.longitud)  fallas.push('mínimo 8 caracteres');
    if (!passCheck.mayuscula) fallas.push('una mayúscula');
    if (!passCheck.numero)    fallas.push('un número');
    if (!passCheck.simbolo)   fallas.push('un símbolo especial');
    showError(msg + fallas.join(', ') + '.');
    inputPassword.focus();
    return;
  }

  if (password !== confirm) {
    showError('Las contraseñas no coinciden. Verifica e intenta de nuevo.');
    inputConfirm.focus();
    return;
  }

  setLoading(true);

  try {
    // 1. Crear usuario en Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 2. Enviar correo de verificación
    await sendEmailVerification(user);

    // 3. Guardar perfil en Firestore
    const perfilBase = {
      nombre,
      apellido,
      nombreCompleto: `${nombre} ${apellido}`,
      email,
      rol,
      activo: true,
      emailVerificado: false,
      fechaRegistro: serverTimestamp(),
    };

    if (rol === 'terapeuta') {
      perfilBase.especialidad = esp;
      perfilBase.pacientes    = [];
    }

    await setDoc(doc(db, 'usuarios', user.uid), perfilBase);

    // 4. Cerrar sesión hasta que verifique el correo
    await signOut(auth);

    // 5. Mostrar mensaje de éxito
    setLoading(false);
    showExito(`¡Cuenta creada! Te enviamos un correo de verificación a ${email}. Revisa tu bandeja de entrada (y carpeta de spam) y haz clic en el enlace para activar tu cuenta.`);

    // Deshabilitar el formulario hasta que vaya a verificar
    btnRegistro.disabled = true;
    btnText.textContent = '¡Revisa tu correo!';

    // Redirigir al login después de 5 segundos
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 5000);

  } catch (error) {
    setLoading(false);

    switch (error.code) {
      case 'auth/email-already-in-use':
        showError('Ya existe una cuenta registrada con este correo. ¿Quieres iniciar sesión?');
        break;
      case 'auth/invalid-email':
        showError('El correo electrónico no es válido.');
        break;
      case 'auth/weak-password':
        showError('La contraseña es muy débil. Usa al menos 8 caracteres con mayúsculas, números y símbolos.');
        break;
      case 'auth/network-request-failed':
        showError('Sin conexión a internet. Verifica tu red e intenta de nuevo.');
        break;
      default:
        showError('Ocurrió un error al crear la cuenta. Intenta de nuevo.');
        console.error('Error registro:', error);
    }
  }
});

// ── Limpiar errores al escribir ────────────────────────────────────
[inputNombre, inputApellido, inputEmail, inputPassword, inputConfirm].forEach(input => {
  input.addEventListener('input', hideMessages);
});
