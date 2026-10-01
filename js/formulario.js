window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contactForm');
    if (form) {
        const exito = document.getElementById('submitSuccessMessage');
        const error = document.getElementById('submitErrorMessage');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('name').value.trim();
            const correo = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('message').value.trim();
            const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

            exito.classList.add('d-none');
            error.classList.add('d-none');

            if (!nombre || !correoValido || !mensaje) {
                error.classList.remove('d-none');
                return;
            }

            exito.classList.remove('d-none');
            form.reset();
        });
    }

});
