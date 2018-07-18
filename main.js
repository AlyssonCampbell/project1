//TODO:See if the js files can be split
//TODO:update all the comments to be simplier and clearer
//TODO:possibly switch to jQuery?
let wordBank = [
  "password",
  "wasteland",
  "nukacola",
  "fallout",
  "finalpam",
  "ghoul",
  "radroach",
  "settlement",
  "nuclear",
  "jet",
  "mentat"
];

//TODO: Minimize the number of global variables
let guesses = [];
let letterArray = [];
let totalScore = [0];
let indices = [];
let wrongLetters = [];
let wrongAnswers = [6];
let wordArray = [wordBank[Math.floor(Math.random() * wordBank.length)]];
const button = document.querySelector("button");
const guessLetter = document.querySelector("#letter-guess");
const letterDisplay = document.querySelector(".letters");
//TODO: Get rid of unneeded console.logs
//WordArray console log is being left in so the array can be logged easily for testing
//console.log("word array", wordArray);

//function to split the randomly selected word into individual letters
function makeLetterArray(wordArray) {
  letterArray = wordArray.split("");
}
makeLetterArray(wordArray[0]);

//TODO:put this in a function?
for (let index = 0; index < letterArray.length; index++) {
  let boxes = document.createElement("div");
  boxes.setAttribute("class", "letter-display");
  document.querySelector(".letters").appendChild(boxes);
  boxes.innerText = "";
}

//event listener to submit the user guess
//have validation entered to make letters into uppercase
guessLetter.addEventListener("click", evt => {
  evt.preventDefault();
  //TODO:Make the guesses into it's own function
  guesses.pop(guess.value);
  guesses.push(guess.value);
  checkLetter(letterArray, guesses);
  document.getElementById("guess").value = "";
});

//compare each input with all of the letters within the string in the array
//TODO: reduce the size of the checkLetter function
function checkLetter() {
  console.log("this is the letter array", letterArray);
  if (letterArray.includes(guesses[0]) == false) {
    wrongAnswers = parseInt(wrongAnswers - 1);
    wrongLetters.pop(guesses[0]);
    wrongLetters.push(guesses[0]);
    const incorrectChoices = document.getElementById("#wrongLetters");
    let incorrect = document.createElement("div");
    incorrect.setAttribute("class", "wrong-letter");
    document.querySelector(".wrong").appendChild(incorrect);
    incorrect.innerText = wrongLetters;
    wrongLetter(wrongAnswers);
    gameOver(wrongAnswers);
    return;
  }
  for (let i = 0; i < letterArray.length; i++) {
    if (guesses[0] === letterArray[i]) {
      totalScore = parseInt(totalScore + 1);
      letterArray[i] === guesses;
      indices.pop(i);
      indices.push(i);
      console.log("total score", totalScore);
      showLetter();
    }
  }
  //grab boxes from ther dom
  //find the index of all of the letter array that it matches
  //once found set inner text of boxes to the letters
  function showLetter() {
    let blanks = document.getElementsByClassName("letter-display")[indices];
    blanks.innerText = guesses;
  }

  //function to check if the answer is right using total score
  //then give an alert or some other indication that the user won
  function checkWord() {
    if (totalScore === letterArray.length) {
      setTimeout(function () {
        alert("ADMIN ACCESS GRANTED!");
        location.reload();
      }, 1000);
    }
  }
  checkWord();
  //create function to count down the number of wrong guesses
  //grab the area the same as the letters but minus the tally
  function wrongLetter(wrongAnswers) {
    console.log("attempts left", wrongAnswers);
    let countdown = document.getElementById("number");
    countdown.innerText = wrongAnswers;
  }
}
//create a function where if the attempts left hits 0 then game over
//on game over-reload the page
function gameOver(wrongAnswers) {
  if (wrongAnswers == 0) {
    setTimeout(function () {
      alert("UNAUTHORIZED USER DETECTED! SYSTEM RESETTING...");
      location.reload();
    }, 1000);
  }
}