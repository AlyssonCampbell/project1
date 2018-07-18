"use strict";

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

let letterArray = [];
let wordArray = [wordBank[Math.floor(Math.random() * wordBank.length)]];

//WordArray console log is being left in so the array can be logged easily for testing
console.log("word array", wordArray);

//function to split the randomly selected word into individual letters
function makeLetterArray(wordArray) {
  letterArray = wordArray.split("");
}
makeLetterArray(wordArray[0]);

//creates the boxes to match the length of the randomized word
function makeBoxes() {
  for (let index = 0; index < letterArray.length; index++) {
    let boxes = document.createElement("div");
    boxes.setAttribute("class", "letter-display");
    document.querySelector(".letters").appendChild(boxes);
    boxes.innerText = "";
  }
}
makeBoxes();