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
let wrongLetters = [];

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
  let boxes = document.createElement("li");
  boxes.setAttribute("class", "letter-display");
  document.querySelector(".letters").appendChild(boxes);
  boxes.innerText = "  ";
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
  console.log("guessed letter", guesses);
  checkLetter(letterArray, guesses);
});

//compare each input with all of the letters within the string in the array
function checkLetter() {
  console.log("this is the letter array", letterArray);
  if (letterArray.includes(guesses[0]) == false) {
    wrongLetters.pop(guesses[0]);
    wrongLetters.push(guesses[0]);
    console.log("this letter does not match any letter in the word");
    console.log("not a letter", wrongLetters);
    const incorrectChoices = document.getElementById("#wrongLetters");
    let incorrect = document.createElement("div");
    incorrect.setAttribute("class", "wrong-letter");
    document.querySelector(".wrong").appendChild(incorrect);
    console.log("wrong letter array:", wrongLetters);
    incorrect.innerText = wrongLetters;

    return;
  }
  for (let i = 0; i < letterArray.length; i++) {
    if (guesses[0] === letterArray[i]) {
      console.log("you found a match!");
      totalScore = parseInt(totalScore + 1);
      console.log("total score", totalScore);
      letterArray[i] === guesses;
      indices.push(i);
      console.log("index number", indices);
      // showLetter();
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

//grab boxes from ther dom
//find the index of all of the letter array that it matches
//once found set inner text of boxes to the letters
// function showLetter() {
//   // const newBox = document.createElement("div");
//   // newBox.setAttribute("id", "showing");
//   // document.getElementsByClassName("letters")[i].appendChild(newBox);
//   // let correctLetter = guesses;
//   // let blankBoxes = document.getElementsByClassName(".letter-display");
//   // blankBoxes.appendChild(correctLetter).innerText.letterArray[i];
//   let newBoxes = document.getElementsByClassName("letter-display");
//   let letters = document.getElementById("letterSpace");
//   letters.forEach(boxes => {
//     let letter = document.createElement("letter");
//     li.innerText = test;
//     letter.appendChild(li);
//     letter.classList.add(letter.toUpperCase().replace(" ", ""));
//     letters.appendChild(letter);
//   });
//   body.appendChild(newBoxes);
// }
