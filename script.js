"use strict";

const resultCounter = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkGuessBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const again = document.querySelector(".again");

let myNumber;
let userGuess;
let highscoreArr = [0];
let highestScore = highscoreArr[0];
let scoreCount = 20;

randomNumber();
checkGuess();

// create a random number when clicking on the again button
function randomNumber() {
  again.addEventListener("click", () => {
    myNumber = Math.floor(Math.random() * 20) + 1;
    scoreCount = 20;
    score.innerHTML = scoreCount;
    guess.value = "";
    document.body.classList.remove("won");
    document.body.classList.remove("lost");
    again.classList.add("hide");
    document.querySelector(".left").classList.remove("hide");
    document.querySelector(".right").classList.remove("hide");
    message.innerHTML = "Start guessing...";
  });
}

// Checking the users input against the random generated number.
function checkGuess() {
  checkGuessBtn.addEventListener("click", () => {
    userGuess = Number(guess.value);

    if (scoreCount < 1) {
      message.innerHTML = "💥 You Lost the Game!";
      document.body.classList.add("lost");
    } else if (guess.value === "") {
      message.innerHTML = "⛔️ No Number!";
    } else if (userGuess === myNumber) {
      message.innerHTML = "🎉 Correct Number!";
      highscoreArr.push(scoreCount);
      resultCounter.innerHTML = scoreCount;
      highestScoreFunc();
      document.body.classList.add("won");
      again.classList.remove("hide");
      document.querySelector(".left").classList.add("hide");
    } else if (userGuess > myNumber) {
      message.innerHTML = "📈 Too High!";
      scoreCount -= 1;
    } else if (userGuess < myNumber) {
      message.innerHTML = "📉 Too Low!";
      scoreCount -= 1;
    }
    score.innerHTML = scoreCount;
  });
}

function highestScoreFunc() {
  // checking the array of high scores for the highest number
  for (let i = 0; i < highscoreArr.length; i++)
    if (highscoreArr[i] > highestScore) {
      highestScore = highscoreArr[i];
    }
  highscore.innerHTML = highestScore;
}
