// Function to start the game
function startGame() {
  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let userGuess = 0;

  // Loop until the user guesses the correct number
  while (userGuess !== randomNumber) {
    // Ask the user for input
    userGuess = parseInt(prompt('Guess the number between 1 and 10:'));
    attempts++; // Increase the attempt count

    // Check the user's guess and give feedback
    if (userGuess < randomNumber) {
      alert('Too low! Try again.');
    } else if (userGuess > randomNumber) {
      alert('Too high! Try again.');
    }
  }

  // When the user guesses the correct number, congratulate them and show the number of attempts
  alert(`Congratulations! You guessed the correct number: ${randomNumber}.\nIt took you ${attempts} attempts.`);
}
