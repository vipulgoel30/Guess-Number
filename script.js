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

const mainShowNumberContent = document.querySelector(
  ".main-show-number-content"
);
const mainContentScore = document.querySelector(".main-content-score");
const main = document.querySelector(".main");
const mainContentHighscore = document.querySelector(".main-content-highscore");
const mainContentRemarks = document.querySelector(".main-content-remarks");
const mainInput = document.querySelector(".main-input");
const mainContentCheckBtn = document.querySelector(".main-content-check-btn");
let mainNumber = Math.floor(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

function setRemarksColor(color = "#fff") {
  mainContentRemarks.style.color = color;
}
// AGAIN Button
document
  .querySelector(".main-head-again-btn")
  .addEventListener("click", function () {
    mainNumber = Math.floor(Math.random() * 20) + 1;
    mainShowNumberContent.innerHTML = "?";
    mainContentScore.innerHTML = 5;
    score = 5;
    main.style.background = "#222";
    mainContentRemarks.innerHTML = "Start guessing...";
    mainInput.value = undefined;
    mainContentCheckBtn.disabled = false;
    mainInput.disabled = false;
  });

mainContentCheckBtn
  .addEventListener("click", function () {

    const data = Number(mainInput.value);
    if (!data) {
      mainContentRemarks.textContent = "Please enter some value!";

      setRemarksColor("red");
      return 0;
    }
    if (data === mainNumber) {
      main.style.background = "#60b347";
      setRemarksColor()
      mainContentRemarks.innerHTML = "🎉 You won";
      mainShowNumberContent.innerHTML = mainNumber;
      if (score > highscore) {
        highscore = score;
        mainContentHighscore.innerHTML = highscore;
      }
    } else if (data > mainNumber) {
      score--;
      mainContentScore.innerHTML = score;
      mainContentRemarks.innerHTML = "📈 Too High";
      setRemarksColor("orangered")
    } else {
      score--;
      mainContentScore.innerHTML = score;
      mainContentRemarks.innerHTML = "📉 Too Low";
      setRemarksColor("blue")
    }

    if (score === 0) {
      mainContentRemarks.textContent = "You have lost the game!";
      setRemarksColor();
      main.style.background = "linear-gradient(to right,red,rgb(230,0,0))";
      mainShowNumberContent.innerHTML = mainNumber;
      this.disabled = true;
      mainInput.disabled = true;
    }
  });

