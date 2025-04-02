document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector("header");
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
    let typewriterElement = document.getElementById("typewriter");

    window.addEventListener("scroll", () => {
        header.classList.toggle("shadow", window.scrollY > 0);
    });

    menu.onclick = () => {
        navbar.classList.toggle("active");
    };

    window.onscroll = () => {
        navbar.classList.remove("active");
    };

    // Dark Mode / Light Mode
    let darkmode = document.querySelector("#darkmode");

    darkmode.onclick = () => {
        if (darkmode.classList.contains("bx-moon")) {
            darkmode.classList.replace("bx-moon", "bx-sun");
            document.body.classList.add("active");
        } else {
            darkmode.classList.replace("bx-sun", "bx-moon");
            document.body.classList.remove("active");
        }
    };

    // Typewriter Effect
    const texts = ["Diet Coke", "My Website", "Final School Project"];
    let i = 0;
    const speed = 100; // The speed/duration of the effect in milliseconds

    function typeWriter() {
        if (i < texts.length) {
            let text = texts[i];
            let j = 0;
            const textLength = text.length;

            function type() {
                if (j < textLength) {
                    typewriterElement.textContent += text.charAt(j);
                    j++;
                    setTimeout(type, speed);
                } else {
                    i++;
                    setTimeout(typeWriter, 1000); // Wait for 1 second before starting the next text
                }
            }
            type();
        }
    }

    typeWriter();
});
