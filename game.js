let gameScene = new Phaser.Scene('Game');

let config = {
  type: Phaser.AUTO, 
  width: 1200, 
  height: 800, 
  scene: gameScene 
};

let game = new Phaser.Game(config);
let userSum = 0;
let userScore = 0;
let dealerSum = 0;
let dealerScore = 0;
let winner;
let dealtCard;

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
  
  //Card Values
  this.cardValues = 
  {
    'Card1': 1,
    'Card2': 2,
    'Card3': 3,
    'Card4': 4,
    'Card5': 5,
    'Card6': 6,
    'Card7': 7,
    'Card8': 8,
    'Card9': 9,
    'Card10': 10,
    'Jack10': 10,
    'King10': 10,
    'Queen10': 10
  }

  //Card Array
  this.cardStack = [];

  //Score Display
  this.userScoreText = this.add.text(50, 510, `Player Score: ${userScore}`, { fontSize: 32, color: 'white' });
  this.dealerScoreText = this.add.text(50, 60, `Dealer Score: ${dealerScore}`, { fontSize: 32, color: 'white' });

  //Game Over Display
  this.winText = this.add.text(600, 25, 'Game Over! Press E to Reset.', { fontSize: 32, color: 'white' });
  this.winText.setOrigin(0.5);
  this.winText.setVisible(false);
}

gameScene.update = function()
{
  this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  this.clear = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

  if (Phaser.Input.Keyboard.JustDown(this.spacebar))
  {
    if (this.gameStart) 
    {
      // Deal 2 cards to the dealer
      this.addCard(this.topCardX, 200);
      this.addCard(this.topCardX + 150, 200);
      this.topCardX += 250;

      // Deal 2 cards to the player
      this.addCard(this.bottomCardX, 650);
      this.addCard(this.bottomCardX + 150, 650);
      this.bottomCardX += 250;
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
  
  if (Phaser.Input.Keyboard.JustDown(this.enter))
  {
    this.revealHiddenCard();
    this.checkWinner();
    //Test Score Display
    console.log(`Winner: ${winner}`);
    console.log(`Player's Points: ${userSum}`);
    console.log(`Dealer's Points: ${dealerSum}`);
    console.log(`Player's Score: ${userScore}`);
    console.log(`Dealer's Score: ${dealerScore}`);
    //Update Score Board
    this.userScoreText.setText(`Player Score: ${userScore}`);
    this.dealerScoreText.setText(`Dealer Score: ${dealerScore}`);
    //Game Over Text
    this.winText.setVisible(true);
  }

  if (Phaser.Input.Keyboard.JustDown(this.clear))
  {
    this.cardStack.forEach(card => card.destroy());
    this.cardStack = [];
    this.topCardX = 100;
    this.bottomCardX = 100;
    userSum = 0;
    dealerSum = 0;
    this.gameStart = true;
    this.hiddenCard = true;
    this.winText.setVisible(false);
  }
}

gameScene.addCard = function(x, y) 
{
  const cardNames = ['Card1', 'Card1', 'Card1', 'Card2', 'Card2', 'Card2', 'Card3', 'Card3', 'Card3', 'Card4', 'Card4', 'Card4', 'Card5', 'Card5', 'Card5', 'Card6', 'Card6', 'Card6', 'Card7', 'Card8', 'Card9', 'Card10', 'Jack10', 'King10', 'Queen10'];
  const randomCard = cardNames[Math.floor(Math.random() * cardNames.length)];
  
  if (y === 200 && this.hiddenCard) 
  {
    dealtCard = this.add.sprite(x, y, 'Blank');
    this.hiddenCard = false;
  } 
  else 
  {
    if (y === 200) 
    {
      dealtCard = this.add.sprite(x, y, randomCard);
      dealerSum += this.cardValues[randomCard];
    } 
    else 
    {
      dealtCard = this.add.sprite(x, y, randomCard);
      userSum += this.cardValues[randomCard];
    }
  }

  this.cardStack.push(dealtCard)
}

gameScene.checkWinner = function()
{
  if (dealerSum > 21) {
    winner = 'Player';
    userScore += 1;
  }
  else if (userSum > 21) {
    winner = 'Dealer';
    dealerScore += 1;
  } 
  else if (userSum === 21) {
    winner = 'Player';
    userScore += 1;
  } 
  else if (dealerSum === 21) {
    winner = 'Dealer';
  } 
  else if (userSum === dealerSum) {
    winner = 'Draw';
  } 
  else {
    // whoever's closer to 21 wins
    winner = userSum > dealerSum ? 'Player' : 'Dealer';
    if(winner === 'Player')
    {
      userScore += 1;
    }
    else
    {
      dealerScore += 1;
    }
  }
}

gameScene.revealHiddenCard = function() 
{
  const cardNames = ['Card1', 'Card2', 'Card3', 'Card4', 'Card5', 'Card6', 'Card7', 'Card8', 'Card9', 'Card10', 'Jack10', 'King10', 'Queen10'];
  const randomCard = cardNames[Math.floor(Math.random() * cardNames.length)];
  dealtCard = this.add.sprite(100, 200, randomCard);
  dealerSum += this.cardValues[randomCard];
  this.cardStack.push(dealtCard);
}