const boton = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

boton.addEventListener("click", function () {
    menu.classList.toggle("activo");
});
