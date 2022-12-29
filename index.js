const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const correctAns = num1 * num2;

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(sessionStorage.getItem("score"));
if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns == correctAns) {
    score++ * 10;
    updateLocalStorage();
  } else {
    score-- * 10;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  sessionStorage.setItem("score", JSON.stringify(score));
}

// Remove saved data from sessionStorage
sessionStorage.removeItem("score");

// Remove all saved data from sessionStorage
sessionStorage.clear();
