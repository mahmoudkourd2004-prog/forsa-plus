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
const navMenu = document.querySelector(".navbar nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});
