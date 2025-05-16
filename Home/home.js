// Script para manejar el envío del formulario de contacto usando FormSubmit

document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario
    const formularioContacto = document.querySelector('.contacto-form form');
    
    // Asegurar que el formulario tenga el atributo action correcto
    formularioContacto.setAttribute('action', 'https://formsubmit.co/marioml7902@gmail.com');
    formularioContacto.setAttribute('method', 'POST');
    
    // Añadir listener para el evento de envío
    formularioContacto.addEventListener('submit', function(event) {
        // No prevenimos el envío normal del formulario porque FormSubmit lo necesita
        
        // Validar campos requeridos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        if (!nombre || !email || !mensaje) {
            event.preventDefault();
            mostrarMensaje('Por favor, completa todos los campos requeridos.', 'error');
            return;
        }
        
        // Mostrar indicador de carga
        const btnEnviar = document.querySelector('.btn-enviar');
        const textoOriginal = btnEnviar.textContent;
        btnEnviar.textContent = 'Enviando...';
        btnEnviar.disabled = true;
        
        // Aquí no prevenimos el envío - FormSubmit necesita que el formulario se envíe normalmente
        // Pero mostramos un mensaje de éxito antes de que la página se recargue
        mostrarMensaje('Enviando mensaje...', 'info');
        
        // Agregar un pequeño retraso para permitir que se muestre el mensaje
        // antes de que el navegador navegue a la página de éxito de FormSubmit
        setTimeout(() => {
            // No necesitamos hacer nada aquí, el formulario se enviará normalmente
        }, 500);
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
        
        // Para los mensajes de error, desaparecer después de 5 segundos
        if (tipo === 'error') {
            setTimeout(function() {
                mensaje.classList.add('desaparecer');
                setTimeout(function() {
                    mensaje.remove();
                }, 500);
            }, 5000);
        }
    }
});