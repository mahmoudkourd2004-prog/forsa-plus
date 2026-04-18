window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    const content = document.querySelector(".main-content");

    setTimeout(() => {
        loader.classList.add("hide");
        content.style.display = "block";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }, 2000);
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});
