(function () {
    'use strict';

    var flags = document.getElementById("flags");

    var flag = {
        init: function(html) {
            this.html = html;
        },
        draw: function() {
            flags.innerHTML += this.html;
        }
    };

    var elfenbenskustenFlag = Object.create(flag);
    var gambiaFlag = Object.create(flag);
    var sverigeFlag = Object.create(flag);
    var greklandFlag = Object.create(flag);

    elfenbenskustenFlag.init("<div class='flag elfenbenskusten'>" +
        "<div class='part1'></div><div class='part2'></div></div>");
    gambiaFlag.init("<div class='flag gambia'>" +
        "<div class='part1'></div><div class='part2'></div><div class='part3'></div>" +
        "</div>");
    sverigeFlag.init("<div class='flag sverige'>" +
        "<div class='part1'></div><div class='part2'></div><div class='part3'>" +
        "</div></div>");
    greklandFlag.init("<div class='flag grekland'><div class='part1'></div>" +
        "<div class='part2'></div><div class='part3'></div><div class='part4'></div>" +
        "<div class='part5'></div><div class='part6'></div><div class='part7'></div>" +
        "<div class='part8'></div><div class='part9'></div></div>");

    var flagArray = [elfenbenskustenFlag, gambiaFlag, sverigeFlag, greklandFlag];

    for (var i = 0; i < flagArray.length; i++) {
        flagArray[i].draw();
    }


    window.console.log('Sandbox is ready!');
})();
