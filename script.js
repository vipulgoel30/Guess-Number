"use strict";

// height selector
function width_heightCalculator() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
  var vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vw", vw + "px");
}

width_heightCalculator();
window.addEventListener("resize", width_heightCalculator);
window.addEventListener("orientationchange", width_heightCalculator);

// for printing and changing data
const printData = function (placeholder, value) {
  document.querySelector(`.main-content-${placeholder}`).textContent = value;
};

const backgroundChange = (color) => {
  document.querySelector("body").backgroundChange = `${color}`;
};

// starting setting
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

// check btn functionality
document
  .querySelector(".main-content-check-btn")
  .addEventListener("click", function () {
    const guess = Number(document.querySelector(".main-input").value);
    if (!guess) {
      printData("remarks", "⛔ No number");
    } else {
      if (guess === secretNumber) {
        printData("remarks", "🎉 You won!");
        backgroundChange("#60b347");

        printData("score", score);
        printData("content", secretNumber);
        if (score > highScore) {
          highScore = score;
          printData("highscore", highScore);
        }
      } else {
        if (score > 1) {
          score--;
          printData(
            "remarks",
            guess > secretNumber ? "📈 Too High" : "📉 Too Low"
          );
          printData("score", score);
        } else {
          printData("remarks", "😥 You lost the game");
          backgroundChange("red");

          printData("content", secretNumber);
          printData("score", "0");
        }
      }
    }
  });

//again button functionality
document
  .querySelector(".main-head-again-btn")
  .addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    backgroundChange("#222");

    document.querySelector(".main-input").value = "";
    printData("remarks", "Start guessing...");
    printData("score", score);
    printData("content", "?");
  });
