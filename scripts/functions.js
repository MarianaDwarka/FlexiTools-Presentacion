document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-toggle");
    const headerList = document.getElementById("ListaHeader");
  
    menuIcon.addEventListener("click", function () {
        ListaHeader.classList.toggle("active");
    });
  });