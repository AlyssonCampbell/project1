//what I need to do to get the hangman game running
//if the letter input within the field matches any of the letters in the answer
//then change the blank image with the ___ to the letter to display
//do this maybe with a style/switch?

//after MVP complete-add a "letters guessed" input area in the HTML

// Within the click function run another for loop that searches the chosen word array for the guesses letter
// If the guesses letter is found-add the class to that tile to display the letter found
// If not found give a sorry try again message for testing
//things to display
//the blank letter fields for the letters to be guessed
//the letters already guessed
//the number of incorrect guesses
//can display each letter, if the letter displayed is not included, style it red

console.log("javascript running & ready to code! :D");

//set an array with the word(s) that will be guessed
// Make an array of words
const wordArray = ["password"];
// Make another array for the selected word broken into just letters
//create an input field and a button to submit a guess from the user
let guesses = [];
let letterArray = [];
let totalScore = [0];
let indices = [];
let wrongLetters = [];
let wrongAnswers = [];
// let pickedWord = [];

// function pickWord(wordArray) {
//   pickedWord.pop(Math.floor(Math.random() * wordArray));
// }
// pickWord();
// console.log(pickedWord);

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
});

//compare each input with all of the letters within the string in the array
function checkLetter() {
  console.log("this is the letter array", letterArray);
  if (letterArray.includes(guesses[0]) == false) {
    wrongAnswers = parseInt(wrongAnswers + 1);
    wrongLetters.pop(guesses[0]);
    wrongLetters.push(guesses[0]);
    const incorrectChoices = document.getElementById("#wrongLetters");
    let incorrect = document.createElement("div");
    incorrect.setAttribute("class", "wrong-letter");
    document.querySelector(".wrong").appendChild(incorrect);
    incorrect.innerText = wrongLetters;
    return;
  }
  for (let i = 0; i < letterArray.length; i++) {
    if (guesses[0] === letterArray[i]) {
      totalScore = parseInt(totalScore + 1);
      letterArray[i] === guesses;
      indices.pop(i);
      indices.push(i);
      console.log("index number", indices);
      showLetter();
    }
  }
  //function to check if the answer is right using total score
  //then give an alert or some other indication that the user won
  function checkWord() {
    if (totalScore === letterArray.length) {
      alert("you win!");
    }
  }
  checkWord();

  // function gameOver() {
  //   if ((wrongAnswers === 6) == true) {
  //     alert("game over!");
  //   }
  //   wrongAnswers;
  // }
  // gameOver();
  // console.log(wrongAnswers);

  // function reset() {
  //   let field = document.getElementById("guess");
  //   field.innerText = "";
  // }
}

//grab boxes from ther dom
//find the index of all of the letter array that it matches
//once found set inner text of boxes to the letters

function showLetter() {
  let blanks = document.getElementsByClassName("letter-display")[indices];
  blanks.innerText = guesses;
}

//add function for loading bar to show game over

//make function for changing alert to something nicer for the you win

//figure out way to reset the letter field on enter
