// ================================
// MENU MOBILE
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// ================================
// FECHAR MENU
// ================================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });


// ================================
// FORMULÁRIO
// ================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", () => {

    const button = form.querySelector("button");

    button.textContent = "Enviando...";

    button.disabled = true;

});


// ================================
// ANIMAÇÃO DOS ELEMENTOS
// ================================

const elements = document.querySelectorAll(
    ".skill, .project-card, .info-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);


elements.forEach(element => {

    observer.observe(element);

});
