"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMsg = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const displayScore = function (num) {
  document.querySelector(".score").textContent = num;
};
// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  //when there is no input
  if (!guess) {
    displayMsg("No number📛");

    //when player win
  } else if (guess === secretNumber) {
    displayMsg("🥳Correct Number");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    //Setting the highscore to the score
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When the guess is different that secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? "Too high!" : "Too low");
      score--;
      displayScore(score);
    } else {
      displayMsg("You Lost😎!");
      displayScore(0);
    }
  }
});

//"Again" button working
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMsg("Start guessing...");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
});
