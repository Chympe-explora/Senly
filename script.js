// MOBILE MENU (optional)

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".navbar").classList.remove("active");
    });
});


// SMOOTH FADE ANIMATION

const cards = document.querySelectorAll(
    ".feature-card, .tour-card, .vision-card, .about-box"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach((card) => {
    card.classList.add("hidden");
    observer.observe(card);
});


// WHATSAPP BOOKING FORM

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const persons = document.getElementById("persons").value;
const date = document.getElementById("date").value;
const request = document.getElementById("request").value;
const selectedPackage = document.getElementById("package").value;

const message =
`🌿 TEAM CHYMPE EXPLORA BOOKING

👤 Name: ${name}

📞 Phone: ${phone}

👥 Number of Persons: ${persons}

🎒 Selected Package: ${selectedPackage}

📅 Tour Date: ${date}

📝 Special Request:
${request}

Thank you.`;

    const whatsappNumber = "916001877518";

    const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    bookingForm.reset();

});


// HEADER BACKGROUND ON SCROLL

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,0.9)";
    } else {
        header.style.background = "rgba(0,0,0,0.6)";
    }

});
