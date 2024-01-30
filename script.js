// Función para cambiar entre el modo claro y oscuro
const toggleTheme = () => {
    const body = document.body;

    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        document.getElementById('theme-toggle-button').textContent = 'Modo claro';
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        document.getElementById('theme-toggle-button').textContent = 'Modo oscuro';
    }
};

// Función para descargar el meme
const descargarMeme = () => {
    alert('Descargando meme...');
};

// Función para abrir/cerrar el panel lateral
const togglePanel = () => {
    const panel = document.getElementById('panel');
    panel.classList.toggle('open');
};

// Función para restablecer los filtros en el panel lateral
const resetFilters = () => {
    document.getElementById('brightness').value = 1;
    document.getElementById('opacity').value = 1;
    document.getElementById('contrast').value = 100;
    document.getElementById('blur').value = 0;
    document.getElementById('grayscale').value = 0;
    document.getElementById('sepia').value = 0;
    document.getElementById('hue').value = 0;
    document.getElementById('saturate').value = 100;
    document.getElementById('invert').value = 0;
};

// Función para manejar la carga de la imagen
const handleImageUpload = () => {
    const inputElement = document.getElementById('image-upload');
    const memeImageElement = document.getElementById('meme-image');

    const file = inputElement.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            memeImageElement.style.backgroundImage = `url(${e.target.result})`;
        };

        reader.readAsDataURL(file);
    }
};

// Función para aplicar filtros a la imagen
const applyImageFilters = () => {
    const memeImageElement = document.getElementById('meme-image');

    const brightness = document.getElementById('brightness').value;
    const opacity = document.getElementById('opacity').value;
    const contrast = document.getElementById('contrast').value;
    const blur = document.getElementById('blur').value;
    const grayscale = document.getElementById('grayscale').value;
    const sepia = document.getElementById('sepia').value;
    const hue = document.getElementById('hue').value;
    const saturate = document.getElementById('saturate').value;
    const invert = document.getElementById('invert').value;

    memeImageElement.style.filter = `
        brightness(${brightness})
        opacity(${opacity})
        contrast(${contrast}%)
        blur(${blur}px)
        grayscale(${grayscale}%)
        sepia(${sepia}%)
        hue-rotate(${hue}deg)
        saturate(${saturate}%)
        invert(${invert})
    `;
};

// Función para restablecer los filtros de la imagen
const resetImageFilters = () => {
    const memeImageElement = document.getElementById('meme-image');

    memeImageElement.style.filter = 'none';

    // También puedes restablecer los valores de los controles deslizantes aquí si es necesario
};

// Asigna las funciones a los eventos correspondientes
document.getElementById('theme-toggle-button').addEventListener('click', toggleTheme);
document.getElementById('download-btn').addEventListener('click', descargarMeme);
document.getElementById('image-panel-button').addEventListener('click', togglePanel);
document.getElementById('close-aside').addEventListener('click', togglePanel);
document.getElementById('reset-btn').addEventListener('click', resetFilters);
document.getElementById('image-upload').addEventListener('change', handleImageUpload);
document.getElementById('apply-filters-btn').addEventListener('click', applyImageFilters);
document.getElementById('reset-filters-btn').addEventListener('click', resetImageFilters);


