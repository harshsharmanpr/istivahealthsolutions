let btn = document.querySelector("nav .fa-bars");
let navbar = document.querySelector(".navbar");
btn.addEventListener("click", () => {
  navbar.classList.toggle("hide-menu");
});
