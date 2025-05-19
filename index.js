 document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-toggle').addEventListener('click', function () {
      document.getElementById('navMenu').classList.toggle('show');
    })
});


    const toggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });