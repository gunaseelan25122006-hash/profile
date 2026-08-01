// =======================================
// Typing Animation
// =======================================

const typingElement = document.getElementById("typing");

const words = [
    "Aspiring Software Developer",
    "B.Tech IT Student",
    "Web Developer",
    "Cloud Computing Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// =======================================
// Back To Top Button
// =======================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =======================================
// Active Navigation
// =======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =======================================
// Mobile Menu
// =======================================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "block") {

        nav.style.display = "none";

    } else {

        nav.style.display = "block";

    }

});


// =======================================
// Scroll Animation
// =======================================

const cards = document.querySelectorAll(
".card,.about-card,.edu-box,.skill,.contact-box"
);

function reveal() {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s";

});

window.addEventListener("scroll", reveal);

reveal();


// =======================================
// Hero Image Animation
// =======================================

const heroImage = document.querySelector(".hero-image img");

setInterval(() => {

    heroImage.classList.toggle("floating");

}, 2000);


// =======================================
// Console Message
// =======================================

console.log("Welcome to Gunaseelan M Portfolio");