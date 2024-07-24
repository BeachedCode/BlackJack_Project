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
    this.load.image('Card1', "assets/cardClubsA.png") //Ace = 1 point
    this.load.image('Card2', "assets/cardClubs2.png")
    this.load.image('Card3', "assets/cardClubs3.png")
    this.load.image('Card4', "assets/cardClubs4.png")
    this.load.image('Card5', "assets/cardClubs5.png")
    this.load.image('Card6', "assets/cardClubs6.png")
    this.load.image('Card7', "assets/cardClubs7.png")
    this.load.image('Card8', "assets/cardClubs8.png")
    this.load.image('Card9', "assets/cardClubs9.png")
    this.load.image('Card10', "assets/cardClubs10.png")
    this.load.image('Jack10', "assets/cardClubsJ.png") //Jack = 10 points
    this.load.image('King10', "assets/cardClubsK.png") //King = 10 points
    this.load.image('Queen10', "assets/cardClubsQ.png") //Queen = 10 Points
}

gameScene.create = function(){                                                      //Create
    this.add.sprite(0,0,'background');
}