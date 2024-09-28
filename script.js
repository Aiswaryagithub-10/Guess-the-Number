function startGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let userGuess = 0;

  while (userGuess !== randomNumber) {
    userGuess = parseInt(prompt('Guess the number between 1 and 10:'));
    attempts++; // Increase the attempt count

    if (userGuess < randomNumber) {
      alert('Too low! Try again.');
    } else if (userGuess > randomNumber) {
      alert('Too high! Try again.');
    }
  }

  alert(`Congratulations! You guessed the correct number: ${randomNumber}.\nIt took you ${attempts} attempts.`);
}
