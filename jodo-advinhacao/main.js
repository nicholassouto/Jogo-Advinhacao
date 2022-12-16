// variaveis da aplicação
let number = Math.round(Math.random(0, 10) * 10);
number = Number(number);
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let guesses = 0;
const inputNumber = document.querySelector("#inputNumber");
inputNumber.value = 0;

// eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

// functions
function handleTryClick(event) {
  event.preventDefault();

  if (Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10) {
    guesses++;
    if (Number(inputNumber.value) == number) {
      document.querySelector(".screen2 h2").innerText = `Acertou em ${guesses} tentativas`;
      toggleScreen();
    } else {
      inputNumber.value = 0;
    }
  } else {
    alert("Insira um numero de 0 a 10");
  }
}

function handleResetClick() {
  number = Math.round(Math.random(0, 10) * 10);
  toggleScreen();
  guesses = 0;
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
