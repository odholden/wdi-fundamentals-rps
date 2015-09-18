////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move = move || getInput();
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
            return winner = 'player';
        }
        else if (computerMove === 'paper') {
            return winner = 'computer';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            return winner = 'player';
        }
        else if (computerMove === 'scissors'){
            return winner = 'computer';
        }
    }
    else if (playerMove === 'scissors') {
        if (computerMove === 'paper') {
            return winner = 'player';
        }
        else if (computerMove === 'rock') {
            return winner = 'computer';
        }
    }
    else return winner = 'tie';
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        console.log("the score is currently " + playerWins + " to " + computerWins);
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove,computerMove);
        console.log("player chose " + playerMove + " while computer chose " + computerMove);
        if (winner = 'player') {
            playerWins += 1;
            console.log("player wins this round!");
        }
        else if (winner = 'computer') {
            computerWins += 1;
            console.log("computer wins this round!");
        }
        else console.log("round tied.");
    }
    console.log("GAME OVER");
    return [playerWins, computerWins];
}

playToFive()