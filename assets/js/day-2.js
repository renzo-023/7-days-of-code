let userData = [];
let inputHtml = "";
let inputTitle = "";
let titleOnDisplay = 0;
let answerPositive = 0;
let answerNegative = 0;

function clearInput() {
  document.getElementById("input").value = "";
}

function displayTitle(title, text) {
  let inputTitle = document.getElementById(title);
  inputTitle.innerHTML = text;
}

function displayNameInput() {
  displayTitle("input-title", "Qual o seu nome?");
}

function displayAgeInput() {
  displayTitle("input-title", "Quantos anos você tem?");
}

function displayQuestionInput() {
  displayTitle(
    "input-title",
    "Qual linguagem de programação você está estudando?"
  );
}

function displayMessage(title, text) {
  displayTitle("input-title", "Suas Informações:");
  document.getElementById("input-submit").classList.add("display-none");
  let infoDisplay = document.getElementById(title);
  infoDisplay.innerHTML = text;
}

function displayQuest(title, text) {
  document.getElementById("quest").classList.remove("display-none");
  let question = document.getElementById(title);
  question.innerHTML = text;
}

function questSubmit() {
  inputHtml = document.getElementById("input").value;
  if (document.getElementById("quest-input").value == "") {
    alert("O campo deve ser preenchido!");
  } else {
    document.getElementById("quest-submit").classList.add("display-none");
    let questAnswer = document.getElementById("quest-input").value;
    displayQuest(
      "quest-question",
      `Incrível! ${questAnswer} é uma ótima linguagem de programação.`
    );
  }
}

function positiveButton() {
  if (answerNegative < 1) {
    document.getElementById("quest-buttons").classList.add("display-none");
    displayQuest(
      "quest-question",
      "Muito bom! Continue estudando e você terá muito sucesso."
    );
  } else {
    document.getElementById("quest-buttons").classList.add("display-none");
    document.getElementById("quest-submit").classList.remove("display-none");
    displayQuest("quest-question", "Qual?");
  }
}

function negativeButton() {
  if (answerNegative == 1) {
    document.getElementById("quest-buttons").classList.add("display-none");
    displayQuest(
      "quest-question",
      "Tudo bem, cada um tem o seu tempo. Um dia você encontrará uma linguagem que vai te agradar!"
    );
  } else {
    displayQuest(
      "quest-question",
      "Ahh que pena... Já tentou aprender outra linguagem?"
    );
    answerNegative = 1;
  }
}

function checkTitleOnDisplayValue() {
  if (titleOnDisplay == 0) {
    displayNameInput();
  } else {
    if (titleOnDisplay == 1) {
      displayAgeInput();
    } else {
      if (titleOnDisplay == 2) {
        displayQuestionInput();
      } else {
        displayMessage(
          "info",
          `Olá ${userData[0]}, você tem ${userData[1]} anos e já está aprendendo ${userData[2]}!`
        );
        displayQuest("quest-question", `Você gosta de estudar ${userData[2]}?`);
      }
    }
  }
}

function addData() {
  inputHtml = document.getElementById("input").value;
  if (inputHtml == "") {
    alert("O campo deve ser preenchido!");
  } else {
    userData.push(document.getElementById("input").value);
    titleOnDisplay++;
  }
  console.log(userData);
  checkTitleOnDisplayValue();
  clearInput();
}

displayNameInput();
