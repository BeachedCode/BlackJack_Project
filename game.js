let gameScene = new Phaser.Scene('Game');

let config = {
  type: Phaser.AUTO, 
  width: 1200, 
  height: 800, 
  scene: gameScene 
};

let game = new Phaser.Game(config);

gameScene.preload = function()
{
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
{
    let bg = this.add.sprite(0,0,'background');
    bg.setOrigin(0,0)

    let scoreGraphic = this.add.graphics();
    scoreGraphic.fillStyle(0x000000, 1);
    scoreGraphic.fillRect(0, 0, 1200, 50);

    this.add.sprite(1000,600,'Rules')

    //Setting the x value for top and bottom cards
    this.topCardX = 100;
    this.bottomCardX = 100;
    //Boolean values for start of the game
    this.gameStart = true;
    this.hiddenCard = true;
}

gameScene.update = function()
{
  this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  if (Phaser.Input.Keyboard.JustDown(this.spacebar))
  {
    if (this.gameStart) 
    {
      // Deal 2 cards to the dealer
      this.addCard(this.topCardX, 200);
      this.addCard(this.topCardX + 100, 200);
      this.topCardX += 200;

      // Deal 2 cards to the player
      this.addCard(this.bottomCardX, 650);
      this.addCard(this.bottomCardX + 100, 650);
      this.bottomCardX += 200;
      this.gameStart = false;
    } 
    else 
    {
      //Deal 1 card to the dealer
      this.addCard(this.topCardX, 200);
      this.topCardX += 100;

      //Deal 1 card to the player
      this.addCard(this.bottomCardX, 650);
      this.bottomCardX += 100;
    }
  }
}

gameScene.addCard = function(x, y) 
{
  const cardNames = ['Card1', 'Card2', 'Card3', 'Card4', 'Card5', 'Card6', 'Card7', 'Card8', 'Card9', 'Card10', 'Jack10', 'King10', 'Queen10'];
  const randomCard = cardNames[Math.floor(Math.random() * cardNames.length)];

  if (y === 200 && this.hiddenCard) 
  {
    this.add.sprite(x, y, 'Blank');
    this.hiddenCard = false;
  } 
  else 
  {
    this.add.sprite(x, y, randomCard);
  }
}

//TO DO:
//Need to assign a point system to the cards
//Probably need to add an indicator that shows which side won.
//Need to add a STAND function.
//Maybe reveal hidden card in STAND function and add points to dealer before determining winner (Apply math.random to hidden card and replace hidden card with random card)
//Implement battery API (or some other API)