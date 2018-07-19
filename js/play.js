"use strict";

const guessLetter = document.querySelector("#letter-guess");

let guesses = [];
let totalScore = 0;
let wrongAnswers = 6;
let letterPosition = [];
let wrongLetters = [];

//TODO:Improvements:make the input not function if empty array & convert to lowercase
//TODO:Improvements:have validation entered to make letters into uppercase
//TODO:Improvements:don't accept blank or already input letters

//event listener to submit the user guess
guessLetter.addEventListener("click", evt => {
  evt.preventDefault();
  getLetter();
  searchWord();
  wrongLetter(wrongAnswers);
  lost(wrongAnswers);
  win();
});

//function to get and store the letter
function getLetter() {
  guesses.pop(guess.value);
  guesses.push(guess.value);
  checkLetter(letterArray, guesses);
  //resets the input field back to blank instead of keeping input letter
  document.getElementById("guess").value = "";
};

//compare each input with all of the letters within the string in the array
function checkLetter() {
  if (letterArray.includes(guesses[0]) == false) {
    storeWrong();
    showWrong();
  };
};

//tracks the incorrect guessed letters
function storeWrong() {
  wrongAnswers = parseInt(wrongAnswers - 1);
  wrongLetters.pop(guesses[0]);
  wrongLetters.push(guesses[0]);
};

//displays wrong guesses on screen
function showWrong() {
  let incorrect = document.createElement("div");
  incorrect.setAttribute("class", "wrong-letter");
  document.querySelector(".wrong").appendChild(incorrect);
  incorrect.innerText = wrongLetters;
};

//compares the input letter against all of the letters within the word being guessed
function searchWord() {
  for (let i in letterArray) {
    if (guesses[0] === letterArray[i]) {
      totalScore = parseInt(totalScore + 1);
      storeIndex(i);
      showLetter();
    };
  };
};

//stores the index position of the letter if the user guesses a letter in the word
function storeIndex(i) {
  letterArray[i] === guesses;
  letterPosition.pop(i);
  letterPosition.push(i);
};

//displays the letter within the box when guessed correctly
function showLetter() {
  let blanks = document.getElementsByClassName("letter-display")[letterPosition];
  blanks.innerText = guesses;
};

//count down the number of wrong guesses
function wrongLetter(wrongAnswers) {
  let countdown = document.getElementById("number");
  countdown.innerText = wrongAnswers;
};

//display if won
function win() {
  if (totalScore === letterArray.length) {
    let message = ("ADMIN ACCESS GRANTED!");
    gameOver(message)
  };
};

//if the attempts left hits 0 and user lost
function lost() {
  if (wrongAnswers === 0) {
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