const newGameButton = document.getElementById("newGameButton");
const objective = document.getElementById("objective");
const diceImg1 = document.getElementById("diceImg1");
const rollDice = document.getElementById("rollDice");
const diceNum1 = document.getElementById("diceNum1");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const playAgain = document.getElementById("playAgain");

let player1Score = 0;
let currentPlayer = 0;
let playAgainAct = 0;

newGameButton.addEventListener("click", () =>{
    currentPlayer = 1;
    objective.innerHTML = ("Press Roll Dice and score points based on the roll of the dice. If you hit 20 or more you win. If you roll a 1 you loose.");
})

rollDice.addEventListener("click", () =>{
    if(currentPlayer == 1){
        let diceResult1 = Math.floor(Math.random() * 6 + 1);
        diceNum1.src = `./${diceResult1}.jpg`;
            
        if(diceResult1 == 1){
            player1Score = 0;
            player1Scoreboard.innerHTML = 0;
            objective.innerHTML = ("You Lose. Press Play Again if you want to Play Again.");
            playAgainAct = 1;
            currentPlayer = 0;
        }
        else{
            player1Score += diceResult1;
            player1Scoreboard.innerHTML = (player1Score);
            if(player1Score >= 20){
                objective.innerHTML = ("You Win. Press Play Again if you want to Play Again");
                playAgainAct = 1;
                currentPlayer = 0;
            }
        }
    }
});

playAgain.addEventListener("click", () =>{
    if(playAgainAct == 1){
        objective.innerHTML = ("Press Roll Dice and score points based on the roll of the dice. If you hit 20 or more you win. If you roll a 1 you loose.");
        player1Score = 0;
        player1Scoreboard.innerHTML = 0;
        diceNum1.src = "";
        currentPlayer = 1;
    };
});