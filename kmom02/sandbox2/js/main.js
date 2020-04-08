(function () {
    'use strict';

    var myDate = document.getElementById("date");
    var box = document.getElementsByClassName("box")[0];

    myDate.innerHTML = new Date();

    document.addEventListener("keydown", function(event) {
        var key = event.key;
        var left = box.offsetLeft;
        var top = box.offsetTop;
        var step = 10;

        switch (key) {
            case "ArrowUp":
                event.preventDefault();
                box.style.top = (top - step) + "px";
                break;
            case "ArrowDown":
                event.preventDefault();
                box.style.top = (top + step) + "px";
                break;
            case "ArrowLeft":
                event.preventDefault();
                box.style.left = (left - step) + "px";
                break;
            case "ArrowRight":
                event.preventDefault();
                box.style.left = (left + step) + "px";
                break;
        }
    });

    window.console.log('Sandbox is ready!');
})();
