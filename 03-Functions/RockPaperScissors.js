// creating function that returns user choice
const getUserChoice = (userInput) => {
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};

// creating function that generates random number and returns computer choice
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// function comparing user choice and computer choice/determines winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Draw!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
};

// shows result 
const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();

  console.log(`You threw - ${userChoice}`);
  console.log(`The computer threw - ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
