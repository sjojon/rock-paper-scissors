const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }
    else {
        console.log('Syntax error: Choose rock, paper or scissors!')
    }
};

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'error';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'The user won (and cheated!)'
    }
    if (userChoice === computerChoice) {
        return 'This game was a tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won';
        }
        else {
            return 'The user won';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won';
        }
        else {
            return 'The user won';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won';
        }
        else {
            return 'The user won';
        }
    }
};

function playGame() {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();