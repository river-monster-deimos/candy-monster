let gameScene = new Phaser.Scene('Game');

gameScene.init = function(){
    this.playerSpeed = 3;
};

gameScene.preload = function () {
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/finalpumpkinking.png');
    this.load.image('enemy1', 'assets/gummonster.png');
    this.load.image('enemy2', 'assets/gummonster.png');
};

gameScene.create = function () {
   let bg = this.add.sprite(0, 0, 'background');

   bg.setOrigin(0,0);

    this.player = this.add.sprite(50,180, 'player');
    this.player.setScale(0.025);
    // player.width = 40;player.height = 25;

    this.enemy1 = this.add.sprite(250, 180, 'enemy1');
    this.enemy1.setScale(0.04);

    // this.enemy1.angle = 45;

    this.enemy2 = this.add.sprite(500, 180, 'enemy2');
    this.enemy2.setScale(0.1);

    // enemy2.setAngle(-45);

};

gameScene.update = function () {

    if (this.input.activePointer.isDown){
        this.player.x += this.playerSpeed;
    }


    this.enemy1.angle += 1;
    // this.enemy2.angle += .5;

    if (this.player.scaleX < 0.05) {
        this.player.scale += 0.001;
    }
};




let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};


let game = new Phaser.Game(config);

