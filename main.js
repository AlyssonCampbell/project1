console.log("javascript running & ready to code! :D");
//make word bank with all words to choose from for password
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

//set an array with the word(s) that will be guessed
// Make an array of words
// Make another array for the selected word broken into just letters
//create an input field and a button to submit a guess from the user
let guesses = [];
let letterArray = [];
let totalScore = [0];
let indices = [];
let wrongLetters = [];
let wrongAnswers = [6];

let wordArray = [wordBank[Math.floor(Math.random() * wordBank.length)]];

console.log("word array", wordArray);

//create function to pick a word from the word array, then split it into
//a new array with each character separated
function makeLetterArray(wordArray) {
  letterArray = wordArray.split("");
}
makeLetterArray(wordArray[0]);

//Run a for loop to generate boxes for the game
//pieces based on the array length of the word chosen
const letterDisplay = document.querySelector(".letters");
for (let index = 0; index < letterArray.length; index++) {
  let boxes = document.createElement("div");
  boxes.setAttribute("class", "letter-display");
  document.querySelector(".letters").appendChild(boxes);
  boxes.innerText = "";
}

//create array to display the incorrect letters input
//using similar code from the letter displau

//create event listenener for when submit button is clicked-input the letter input
//into the guesses array
//don't need to store the guesses within the array since each letter will be compared indivudually
//moved function within the check letter function to run at same time so it could
//use the same words

const button = document.querySelector("button");
const guessLetter = document.querySelector("#letter-guess");

guessLetter.addEventListener("click", evt => {
  evt.preventDefault();
  guesses.pop(guess.value);
  guesses.push(guess.value);
  checkLetter(letterArray, guesses);
  document.getElementById("guess").value = "";
});

//compare each input with all of the letters within the string in the array
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

//grab boxes from ther dom
//find the index of all of the letter array that it matches
//once found set inner text of boxes to the letters
function showLetter() {
  let blanks = document.getElementsByClassName("letter-display")[indices];
  blanks.innerText = guesses;
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