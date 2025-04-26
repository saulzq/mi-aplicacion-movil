window.onload = function () {
  // Mostrar splash 2 segundos y luego login
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
    
    // Revisar si el usuario está guardado en localStorage
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      document.getElementById('usuario').value = usuarioGuardado;
      document.getElementById('rememberMe').checked = true;
    }
  }, 2000);
};

// Mostrar la pantalla de registro
function mostrarRegistro() {
  document.getElementById('login').classList.add('hidden');
  document.getElementById('registro').classList.remove('hidden');
}

// Mostrar la pantalla de login
function mostrarLogin() {
  document.getElementById('registro').classList.add('hidden');
  document.getElementById('login').classList.remove('hidden');
}

// Iniciar sesión
function iniciarSesion() {
  const usuario = document.getElementById('usuario').value;
  const clave = document.getElementById('clave').value;

  if (usuario && clave) {
    // Recordar usuario si es necesario
    if (document.getElementById('rememberMe').checked) {
      localStorage.setItem('usuario', usuario);
    } else {
      localStorage.removeItem('usuario');
    }

    document.getElementById('login').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
  } else {
    alert('Por favor ingresa usuario y contraseña');
  }
}

// Registrar usuario nuevo
function registrarUsuario() {
  const nuevoUsuario = document.getElementById('newUser').value;
  const nuevaClave = document.getElementById('newPassword').value;

  if (nuevoUsuario && nuevaClave) {
    alert('Cuenta creada exitosamente');
    mostrarLogin();
  } else {
    alert('Por favor ingresa un nombre de usuario y una contraseña');
  }
}

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

function mostrarMensaje(mensaje) {
  alert(mensaje);
}
