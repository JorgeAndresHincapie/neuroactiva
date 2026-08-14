/*
  crear-usuario.js
  ------------------------------------------------------------
  Módulo para crear usuarios (Terapeuta/Paciente) desde el panel
  de administrador, SIN perder la sesión del admin, y con soporte
  de "demo por tiempo limitado" antes de la suscripción.

  CÓMO INTEGRARLO EN dashboard-admin.html:

  1. Asegúrate de que tu firebase.js exporte también:
       export const firebaseConfig = { ...tu configuración... };
     (la misma configuración que ya usas para inicializar la app principal)

  2. Agrega este <script type="module"> en dashboard-admin.html,
     o copia su contenido dentro de tu script existente.

  3. Agrega en el HTML un formulario con estos IDs:
     <input id="nuevoNombre" />
     <input id="nuevoApellido" />
     <input id="nuevoEmail" type="email" />
     <input id="nuevoPassword" type="text" />
     <select id="nuevoRol">
       <option value="terapeuta">Terapeuta</option>
       <option value="paciente">Paciente</option>
       <option value="admin">Administrador</option>
     </select>
     <select id="nuevoPlan">
       <option value="demo">Demo (tiempo limitado)</option>
       <option value="activo">Activo (suscripción pagada)</option>
     </select>
     <input id="nuevoDiasDemo" type="number" value="15" />
     <button onclick="crearUsuario()">Crear usuario</button>
     <div id="msgCrearUsuario"></div>
*/

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth, createUserWithEmailAndPassword, signOut as signOutSecondary
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { firebaseConfig, db as dbPrincipal } from "./firebase.js"; // ajusta el nombre si tu firebase.js exporta distinto

// App secundaria SOLO para crear usuarios, no interfiere con la sesión del admin
const secondaryApp = initializeApp(firebaseConfig, "Secondary");
const secondaryAuth = getAuth(secondaryApp);

window.crearUsuario = async function () {
  const nombre = document.getElementById("nuevoNombre").value.trim();
  const apellido = document.getElementById("nuevoApellido").value.trim();
  const email = document.getElementById("nuevoEmail").value.trim();
  const password = document.getElementById("nuevoPassword").value;
  const rol = document.getElementById("nuevoRol").value;
  const plan = document.getElementById("nuevoPlan").value; // 'demo' o 'activo'
  const diasDemo = parseInt(document.getElementById("nuevoDiasDemo").value || "15", 10);
  const msg = document.getElementById("msgCrearUsuario");

  if (!nombre || !email || !password) {
    msg.textContent = "Completa nombre, correo y contraseña.";
    msg.style.color = "#C53030";
    return;
  }
  if (password.length < 6) {
    msg.textContent = "La contraseña debe tener al menos 6 caracteres.";
    msg.style.color = "#C53030";
    return;
  }

  try {
    // 1. Crear el usuario en Authentication usando la app SECUNDARIA
    const cred = await createUserWithEmailAndPassword(secondaryAuth, email, password);
    const uid = cred.user.uid;

    // 2. Calcular fecha de vencimiento si es demo
    let fechaVencimientoDemo = null;
    if (plan === "demo") {
      const vencimiento = new Date();
      vencimiento.setDate(vencimiento.getDate() + diasDemo);
      fechaVencimientoDemo = vencimiento.toISOString(); // se guarda como texto ISO
    }

    // 3. Crear el documento del usuario en Firestore (con la conexión PRINCIPAL,
    //    la del admin, que sigue con su sesión intacta)
    await setDoc(doc(dbPrincipal, "usuarios", uid), {
      nombre,
      apellido,
      nombreCompleto: `${nombre} ${apellido}`.trim(),
      email,
      rol,               // 'terapeuta' | 'paciente' | 'admin'
      plan,              // 'demo' | 'activo'
      fechaVencimientoDemo, // null si plan==='activo'
      creadoEn: serverTimestamp(),
      creadoPor: "admin",
    });

    // 4. Cerrar la sesión de la app SECUNDARIA (no afecta al admin)
    await signOutSecondary(secondaryAuth);

    msg.style.color = "#1A7A5E";
    msg.textContent = `✓ Usuario creado: ${email} (${rol}, ${plan}${plan === "demo" ? " - " + diasDemo + " días" : ""})`;

    // Limpiar el formulario
    document.getElementById("nuevoNombre").value = "";
    document.getElementById("nuevoApellido").value = "";
    document.getElementById("nuevoEmail").value = "";
    document.getElementById("nuevoPassword").value = "";

  } catch (e) {
    msg.style.color = "#C53030";
    if (e.code === "auth/email-already-in-use") {
      msg.textContent = "Ese correo ya está registrado.";
    } else if (e.code === "auth/weak-password") {
      msg.textContent = "La contraseña es muy débil (mínimo 6 caracteres).";
    } else if (e.code === "auth/invalid-email") {
      msg.textContent = "El correo no es válido.";
    } else {
      msg.textContent = "Error al crear usuario: " + e.message;
    }
    console.error(e);
  }
};
