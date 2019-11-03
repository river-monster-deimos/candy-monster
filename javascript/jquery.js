"use strict";
var themeSong = new Audio('../sounds/intro.mp3');
var lvl1 = new Audio('../sounds/lvl1.mp3');
var lvl2 = new Audio('../sounds/lvl2.mp3');
var lvl3 = new Audio('../sounds/lvl3.mp3');
var lvl4 = new Audio('../sounds/lvl4.mp3');


$(document).ready(function() {
    $("#gameOpening").click(function () {
        $(this).css('display', 'none');
        $('#startScreen').css('display', 'flex');
        themeSong.play();
    });


});

