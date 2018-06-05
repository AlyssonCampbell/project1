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
const wordArray = ["abcdef"];
// Make another array for the selected word broken into just letters
//create an input field and a button to submit a guess from the user
let guesses = [];
let letterArray = [];
let totalScore = [0];
let indices = [];

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
  boxes.innerText = "  ";
}

//create event listenener for when submit button is clicked-input the letter input
//into the guesses array
//don't need to store the guesses within the array since each letter will be compared indivudually
const button = document.querySelector("button");
const guessLetter = document.querySelector("#letter-guess");

guessLetter.addEventListener("click", evt => {
  evt.preventDefault();
  guesses.pop(guess.value);
  guesses.push(guess.value);
  console.log(guesses);
  checkLetter(letterArray, guesses);
});

//compare each input with all of the letters within the string in the array
function checkLetter() {
  console.log(letterArray);
  for (let i = 0; i < letterArray.length; i++) {
    if (guesses[0] === letterArray[i]) {
      console.log("you found a match!");
      totalScore = parseInt(totalScore + 1);
      console.log(totalScore);
      //displayLetter();
      function displayLetter() {
        for (var i = 0; i < letterArray.length; i++) {
          if (letterArray[i] === guesses) indices.push(i);
        }
        displayLetter();
      }
      console.log(indices);
    } else {
      console.log("this letter does not match");
    }
  }
  //function to check if the answer is right using total score
  //then give an alert or some other indication that the user won
  function checkWord() {
    if (totalScore === letterArray.length) {
      console.log("you win!");
    }
  }
  checkWord();
}

// const letterDisplay = document.querySelector(".letters");
// for (let index = 0; index < letterArray.length; index++) {
//   let boxes = document.createElement("div");
//   boxes.setAttribute("class", "letter-display");
//   document.querySelector(".letters").appendChild(boxes);
//   boxes.innerText = "  ";
// }
//grab boxes from ther dom
//find the index of all of the letter array that it matches
//once found set inner text of boxes to the letters
// .innerText
// function displayLetter() {
//   letterArray.findIndex(letterArray);
//   document.querySelector(".letter-display").innerText += letterArray[0];
// }

// letterArray.forEach(element => {
//   let arrayIndex = letterArray.findIndex(checkLetter);
//   document.querySelector(".letter-display").nextElementSibling.innerText +=
//     letterArray[i];
// });
