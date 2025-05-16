// Script para manejar el envío del formulario de contacto usando EmailJS

// Asegúrate de incluir la biblioteca EmailJS en tu HTML antes de este script:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar EmailJS con tu clave pública
    // Regístrate en https://www.emailjs.com/ para obtener una clave
    emailjs.init("A3-BJijjsvHEt5A9L");
    
    // Obtener referencia al formulario
    const formularioContacto = document.querySelector('.contacto-form form');
    
    // Añadir listener para el evento de envío
    formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío normal del formulario
        
        // Mostrar indicador de carga
        const btnEnviar = document.querySelector('.btn-enviar');
        const textoOriginal = btnEnviar.textContent;
        btnEnviar.textContent = 'Enviando...';
        btnEnviar.disabled = true;
        
        // Preparar los datos para enviar
        const datosFormulario = {
            nombre: document.getElementById('nombre').value,
            apellidos: document.getElementById('apellidos').value,
            email: document.getElementById('email').value,
            mensaje: document.getElementById('mensaje').value
        };
        
        // Enviar el email usando EmailJS
        // Reemplaza 'tu_service_id' y 'tu_template_id' con tus propios IDs de EmailJS
        emailjs.send('service_im7wxpp2', 'template_pgslngh', datosFormulario)
            .then(function(response) {
                console.log('Éxito!', response.status, response.text);
                mostrarMensaje('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'exito');
                formularioContacto.reset(); // Limpiar el formulario
            })
            .catch(function(error) {
                console.log('Error...', error);
                mostrarMensaje('Hubo un error al enviar tu mensaje. Por favor, inténtalo nuevamente.', 'error');
            })
            .finally(function() {
                // Restaurar el botón
                btnEnviar.textContent = textoOriginal;
                btnEnviar.disabled = false;
            });
    });
    
    // Función para mostrar mensajes de retroalimentación
    function mostrarMensaje(texto, tipo) {
        // Comprobar si ya existe un mensaje y eliminarlo
        const mensajeExistente = document.querySelector('.mensaje-feedback');
        if (mensajeExistente) {
            mensajeExistente.remove();
        }
        
        // Crear elemento para el mensaje
        const mensaje = document.createElement('div');
        mensaje.className = `mensaje-feedback mensaje-${tipo}`;
        mensaje.textContent = texto;
        
        // Insertar después del formulario
        formularioContacto.parentNode.insertBefore(mensaje, formularioContacto.nextSibling);
        
        // Desaparecer después de 5 segundos
        setTimeout(function() {
            mensaje.classList.add('desaparecer');
            setTimeout(function() {
                mensaje.remove();
            }, 500);
        }, 5000);
    }
});