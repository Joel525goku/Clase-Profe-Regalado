let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    document.querySelector('.slides').style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Inicializa el slider
showSlide(slideIndex);

// Opcional: cambiar la imagen automáticamente cada 5 segundos
setInterval(() => moveSlide(1), 5000);
