const hamburguer = document.querySelector(".burguer");
const navLinks = document.querySelector(".navLinks");
const navbar = document.querySelector(".navbar")
const Links = document.querySelectorAll(".navLinks li");

hamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navbar.classList.toggle('open');
});