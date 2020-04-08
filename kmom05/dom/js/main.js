(function () {
    'use strict';

    var box1 = document.getElementById("box1");

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var boxHeight = box1.offsetHeight;
    var boxWidth = box1.offsetWidth;
    var zPosition = 0;

    box1.style.zIndex = zPosition;

    function printInfo() {
        console.log("Window height: " + windowHeight + "px");
        console.log("Window width: " + windowWidth + "px");
        console.log("Box height: " + boxHeight + "px");
        console.log("Box width: " + boxWidth + "px");
        console.log("Box position top: " + window.getComputedStyle(box1).top);
        console.log("Box position left: " + window.getComputedStyle(box1).left);
    }

    function centerBox() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        boxHeight = box1.offsetHeight;
        boxWidth = box1.offsetWidth;
        box1.style.top = (windowHeight / 2) - (boxHeight / 2) + "px";
        box1.style.left = (windowWidth / 2) - (boxWidth / 2) + "px";
    }

    window.addEventListener("resize", centerBox);

    box1.addEventListener("click", function(event) {
        box1.classList.toggle("selected");
        console.log(event);
    });

    function circular() {
        var allSelected = document.getElementsByClassName("selected");

        for (var i = 0; i < allSelected.length; i++) {
            allSelected[i].classList.toggle("circle");
        }
    }

    function sizeUp() {
        var allSelected = document.getElementsByClassName("selected");

        for (var i = 0; i < allSelected.length; i++) {
            allSelected[i].style.height = allSelected[i].offsetHeight + 10 + "px";
            allSelected[i].style.width = allSelected[i].offsetWidth + 10 + "px";
        }
        centerBox();
    }

    function sizeDown() {
        var allSelected = document.getElementsByClassName("selected");

        for (var i = 0; i < allSelected.length; i++) {
            allSelected[i].style.height = allSelected[i].offsetHeight - 10 + "px";
            allSelected[i].style.width = allSelected[i].offsetWidth - 10 + "px";
        }
        centerBox();
    }

    function colorChange() {
        var allSelected = document.getElementsByClassName("selected");

        for (var i = 0; i < allSelected.length; i++) {
            if (allSelected[i].classList.contains("green")) {
                allSelected[i].classList.replace("green", "yellow");
            } else if (allSelected[i].classList.contains("yellow")) {
                allSelected[i].classList.replace("yellow", "red");
            } else if (allSelected[i].classList.contains("red")) {
                allSelected[i].classList.replace("red", "blue");
            } else {
                allSelected[i].classList.replace("blue", "green");
            }
        }
    }

    function cloneElement() {
        var allSelected = document.querySelectorAll(".selected");

        for (var i = 0; i < allSelected.length; i++) {
            var duplicate = allSelected[i].cloneNode();

            duplicate.removeAttribute("id");
            zPosition += 1;
            duplicate.style.zIndex = zPosition;

            duplicate.addEventListener("click", function(event) {
                event.target.classList.toggle("selected");
            });
            document.body.appendChild(duplicate);

            duplicate.style.top = Math.floor(Math.random() *
                (window.innerHeight - duplicate.offsetHeight)) + "px";
            duplicate.style.left = Math.floor(Math.random() *
                (window.innerWidth - duplicate.offsetWidth)) + "px";
        }
        console.log("Number of boxes created: " + i);
    }

    function moveInZpos(index) {
        var allSelected = document.getElementsByClassName("selected");

        switch (index) {
            case "increase":
                for (var i = 0; i < allSelected.length; i++) {
                    allSelected[i].style.zIndex =
                        parseInt((allSelected[i]).style.zIndex) + 1;
                }
                break;
            case "decrease":
                for (i = 0; i < allSelected.length; i++) {
                    allSelected[i].style.zIndex -= 1;
                }
                break;
        }
    }

    function removeElement() {
        var allSelected = document.querySelectorAll(".selected");

        for (var i = 0; i < allSelected.length; i++) {
            document.body.removeChild(allSelected[i]);
        }
        console.log("Number of boxes deleted: " + i);
    }

    function moveElement(direction) {
        var allSelected = document.getElementsByClassName("selected");
        var step = 10;

        switch (direction) {
            case "up":
                for (var i = 0; i < allSelected.length; i++) {
                    allSelected[i].style.top =
                        (allSelected[i].offsetTop - step) + "px";
                }
                break;
            case "down":
                for (i = 0; i < allSelected.length; i++) {
                    allSelected[i].style.top =
                        (allSelected[i].offsetTop + step) + "px";
                }
                break;
            case "right":
                for (i = 0; i < allSelected.length; i++) {
                    allSelected[i].style.left =
                        (allSelected[i].offsetLeft + step) + "px";
                }
                break;
            case "left":
                for (i = 0; i < allSelected.length; i++) {
                    allSelected[i].style.left =
                        (allSelected[i].offsetLeft - step) + "px";
                }
                break;
        }
    }

    function unselect() {
        var allSelected = document.querySelectorAll(".selected");

        for (var i = 0; i < allSelected.length; i++) {
            allSelected[i].classList.remove("selected");
        }
    }

    function selectAll() {
        var allSelected = document.getElementsByClassName("box");

        for (var i = 0; i < allSelected.length; i++) {
            allSelected[i].classList.add("selected");
        }
        console.log(i + " boxes selected.");
    }

    function randomElement() {
        var copy = box1.cloneNode();
        var color = ["green", "yellow", "red", "blue"];

        copy.removeAttribute("id");
        copy.addEventListener("click", function() {
            event.target.classList.toggle("selected");
        });
        document.body.appendChild(copy);

        copy.style.top = Math.floor(Math.random() *
            (window.innerHeight - copy.offsetHeight)) + "px";
        copy.style.left = Math.floor(Math.random() *
            (window.innerWidth - copy.offsetWidth)) + "px";
        copy.style.borderRadius = Math.random() * 50 + "%";
        copy.classList.replace("green", color[Math.floor(Math.random() *
            (color.length))]);
        copy.classList.replace("yellow", color[Math.floor(Math.random() *
            (color.length))]);
        copy.classList.replace("red", color[Math.floor(Math.random() *
            (color.length))]);
        copy.classList.replace("blue", color[Math.floor(Math.random() *
            (color.length))]);
    }

    function disappear() {
        var allSelected = document.querySelectorAll(".box");

        for (var i = 0; i < allSelected.length; i++) {
            allSelected[i].addEventListener("dblclick", function(event) {
                event.target.classList.replace("size200", "animateSize");
                event.target.style.height = "2px";
                event.target.style.width = "2px";

                window.setTimeout(function() {
                    event.target.remove();
                }, 2000);
            });
        }
    }

    function fiveInOne() {
        var allSelected = document.querySelectorAll(".selected");
        var color = ["green", "yellow", "red", "blue"];
        var count = 0;

        var fiveTimes = setInterval(function () {
            for (var i = 0; i < allSelected.length; i++) {
                allSelected[i].style.top = Math.floor(Math.random() *
                    (window.innerHeight - allSelected[i].offsetHeight)) + "px";
                allSelected[i].style.left = Math.floor(Math.random() *
                    (window.innerWidth - allSelected[i].offsetWidth)) + "px";
                allSelected[i].style.borderRadius = Math.random() * 50 + "%";
                allSelected[i].classList.replace("green", color[Math.floor(Math.random() *
                    (color.length))]);
                allSelected[i].classList.replace("yellow", color[Math.floor(Math.random() *
                    (color.length))]);
                allSelected[i].classList.replace("red", color[Math.floor(Math.random() *
                    (color.length))]);
                allSelected[i].classList.replace("blue", color[Math.floor(Math.random() *
                    (color.length))]);
            }
            count += 1;
            if (count === 6) {
                clearInterval(fiveTimes);
            }
        }, 200);
    }

    function ownEvent() {
        var allSelected = document.querySelectorAll(".selected");

        randomElement();
        colorChange();

        for (var i = 0; i < allSelected.length; i++) {
            allSelected[i].style.borderRadius = Math.random() * 50 + "%";
            allSelected[i].style.top = Math.floor(Math.random() *
                (window.innerHeight - allSelected[i].offsetHeight)) + "px";
            allSelected[i].style.left = Math.floor(Math.random() *
                (window.innerWidth - allSelected[i].offsetWidth)) + "px";
            allSelected[i].style.height = Math.floor(Math.random() *
                (window.innerHeight - allSelected[i].offsetHeight)) + "px";
            allSelected[i].style.width = Math.floor(Math.random() *
                (window.innerWidth - allSelected[i].offsetWidth)) + "px";
        }
    }

    window.addEventListener("dblclick", disappear);
    window.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "e") {
            circular();
        } else if (key === "q") {
            sizeUp();
        } else if (key === "w") {
            sizeDown();
        } else if (key === "r") {
            colorChange();
        } else if (key === "t") {
            cloneElement();
        } else if (key === "s") {
            moveInZpos("increase");
        } else if (key === "a") {
            moveInZpos("decrease");
        } else if (key === "y") {
            removeElement();
        } else if (key === "ArrowUp") {
            event.preventDefault();
            moveElement("up");
        } else if (key === "ArrowDown") {
            event.preventDefault();
            moveElement("down");
        } else if (key === "ArrowRight") {
            event.preventDefault();
            moveElement("right");
        } else if (key === "ArrowLeft") {
            event.preventDefault();
            moveElement("left");
        } else if (key === "u") {
            unselect();
        } else if (key === "i") {
            selectAll();
        } else if (key === "p") {
            randomElement();
        } else if (key === "d") {
            fiveInOne();
        } else if (key === "o") {
            ownEvent();
        } else {
            console.log("Not a valid key command.");
        }
    });

    printInfo();
    centerBox();
})();
