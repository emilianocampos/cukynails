

let burgerMenu = document.getElementById('burger-menu');

let overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function () {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
    this.classList.toggle("rubberBand");
    this.classList.toggle("animated");
});

