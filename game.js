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
    this.load.image('Blank', "assets/cardBack_green2")
    this.load.image('HIT', "assets/HITExample") //Will be replaced in the future, also need to add a "Pass" button
}

gameScene.create = function(){                                                      //Create
    let bg = this.add.sprite(0,0,'background');
    bg.setOrigin(0,0)

    let scoreGraphic = this.add.graphics();
    scoreGraphic.fillStyle(0x000000, 1); //Will likely use an API for score(?)
    scoreGraphic.fillRect(0, 0, 1000, 50);

    //Card Placement Example
    this.add.sprite(250,650,'Card1') //Cards Increment by 100 per card
    this.add.sprite(350,650,'Card2')
    this.add.sprite(450,650,'King10')

    this.add.sprite(250,200,'Card3')
    this.add.sprite(350,200,'Card6')
    this.add.sprite(450,200,'Blank')

    this.add.sprite(800,600,'HIT')
    this.add.sprite(800,700,'HIT')

}

gameScene.update = function(){                                                      //Update

}