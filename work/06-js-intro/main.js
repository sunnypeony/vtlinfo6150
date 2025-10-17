"use strict";
(function () {

    const buttonEl = document.querySelector(".toggle-active");
    const subMenuEl = document.querySelector(".submenu");
    buttonEl.addEventListener("click", function () {
        console.log(1);
        subMenuEl.classList.toggle("active");
    });

})();