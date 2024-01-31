// Función para cambiar entre el modo claro y oscuro
const toggleTheme = () => {
    const body = document.body;

    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        document.getElementById('theme-toggle-button').textContent = 'Modo oscuro';
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        document.getElementById('theme-toggle-button').textContent = 'Modo claro';
    }
};
// Función para mostrar el formulario de imagen y ocultar el de texto
const showPanelImage = () => {
    document.getElementById('image-edit-form').classList.remove('oculto');
    document.getElementById('text-edit-form').classList.add('oculto');
};

// Función para mostrar el formulario de texto y ocultar el de imagen
const showPanelText = () => {
    document.getElementById('image-edit-form').classList.add('oculto');
    document.getElementById('text-edit-form').classList.remove('oculto');
};

// Función para abrir/cerrar el panel lateral
 const togglePanel = () => {
    const panel = document.getElementById('panel');
    if (panel.classList.contains('open')) {
        panel.classList.remove('open');
    } else {
        panel.classList.add('open');
    }
}; 
// Función para cerrar el panel
const closePanel = () => {
    const panel = document.getElementById('panel');
    panel.classList.remove('open');
}; 

const downloadMeme = () => {
    const memeImage = document.getElementById('meme-image');
    const memeUrl = memeImage.src; // Obtener la URL de la imagen del meme

    // Crear un enlace <a> temporal
    const link = document.createElement('a');
    link.href = memeUrl;
    link.download = 'meme.png'; // Nombre del archivo a descargar

    // Simular clic en el enlace para iniciar la descarga
    link.click();
};  


/*// Función para cargar una imagen desde una URL
const loadImageFromUrl = () => {
    const imageUrl = document.getElementById('url-img-input').value;
    document.getElementById('meme-image').style.backgroundImage = `url('${imageUrl}')`;
};

// Función para actualizar el texto superior del meme
const updateTopText = () => {
    const topText = document.getElementById('top-text-input').value;
    document.getElementById('top-text').innerText = topText;
};

// Función para actualizar el texto inferior del meme
const updateBottomText = () => {
    const bottomText = document.getElementById('bottom-text-input').value;
    document.getElementById('bottom-text').innerText = bottomText;
};


//función para manejar la carga de la imagen
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
//Función para restablecer los filtros en el panel lateral
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
};  */




// Asigna las funciones a los eventos correspondientes
document.getElementById('theme-toggle-button').addEventListener('click', toggleTheme);
document.getElementById('download-btn').addEventListener('click', downloadMeme);
document.getElementById('image-panel-button').addEventListener('click', togglePanel); 
document.getElementById('text-panel-button').addEventListener('click', togglePanel)
document.getElementById('image-panel-button').addEventListener('click', showPanelImage); 
document.getElementById('text-panel-button').addEventListener('click', showPanelText);
document.getElementById('panel-close-button').addEventListener('click',closePanel);


/*document.getElementById('reset-btn').addEventListener('click', resetFilters);
document.getElementById('image-upload').addEventListener('change', handleImageUpload);  
document.getElementById('apply-filters-btn').addEventListener('click', applyImageFilters);
document.getElementById('reset-filters-btn').addEventListener('click', resetImageFilters);

document.getElementById('panel-close-button').addEventListener('click', hiddePanel );
document.getElementById('panel-open-button').addEventListener('click', showPanel );

document.getElementById('url-img-input').addEventListener('change', loadImageFromUrl);
document.getElementById('top-text-input').addEventListener('input', updateTopText);
document.getElementById('bottom-text-input').addEventListener('input', updateBottomText);
 */

