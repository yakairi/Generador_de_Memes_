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

const toggleTopText = () => {
    const noTopTextCheckbox = document.getElementById('no-top-text-checkbox');
    const topTextElement = document.getElementById('top-text');

    if (noTopTextCheckbox.checked) {
        topTextElement.style.display = 'none'; // Ocultar texto superior si el checkbox está marcado
    } else {
        topTextElement.style.display = 'block'; // Mostrar texto superior si el checkbox no está marcado
    }
};
// Llama a la función para asegurarse de que el estado inicial del texto superior sea coherente con el estado inicial del checkbox
toggleTopText();


// Función para actualizar el texto inferior del meme
const updateBottomText = () => {
    const bottomText = document.getElementById('bottom-text-input').value;
    document.getElementById('bottom-text').innerText = bottomText;
};
const toggleBottomText = () => {
    const noBottomTextCheckbox = document.getElementById('no-bottom-text-checkbox');
    const bottomTextElement = document.getElementById('bottom-text');

    if (noBottomTextCheckbox.checked) {
        bottomTextElement.style.display = 'none'; // Ocultar texto superior si el checkbox está marcado
    } else {
        bottomTextElement.style.display = 'block'; // Mostrar texto superior si el checkbox no está marcado
    }
};
// Llama a la función para asegurarse de que el estado inicial del texto superior sea coherente con el estado inicial del checkbox
toggleBottomText();

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
// funcion para aplicar mezcla de color atraves del fondo
const applyBackground = () => {
    const memeImageElement = document.getElementById('meme-image');
    const blendModeColorInput = document.getElementById('blend-mode-color-input');
    const blendModeSelect = document.getElementById('blend-mode-select');

    const blendMode = blendModeSelect.value;
    const blendColor = blendModeColorInput.value;

    memeImageElement.style.backgroundColor = blendColor;
    memeImageElement.style.mixBlendMode = blendMode;
};

// Función para aplicar el estilo de fuente seleccionado
const applyFontStyle = () => {
    const selectedFont = document.getElementById('text-font-select').value;
    document.querySelectorAll('.meme-text').forEach(textElement => {
        textElement.style.fontFamily = selectedFont;
    });
};

// Función para aplicar el tamaño de fuente seleccionado
const applyFontSize = () => {
    const selectedSize = document.getElementById('text-size-input').value;
    document.querySelectorAll('.meme-text').forEach(textElement => {
        textElement.style.fontSize = `${selectedSize}px`;
    });
};
// Aplicar estilos de fuente y tamaño iniciales
applyFontStyle();
applyFontSize();

// // Función para alinear el texto a la izquierda
// const alignTextLeft = () => {
//     document.querySelectorAll('.meme-text').forEach(textElement => {
//         textElement.style.textAlign = 'left';
//     });
// };

// // Función para alinear el texto al centro
// const alignTextCenter = () => {
//     document.querySelectorAll('.meme-text').forEach(textElement => {
//         textElement.style.textAlign = 'center';
//     });
// };

// // Función para alinear el texto a la derecha
// const alignTextRight = () => {
//     document.querySelectorAll('.meme-text').forEach(textElement => {
//         textElement.style.textAlign = 'right';
//     });
// };

// Funciones para alinear texto a la izquierda, al centro y a la derecha
const alignTextLeft = () => {
    topText.style.textAlign = 'left';
    bottomText.style.textAlign = 'left';
};

const alignTextCenter = () => {
    topText.style.textAlign = 'center';
    bottomText.style.textAlign = 'center';
};

const alignTextRight = () => {
    topText.style.textAlign = 'right';
    bottomText.style.textAlign = 'right';
};





// Asigna de las funciones a los eventos correspondientes.
document.getElementById('theme-toggle-button').addEventListener('click', toggleTheme);
document.getElementById('download-btn').addEventListener('click', downloadMeme);
document.getElementById('image-panel-button').addEventListener('click', togglePanel); 
document.getElementById('text-panel-button').addEventListener('click', togglePanel)
document.getElementById('image-panel-button').addEventListener('click', showPanelImage); 
document.getElementById('text-panel-button').addEventListener('click', showPanelText);
document.getElementById('panel-close-button').addEventListener('click',closePanel);
document.getElementById('url-img-input').addEventListener('change', loadImageFromUrl);
document.getElementById('top-text-input').addEventListener('input', updateTopText);
document.getElementById('no-top-text-checkbox').addEventListener('change', toggleTopText);
document.getElementById('bottom-text-input').addEventListener('input', updateBottomText);
document.getElementById('no-bottom-text-checkbox').addEventListener('change', toggleBottomText);
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
document.getElementById('blend-mode-color-input').addEventListener('input', applyBackground);
document.getElementById('blend-mode-select').addEventListener('change', applyBackground);
document.getElementById('text-font-select').addEventListener('change', applyFontStyle);
document.getElementById('text-size-input').addEventListener('input', applyFontSize);
document.getElementById('text-left-align-button').addEventListener('click', alignTextLeft);
document.getElementById('text-center-align-button').addEventListener('click', alignTextCenter);
document.getElementById('text-right-align-button').addEventListener('click', alignTextRight);




