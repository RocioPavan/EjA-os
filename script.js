function mostrarMensajeBienvenida(nombre) {
    const mensaje = `Bienvenido, ${nombre}!`;
    document.getElementById('welcomeMessage').innerText = mensaje;
  }
  
  function calcularDiasVividos() {
    const nombre = document.getElementById('nombreInput').value.trim();
    const signo = document.getElementById('signoInput').value.trim();
    const fechaNacimientoString = document.getElementById('fechaNacimientoInput').value;
  
    if (nombre === '' || signo === '' || fechaNacimientoString === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Convierte fecha en objeto Date
    const fechaNacimiento = new Date(fechaNacimientoString);
  
    // Calcula los dias vividos
    const hoy = new Date();
    const milisegundosPorDia = 1000 * 60 * 60 * 24;
    const diasVividos = Math.floor((hoy - fechaNacimiento) / milisegundosPorDia);
  
    mostrarMensajeBienvenida(nombre);
  
    // Muestra los dias vividos
    const mensajeDiasVividos = `Has vivido aproximadamente ${diasVividos} días.`;
    const mensajeDiasVividosElement = document.createElement('p');
    mensajeDiasVividosElement.innerText = mensajeDiasVividos;
    document.body.appendChild(mensajeDiasVividosElement);
  
    // Muestra el signo
    const mensajeSignoZodiaco = `Tu signo del zodiaco es ${signo}.`;
    const mensajeSignoZodiacoElement = document.createElement('p');
    mensajeSignoZodiacoElement.innerText = mensajeSignoZodiaco;
    document.body.appendChild(mensajeSignoZodiacoElement);
  }
  