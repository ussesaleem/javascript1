(function () {
    'use strict';

    // var myContent = document.getElementById("content");
    // var myDate = document.getElementById("date");

    // myContent.innerHTML = '<h3>This is a template!</h3>';
    // myDate.innerHTML = new Date();

    var elfenbenskusten = document.getElementById('elfenbenskusten');
    var flagTargetElfenbenskusten = document.getElementById('flagTargetElfenbenskusten');
    var sverige = document.getElementById('sverige');
    var flagTargetSverige = document.getElementById('flagTargetSverige');
    var gambia = document.getElementById('gambia');
    var flagTargetGambia = document.getElementById('flagTargetGambia');
    var grekland = document.getElementById('grekland');
    var flagTargetGrekland = document.getElementById('flagTargetGrekland');

    var flagElfenbenskusten =
    `<div class='flag elfenbenskusten'>
        <div class='part1'></div>
        <div class='part2'></div>
    </div>`;
    var flagSverige =
    `<div class='flag sverige'>
        <div class='part1'></div>
        <div class='part2'></div>
        <div class='part3'></div>
        <div class='part4'></div>
        <div class='part5'></div>
        <div class='part6'></div>
        <div class='part7'></div>
    </div>`;
    var flagGambia =
    `<div class='flag gambia'>
        <div class='part1'></div>
        <div class='part2'></div>
        <div class='part3'></div>
    </div>`;
    var flagGrekland =
    `<div class='flag grekland'>
        <div class='part1'></div>
        <div class='part2'></div>
        <div class='part3'></div>
        <div class='part4'></div>
        <div class='part5'></div>
        <div class='part6'></div>
        <div class='part7'></div>
        <div class='part8'></div>
        <div class='part9'></div>
    </div>`;

    elfenbenskusten.addEventListener("click", function() {
        flagTargetElfenbenskusten.innerHTML = flagElfenbenskusten;
    });
    sverige.addEventListener("click", function() {
        flagTargetSverige.innerHTML = flagSverige;
    });
    gambia.addEventListener("click", function() {
        flagTargetGambia.innerHTML = flagGambia;
    });
    grekland.addEventListener("click", function() {
        flagTargetGrekland.innerHTML = flagGrekland;
    });

    window.console.log('Sandbox is ready!');
})();
