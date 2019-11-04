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
//konami code
//prompt user to enter 1 2 3 or 4;
//var level = prompt;
//change screen to corresponding textnode
    var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA', 'Enter'];
    var konamiCodePosition = 0;


    function restart() {
        konamiCodePosition = 0;
        return true;
    }

    $(document).on('keydown', function(e) {
        var key = e.originalEvent.code;
        var requiredKey = konamiCode[konamiCodePosition];
        if (key === requiredKey) {
            konamiCodePosition++;
            if (konamiCodePosition === konamiCode.length) {
                var level = parseFloat(prompt('Enter 2, 3, or 4 to change level.'));
                switch (level) {
                    case 2:
                        state = {};
                        themeSong.pause();
                        lvl2.play();
                        showTextNode(6);
                        document.getElementById("girl").style.display = "none";
                        document.getElementById("boy").style.display = "block";
                        document.getElementById("startScreen").style.display = "none";
                        document.getElementById("gameScreen").style.display = "block";
                        document.getElementById("mainScreen").className = "rpgui-container framed lvl2";
                        break;
                    case 3:
                        state = {};
                        themeSong.pause();
                        lvl3.play();
                        showTextNode(9);
                        document.getElementById("girl").style.display = "none";
                        document.getElementById("boy").style.display = "block";
                        document.getElementById("startScreen").style.display = "none";
                        document.getElementById("gameScreen").style.display = "block";
                        document.getElementById("mainScreen").className = "rpgui-container framed lvl3";
                        break;
                    case 4:
                        state = {};
                        themeSong.play();
                        showTextNode(12);
                        document.getElementById("girl").style.display = "none";
                        document.getElementById("boy").style.display = "block";
                        document.getElementById("startScreen").style.display = "none";
                        document.getElementById("gameScreen").style.display = "block";
                        document.getElementById("mainScreen").className = "rpgui-container framed lvl4";
                        break;

                }
            }
        }else {
    konamiCodePosition = 0;
}
});

});


