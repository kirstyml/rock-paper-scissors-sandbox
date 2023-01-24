const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
    const playerOneImage = document.getElementById("player-one-move__img");
    playerOneImage.src = `./images/${moveOne}.png`;
    const playerTwoImage = document.getElementById("player-two-move__img");
    playerTwoImage.src = `./images/${moveTwo}.png`;
    const tag = document.createElement("p");
    tag.setAttribute("id", "outcome");
    const outcomeText = document.createTextNode(outcome);
    tag.appendChild(outcomeText);
    const body = document.querySelector("body");
    body.appendChild(tag);
  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  