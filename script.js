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
 

// Función para cargar una imagen desde una URL
const loadImageFromUrl = () => {
    // const imageUrl = document.getElementById('url-img-input').value;
    // document.getElementById('meme-image').style.backgroundImage = `url('${imageUrl}')`;
    const imageUrl = document.getElementById('url-img-input').value;
    const memeImageElement = document.getElementById('meme-image');

    memeImageElement.style.backgroundImage = `url('${imageUrl}')`;

    // Llamar a la función para aplicar filtros después de cargar la imagen
    applyImageFilters();
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

// Función para descargar  memes
const downloadMeme = () => {
    // Obtener el canvas del meme por su ID
    const memes = document.getElementById('meme-text-image');

    // Convertir el memes a un blob usando Dom-to-Image
    domtoimage.toBlob(memes)
        .then(function(blob) {
            // Guardar el blob como un archivo PNG usando FileSaver.js
            saveAs(blob, 'mi-meme.png');
        })
        .catch(function(error) {
            // Manejar cualquier error que pueda ocurrir
            console.error('Error al descargar el meme:', error);
        });
};

// Función para aplicar filtros a la imagen
const applyImageFilters = () => {
    const memeImageElement = document.getElementById('meme-image');

    const brightness = document.getElementById('brightness-slider').value;
    const opacity = document.getElementById('opacity-slider').value;
    const contrast = document.getElementById('contrast-slider').value;
    const blur = document.getElementById('blur-slider').value;
    const grayscale = document.getElementById('grayscale-slider').value;
    const sepia = document.getElementById('sepia-slider').value;
    const hue = document.getElementById('hue-slider').value;
    const saturate = document.getElementById('saturate-slider').value;
    const invert = document.getElementById('invert-slider').value;

   

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
    `
};



//Función para restablecer los filtros en el panel lateral
const resetFilters = () => {
    document.getElementById('brightness-slider').value = 1;
    document.getElementById('opacity-slider').value = 1;
    document.getElementById('contrast-slider').value = 100;
    document.getElementById('blur-slider').value = 0;
    document.getElementById('grayscale-slider').value = 0;
    document.getElementById('sepia-slider').value = 0;
    document.getElementById('hue-slider').value = 0;
    document.getElementById('saturate-slider').value = 100;
    document.getElementById('invert-slider').value = 0;
};

//Función para restablecer los filtros de la imagen
const resetImageFilters = () => {
const memeImageElement = document.getElementById('meme-imagen');

    memeImageElement.style.filter = 'none'; 
    
}; 



// Asigna las funciones a los eventos correspondientes
document.getElementById('theme-toggle-button').addEventListener('click', toggleTheme);
document.getElementById('download-btn').addEventListener('click', downloadMeme);
document.getElementById('image-panel-button').addEventListener('click', togglePanel); 
document.getElementById('text-panel-button').addEventListener('click', togglePanel)
document.getElementById('image-panel-button').addEventListener('click', showPanelImage); 
document.getElementById('text-panel-button').addEventListener('click', showPanelText);
document.getElementById('panel-close-button').addEventListener('click',closePanel);
document.getElementById('url-img-input').addEventListener('change', loadImageFromUrl);
document.getElementById('top-text-input').addEventListener('input', updateTopText);
document.getElementById('bottom-text-input').addEventListener('input', updateBottomText);
document.getElementById('default-filters-button').addEventListener('click', resetFilters);
document.getElementById('brightness-slider').addEventListener('input', applyImageFilters);
document.getElementById('opacity-slider').addEventListener('input', applyImageFilters);
document.getElementById('contrast-slider').addEventListener('input', applyImageFilters);
document.getElementById('blur-slider').addEventListener('input', applyImageFilters);
document.getElementById('grayscale-slider').addEventListener('input', applyImageFilters);
document.getElementById('sepia-slider').addEventListener('input', applyImageFilters);
document.getElementById('hue-slider').addEventListener('input', applyImageFilters);
document.getElementById('saturate-slider').addEventListener('input', applyImageFilters);
document.getElementById('invert-slider').addEventListener('input', applyImageFilters);




