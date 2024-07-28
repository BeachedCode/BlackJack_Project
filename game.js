let gameScene = new Phaser.Scene('Game');

let config = {
  type: Phaser.AUTO, 
  width: 1200, 
  height: 800, 
  scene: gameScene 
};

let game = new Phaser.Game(config);

gameScene.preload = function()
{                                                                                         //Preload
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
    this.load.image('Rules', "assets/Rules.png")
    
}

gameScene.create = function()
{                                                                                         //Create
    let bg = this.add.sprite(0,0,'background');
    bg.setOrigin(0,0)

    let scoreGraphic = this.add.graphics();
    scoreGraphic.fillStyle(0x000000, 1); //Will likely use an API for score(?)
    scoreGraphic.fillRect(0, 0, 1200, 50);

    //Card Placement Example
    //this.add.sprite(150,650,'Card1') //Cards Increment by 100 per card
    //this.add.sprite(250,650,'Card2')
    //this.add.sprite(350,650,'King10')

    //this.add.sprite(150,200,'Card3')
    //this.add.sprite(250,200,'Card6')
    //this.add.sprite(350,200,'Blank')

    this.add.sprite(1000,600,'Rules')

    //Setting the x value for top and bottom cards
    this.topCardX = 150;
    this.bottomCardX = 150;
    
}

gameScene.update = function() 
{
  this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  if (Phaser.Input.Keyboard.JustDown(this.spacebar))
  {
    //Randomly selecting cards
    const cardNames = ['Card1', 'Card2', 'Card3', 'Card4', 'Card5', 'Card6', 'Card7', 'Card8', 'Card9', 'Card10', 'Jack10', 'King10', 'Queen10'];
    const randomTopCard = cardNames[Math.floor(Math.random() * cardNames.length)];
    const randomBottomCard = cardNames[Math.floor(Math.random() * cardNames.length)];

    // Add cards to the top and bottom rows with increments
    this.add.sprite(this.topCardX, 200, randomTopCard);
    this.topCardX += 100;

    this.add.sprite(this.bottomCardX, 650, randomBottomCard);
    this.bottomCardX += 100;
  }
}

//TO DO:
//Need to assign a point system to the cards (Maybe make use of API here?).
//Need to make the first card on the dealer side hidden. **
//Need to start with 2 cards instead of 1 on the first spacebar(HIT) press. **
//** - Could be done in one function instead of being seperate.
//Probably need to add an indicator that shows which side won.
//Need to add a STAND function.