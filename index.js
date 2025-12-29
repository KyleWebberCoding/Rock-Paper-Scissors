const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else {
    console.log("Please use rock, paper or scissors");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This was a tie";
  }

  if (userChoice === "rock") {
    return computerChoice === "scissors"
      ? "The user won"
      : "The computer won";
  }

  if (userChoice === "paper") {
    return computerChoice === "rock"
      ? "The user won"
      : "The computer won";
  }

  if (userChoice === "scissors") {
    return computerChoice === "paper"
      ? "The user won"
      : "The computer won";
  }
};

function playGame() {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
