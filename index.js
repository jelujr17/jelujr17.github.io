document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    // Crear elemento overlay para fondo oscuro
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    body.appendChild(overlay);
    
    // Función para alternar el menú
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll'); // Evitar scroll cuando el menú está abierto
    }
    
    // Evento para el botón hamburguesa
    menuToggle.addEventListener('click', toggleMenu);
    
    // Cerrar el menú al hacer clic en el overlay
    overlay.addEventListener('click', toggleMenu);
    
    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });
    
    // Cerrar el menú al redimensionar la ventana más allá del punto de quiebre
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
});