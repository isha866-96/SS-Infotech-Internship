// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 500);

    }, 1500);

});


// ==========================
// TYPING EFFECT
// ==========================

const words = [
    "Data Science Student",
    "Full Stack Developer",
    "AI Enthusiast",
    "Machine Learning Learner",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current =
                +counter.innerText;

            const increment =
                target / 100;

            if (current < target) {

                counter.innerText =
                    Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;
            }
        };

        updateCounter();

    });

};

startCounter();


// ==========================
// CUSTOM CURSOR
// ==========================

const cursor =
    document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// ==========================
// SCROLL REVEAL
// ==========================

const hiddenElements =
    document.querySelectorAll("section");

hiddenElements.forEach(el => {
    el.classList.add("hidden");
});

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach(el => {
    observer.observe(el);
});


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

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


// ==========================
// NAVBAR ACTIVE LINK
// ==========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        const sectionHeight =
            section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }

    });

});


// ==========================
// PROJECT CARD HOVER EFFECT
// ==========================

const cards =
    document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.transform =
            `perspective(1000px)
             rotateX(${(y - rect.height / 2) / 20}deg)
             rotateY(${-(x - rect.width / 2) / 20}deg)
             scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });

});


// ==========================
// FLOATING TECH ICON EFFECT
// ==========================

const techItems =
    document.querySelectorAll(".tech");

techItems.forEach((item, index) => {

    item.style.animation =
        `floatTech ${3 + index % 3}s ease-in-out infinite`;

});


// ==========================
// PARALLAX HERO EFFECT
// ==========================

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");

    let offset =
        window.scrollY;

    hero.style.transform =
        `translateY(${offset * 0.15}px)`;

});


// ==========================
// CONTACT FORM ALERT
// ==========================

const form =
    document.querySelector("form");

form.addEventListener("submit", e => {

    e.preventDefault();

    alert(
        "Thank you! Your message has been sent successfully."
    );

    form.reset();

});