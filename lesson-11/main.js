let playGame = confirm("Shall we play rock, paper, scissors?");

if(playGame){
    let playerChoice = prompt("Rock, paper or scissors?");
    if(playerChoice){
        playerChoice = playerChoice.trim().toLowerCase();
        let choices = ['rock','paper','scissors'];
        let computerChoiceValue = Math.floor(Math.random() * 3);
        let computerChoice = choices[computerChoiceValue];
        let gameResult;
        switch(playerChoice){

            case 'rock':
            gameResult = computerChoice === playerChoice ? 'tie' : computerChoice === 'paper' ? 'computer wins' : 'player wins';
            alert(`Player: ${playerChoice}\nComputer: ${computerChoice}\n\nResult: ${gameResult}`);
            break;

            case 'paper':
            gameResult = computerChoice === playerChoice ? 'tie' : computerChoice === 'rock' ? 'player wins' : 'computer wins';
            alert(`Player: ${playerChoice}\nComputer: ${computerChoice}\n\nResult: ${gameResult}`);
            break;

            case 'scissors':
            gameResult = computerChoice === playerChoice ? 'tie' : computerChoice === 'paper' ? 'player wins' : 'computer wins';
            alert(`Player: ${playerChoice}\nComputer: ${computerChoice}\n\nResult: ${gameResult}`);
            break;

            default:
            alert("You did not enter rock, paper or scissors.");

        }
        let playAgain = confirm('Want to play again?');
        // The simplest way to refresh a page in JavaScript is to use the location.reload() method. 
        // This method reloads the current web page from the server, discarding the current content and loading the latest content.
        playAgain ? location.reload() : alert('Okay, thanks for playing!');
    }else{
        alert("You gave up? Okay, maybe next time.");
    }
}else{
    alert("Okay, maybe next time.");
}