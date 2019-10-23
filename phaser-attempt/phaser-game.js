let gameScene = new Phaser.Scene('Game');

gameScene.preload = function () {
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/finalpumpkinking.png');
};

gameScene.create = function () {
   let bg = this.add.sprite(0, 0, 'background');

   bg.setOrigin(0,0);

    let player = this.add.sprite(50,180, 'player');
    player.setScale(0.025);
    // player.width = 40;player.height = 25;
};




let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};


let game = new Phaser.Game(config);

