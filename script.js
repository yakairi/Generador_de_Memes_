const themeToggleButton = document.getElementById('theme-toggle-button');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleButton.innerHTML = '<i class="fas fa-lightbulb button-icon" aria-hidden="true"></i>Modo oscuro';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleButton.innerHTML = '<i class="fas fa-lightbulb button-icon" aria-hidden="true"></i>Modo claro';
    }
});

