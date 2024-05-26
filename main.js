// Interactive Game
const Clicked = () => {

    let playGame = confirm("Shall we play rock, paper and scissors game?")

    if (playGame)
    {
        //play
        let playerchoice = prompt("Please enter Rock, Paper or Scissors.")
        if (playerchoice)
        {
            let playerOne = playerchoice.trim().toLowerCase();
            if (
                playerOne === "rock"  ||
                playerOne === "paper" ||
                playerOne === "scissors"
            )
            {
                let computerChoice = Math.floor(Math.random() * 3 + 1);
                let computer = 
                                computerChoice === 1 ? "rock" :
                                computerChoice === 2 ? "paper" :
                                "scissors";
                let result = playerOne === computer ? "Tie game!" :
                playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!` :
                playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!` :
                playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!` :
                `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne Wins!`;
                alert(result);

                //Play again
                let playAgain = confirm("Play again");
                playAgain ? Clicked(): alert("Ok, thanks for playing");
            }
            else {
                alert("You have not entered rock, paper or scissors")
            }
        }
        else 
        {
            alert("You changed your mind, maybe next time.")
        }

    }
    else
    {
        alert("Ok, maybe next time.")
    }

}
