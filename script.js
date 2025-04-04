document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Website Loaded!");

    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill all fields.");
        } else {
            alert("Thank you for your message! I'll get back to you soon.");
            document.getElementById("contact-form").reset();
        }
    });

    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            nav.style.background = "#222";
        } else {
            nav.style.background = "rgba(255, 255, 255, 0.1)";
        }
    });

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".nav-links").classList.toggle("active");
    });

    document.querySelector(".dark-mode-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
