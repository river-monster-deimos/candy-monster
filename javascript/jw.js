var context, controller, hero, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

hero = {
    height:32,
    jumping:true,
    width:32,
    x:144,
    x_velocity:0,
    y:0,
    y_velocity:0
};

controller = {
    left: false,
    right: false,
    up: false,
    keyListener:function (event) {

        var key_state = (event.type == "keydown")?true:false;

        switch(event.keyCode) {
            case 37:
                controller.left = key_state;
                break;
            case 38:
                controller.up = key_state;
                break;
            case 39:
                controller.right = key_state;
                break;
        }
    }
};

loop = function() {

    if (controller.up && hero.jumping == false) {
        hero.y_velocity -= 20;
        hero.jumping = true;
    }
    if (controller.left){
        hero.x_velocity -= 0.5;
    }
    if (controller.right) {
        hero.x_velocity += 0.5;
    }

    hero.y_velocity += 1.5;//gravity
    hero.x += hero.x_velocity;
    hero.y += hero.y_velocity;
    hero.x_velocity *= 0.9;//friction
    hero.y_velocity *= 0.9;//friction

    //if hero is falling below floor line
    if (hero.y > 180 - 16 - 32){//180 bottom of screen 16 floor of level 32 top of hero

        hero.jumping = false;
        hero.y = 180 - 16 - 32;
        hero.y_velocity = 0;//prevents hero from continuing velocity
    }

    //if hero is going off to the left of the screen
    if (hero.x < -32){
        hero.x = 320;
    } else if (hero.x > 320) { //if hero goes past right boundary
        hero.x = -32;
    }

    context.fillStyle = "#202020";
    context.fillRect(0, 0, 320, 180);
    context.fillStyle = "#ff0000"
    context.beginPath();
    context.rect(hero.x, hero.y, hero.width, hero.height);
    context.fill();
    context.strokeStyle = "#202830";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 164);
    context.lineTo(320, 164);
    context.stroke();

    window.requestAnimationFrame(loop);

};


window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);