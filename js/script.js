const navbar = document.querySelector(".navbar");
document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
};
const menu = document.querySelector("#menu-icon");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
