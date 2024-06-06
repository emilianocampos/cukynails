

let burgerMenu = document.getElementById('burger-menu');

let overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function () {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
   
});

document.addEventListener('DOMContentLoaded', function () {
    var glider = new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        draggable: true,
        rewind: true,
        duration: 1.5
    });

    // Configuración del carrusel automático
    function autoScroll() {
        setInterval(function () {
            if (glider.slide >= glider.slides.length - 1) {
                glider.scrollItem(0);
            } else {
                glider.scrollItem(glider.slide + 1);
            }
        }, 4500); // Cambia de imagen cada 3 segundos
    }

    autoScroll();
});