//what I need to do to get the hangman game running:
//set an array with the word(s) that will be guessed
//create an input field and a button to submit a guess from the user
//create a second array where the user input letter will be stored
//compare each input with all of the letters within the string in the array
//if the letter input within the field matches any of the letters in the answer
//then change the blank image with the ___ to the letter to display
//do this maybe with a style/switch?
//when the complete string has been input by the user
//then give an alert or some other indication that the user won

console.log("javascript running & ready to code! :D");

//set an array with the word(s) that will be guessed
const answerKey = ["abcdef"];
//create an input field and a button to submit a guess from the user
let guesses = [];
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
  checkLetter(answerKey, guesses[0]);
});

//create function to compare each letter input to the answer array and see if a letter input is a
//letter contained within the string
function checkLetter(answerKey, guesses) {
  for (var i = 0; i < answerKey.length; i++) {
    if (answerKey[i] == guesses) console.log("match!");
    return true;
  }
}
