let navToggle = document.querySelector(".nav-toggle-button");
let menu = document.querySelector(".nav-mobile");

navToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  navToggle.classList.toggle("rotate");
});
window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".nav-mobile") && !target.closest(".nav-toggle-button")) {
    menu.classList.remove("show");
    navToggle.classList.remove("rotate");
  }
});
