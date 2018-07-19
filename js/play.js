"use strict";

const guessLetter = document.querySelector("#letter-guess");

let score = {
  totalScore: 0,
  wrongAnswers: 6
};
let letters = {
  guesses: [],
  letterPosition: [],
  wrongLetters: []
};

//TODO:Improvements:make the input not function if empty array & convert to lowercase
//TODO:Improvements:have validation entered to make letters into uppercase
//TODO:Improvements:don't accept already input letters

//event listener to submit the user guess
guessLetter.addEventListener("click", evt => {
  if (guess.value !== "") {
    evt.preventDefault();
    getLetter();
    searchWord();
    lost(score.wrongAnswers);
    win();
  } else {
    console.log("enter an input!");
  }
});

//function to get and store the letter
function getLetter() {
  storeLetter();
  checkLetter(letterArray);
  wrongLetter(score.wrongAnswers);
  //resets the input field back to blank instead of keeping input letter
  document.getElementById("guess").value = "";
};

//stores the letter input
function storeLetter() {
  letters.guesses.pop(guess.value);
  letters.guesses.push(guess.value);
};

//compare each input with all of the letters within the string in the array
function checkLetter() {
  if (letterArray.includes(letters.guesses[0]) == false) {
    storeWrong();
    showWrong();
  };
};

//tracks the incorrect guessed letters
function storeWrong() {
  score.wrongAnswers = parseInt(score.wrongAnswers -1);
  letters.wrongLetters.pop(letters.guesses[0]);
  letters.wrongLetters.push(letters.guesses[0]);
};

//displays wrong guesses on screen
function showWrong() {
  let incorrect = document.createElement("div");
  incorrect.setAttribute("class", "wrong-letter");
  document.querySelector(".wrong").appendChild(incorrect);
  incorrect.innerText = letters.wrongLetters;
};

//compares the input letter against all of the letters within the word being guessed
function searchWord() {
  for (let i in letterArray) {
    if (letters.guesses[0] === letterArray[i]) {
      score.totalScore = parseInt(score.totalScore +1);
      storeIndex(i, letters.guesses);
      showLetter(letters.guesses);
    };
  };
};

//stores the index position of the letter if the user guesses a letter in the word
function storeIndex(i) {
  letterArray[i] === letters.guesses;
  letters.letterPosition.pop(i);
  letters.letterPosition.push(i);
};

//displays the letter within the box when guessed correctly
function showLetter() {
  let blanks = document.getElementsByClassName("letter-display")[letters.letterPosition];
  blanks.innerText = letters.guesses;
};

//count down the number of wrong guesses
function wrongLetter(wrongAnswers) {
  let countdown = document.getElementById("number");
  countdown.innerText = score.wrongAnswers;
};

//display if won
function win() {
  if (score.totalScore === letterArray.length) {
    let message = ("ADMIN ACCESS GRANTED!");
    gameOver(message)
  };
};

//if the attempts left hits 0 and user lost
function lost() {
  if (score.wrongAnswers === 0) {
    let message = ("UNAUTHORIZED USER DETECTED! SYSTEM RESETTING...");
    gameOver(message)
  };
};

//game over alert function
function gameOver(message) {
  setTimeout(function () {
    alert(message);
    location.reload();
  }, 500);
};