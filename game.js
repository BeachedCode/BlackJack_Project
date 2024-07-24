let gameScene = new Phaser.Scene('Game');

let config = {
  type: Phaser.AUTO, 
  width: 1000, 
  height: 800, 
  scene: gameScene 
};

let game = new Phaser.Game(config);

gameScene.preload = function(){                                                     //Preload
    this.load.image('background', "assets/background1.png");
    

}

gameScene.create = function(){                                                      //Create
    this.add.sprite(0,0,'background');
}