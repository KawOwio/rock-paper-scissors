//0 == Rock
//1 == Paper
//2 == Scissors

function computerPlay()
{
    var rng = Math.floor(Math.random() * Math.floor(3));
    if (rng == 0)
    {
        rng = "rock";
    }
    else if (rng == 1)
    {
        rng = "paper";
    }
    else if (rng == 2)
    {
        rng = "scissors";
    }
    else 
    {
        rng = "Something went wrong"
    }
    return rng;
}

function playerPlay(e)
{
    if(winner)
    {
        winner.remove();
    }

    var playerSelection = e.target.id;
    var computerSelection = computerPlay();

    var roundWinner = playRound(playerSelection, computerSelection);
    updateScore(roundWinner);
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == 'rock')
    {
        if (computerSelection == 'rock')
        {
            round.textContent = "You tied!";
            return 2;
        }
        else if (computerSelection == 'paper')
        {
            round.textContent = "You Lose! Paper beats Rock!";
            return 0;
        }
        else
        {
            round.textContent = "You Win! Rock beats Scissors!";
            return 1;
        }

    }
    else if (playerSelection == 1)
    {
        if (computerSelection == 'rock')
        {
            round.textContent = "You Win! Paper beats Rock!";
            return 1;
        }
        else if (computerSelection == 'paper')
        {
            round.textContent = "You tied!";
            return 2;
        }
        else
        {
            round.textContent = "You Lose! Scissors beats Paper!";
            return 0;
        }
    }
    else 
    {
        if (computerSelection == 'rock')
        {
            round.textContent = "You Lose! Rock beats Scissors!";
            return 0;
        }
        else if (computerSelection == 'paper')
        {
            round.textContent = "You Win! Scissors beats Paper!";
            return 1;
        }
        else
        {
            round.textContent = "You tied!";
            return 2;
        }
    }
}

function updateScore(roundWinner)
{
    if(roundWinner == 0)
    {
        cS++;
        cpuScore.textContent = "CPU: " + cS;
    }
    else if(roundWinner == 1)
    {
        pS++;
        playerScore.textContent = "Player: " + pS;
    }

    if(pS == 5 || cS == 5)
    {
        if(pS > cS)
        {
            winner.textContent = "Player won!"
        }
        else
        {
            winner.textContent = "CPU won!"
        }

        pS = 0;
        cS = 0;
        playerScore.textContent = "Player: " + pS;
        cpuScore.textContent = "CPU: " + cS;
        
        round.textContent += " Make a choice to restart a game!"

        //score.classList.toggle('score');

        score.appendChild(winner);
    }
}

var score = document.querySelector('#score-screen');

score.style.borderStyle = 'solid';
score.style.borderColor = 'black';
score.style.background = 'pink';

var playerScore = document.createElement('div');
var cpuScore = document.createElement('div');
var round = document.createElement('div');
var winner = document.createElement('div');

playerScore.classList.add('player-score');
cpuScore.classList.add('cpu-score');

round.textContent = "Make a choice!";
playerScore.textContent = "Player: 0";
cpuScore.textContent = "CPU: 0";

score.appendChild(round);
score.appendChild(playerScore);
score.appendChild(cpuScore);

const buttons = document.querySelectorAll('button');

var temp = 0;
var pS = 0;
var cS = 0;

buttons.forEach((button) =>
{
    button.addEventListener('click', playerPlay);
});