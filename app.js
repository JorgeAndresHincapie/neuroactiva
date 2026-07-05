import {
  auth, db,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  doc, getDoc
} from './firebase.js';

// ── Elementos del DOM ──────────────────────────────────────────────
const btnLogin   = document.getElementById('btnLogin');
const btnText    = document.getElementById('btnText');
const spinner    = document.getElementById('spinner');
const errorMsg   = document.getElementById('errorMsg');
const errorText  = document.getElementById('errorText');
const exitoMsg   = document.getElementById('exitoMsg');
const exitoText  = document.getElementById('exitoText');
const inputEmail    = document.getElementById('email');
const inputPassword = document.getElementById('password');
const linkOlvide    = document.getElementById('linkOlvide');

// ── Utilidades ─────────────────────────────────────────────────────
function setLoading(loading) {
  btnLogin.disabled       = loading;
  spinner.style.display   = loading ? 'block' : 'none';
  btnText.textContent     = loading ? 'Ingresando…' : 'Ingresar';
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

// ── Validación básica ──────────────────────────────────────────────
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Login ──────────────────────────────────────────────────────────
btnLogin.addEventListener('click', async () => {
  hideMessages();

  const email    = inputEmail.value.trim();
  const password = inputPassword.value;
  const rol      = window._rolLogin || 'terapeuta';

  // Validaciones en el cliente
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
  if (!password) {
    showError('Por favor ingresa tu contraseña.');
    inputPassword.focus();
    return;
  }

  setLoading(true);

  try {
    // 1. Autenticar con Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 2. Verificar correo (excepto admin)
    const snapPreCheck = await getDoc(doc(db, 'usuarios', user.uid));
    const esAdmin = snapPreCheck.exists() && snapPreCheck.data().rol === 'admin';

    if (!user.emailVerified && !esAdmin) {
      await signOut(auth);
      showError('Debes verificar tu correo electrónico antes de ingresar. Revisa tu bandeja de entrada.');
      setLoading(false);
      return;
    }

    // 3. Consultar perfil en Firestore
    const userSnap = await getDoc(doc(db, 'usuarios', user.uid));

    if (!userSnap.exists()) {
      await signOut(auth);
      showError('No se encontró tu perfil. Contacta al administrador.');
      setLoading(false);
      return;
    }

    const userData = userSnap.data();

    
    // 4. Verificar que la cuenta esté activa 
    if (userData.activo === false) {
      await signOut(auth);
      showError('Tu cuenta está inactiva. Contacta al administrador.');
      setLoading(false);
      return;
    }

    // 5. Verificar que el rol coincida (admin puede entrar desde cualquier tab)
if (userData.rol !== rol && userData.rol !== 'admin') {
  await signOut(auth);
  showError(`Esta cuenta no corresponde al perfil de ${rol}. Selecciona el perfil correcto.`);
  setLoading(false);
  return;
}

    // 6. Redirigir según rol
    if (userData.rol === 'terapeuta') {
      window.location.href = 'dashboard-terapeuta.html';
    } else if (userData.rol === 'paciente') {
      window.location.href = 'dashboard-paciente.html';
    } else if (userData.rol === 'admin') {
      window.location.href = 'dashboard-admin.html';
    }

  } catch (error) {
    setLoading(false);

    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        showError('Correo o contraseña incorrectos. Verifica tus datos e intenta de nuevo.');
        break;
      case 'auth/too-many-requests':
        showError('Cuenta bloqueada temporalmente por múltiples intentos fallidos. Intenta más tarde o restablece tu contraseña.');
        break;
      case 'auth/user-disabled':
        showError('Esta cuenta ha sido deshabilitada. Contacta al administrador.');
        break;
      case 'auth/network-request-failed':
        showError('Sin conexión a internet. Verifica tu red e intenta de nuevo.');
        break;
      default:
        showError('Ocurrió un error inesperado. Intenta de nuevo.');
        console.error('Error login:', error);
    }
  }
});

// ── Recuperar contraseña ───────────────────────────────────────────
linkOlvide.addEventListener('click', async (e) => {
  e.preventDefault();
  hideMessages();

  const email = inputEmail.value.trim();

  if (!email) {
    showError('Primero escribe tu correo electrónico y luego haz clic en "¿Olvidaste tu contraseña?"');
    inputEmail.focus();
    return;
  }

  if (!validarEmail(email)) {
    showError('El correo electrónico no tiene un formato válido.');
    inputEmail.focus();
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    showExito(`Se envió un enlace de recuperación a ${email}. Revisa tu bandeja de entrada y carpeta de spam.`);
  } catch (error) {
    switch (error.code) {
      case 'auth/user-not-found':
        showError('No existe una cuenta registrada con ese correo.');
        break;
      case 'auth/too-many-requests':
        showError('Demasiadas solicitudes. Espera unos minutos e intenta de nuevo.');
        break;
      default:
        showError('No se pudo enviar el correo de recuperación. Intenta de nuevo.');
    }
  }
});

// ── Login con Enter ────────────────────────────────────────────────
[inputEmail, inputPassword].forEach(input => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btnLogin.click();
  });
  input.addEventListener('input', hideMessages);
});

// ── Sesión activa → redirigir ──────────────────────────────────────
onAuthStateChanged(auth, async (user) => {
  if (user && user.emailVerified) {
    try {
      const snap = await getDoc(doc(db, 'usuarios', user.uid));
      if (snap.exists()) {
        const rol = snap.data().rol;
        if (rol === 'terapeuta') window.location.href = 'dashboard-terapeuta.html';
        else if (rol === 'paciente') window.location.href = 'dashboard-paciente.html';
        else if (rol === 'admin') window.location.href = 'dashboard-admin.html';
      }
    } catch (e) {
      console.warn('No se pudo verificar sesión:', e);
    }
  }
});
