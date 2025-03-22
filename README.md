# 🚀 7 Days of Code - Desafios de JavaScript

Bem-vindo ao meu repositório do 7 Days of Code! Aqui você encontrará minha solução para cada um dos desafios diários propostos ao longo de uma semana, utilizando JavaScript e HTML/CSS para tornar a experiência mais interativa. 🎯

🔗 **Confira a página do projeto:** [7 Days of Code](https://renzo-023.github.io/7-days-of-code/) 🚀

## 📌 Dia 1 - Comparação de Valores e Tipos

### 📝 Descrição do Desafio

No primeiro desafio, o objetivo era compreender melhor a comparação de valores e tipos em JavaScript, corrigindo um código que fazia comparações incorretas entre números e strings. O desafio destacava a diferença entre `==` (comparação de valor) e `===` (comparação de valor e tipo).

Código que foi entregue:

```javascript
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```

### 🔥 Minha Solução

```javascript
let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroDez = 10;
let stringDez = "10";

function funcao1() {
  if (numeroUm == stringUm) {
    console.log(
      "As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes"
    );
  } else {
    console.log("As variáveis numeroUm e stringUm não tem o mesmo valor");
  }
}

function funcao2() {
  if (numeroTrinta === stringTrinta) {
    console.log(
      "As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo"
    );
  } else {
    console.log(
      "As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo"
    );
  }
}

function funcao3() {
  if (numeroDez == stringDez) {
    console.log(
      "As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes"
    );
  } else {
    console.log("As variáveis numeroDez e stringDez não tem o mesmo valor");
  }
}
```

---

## 📌 Dia 2 - Captura e Armazenamento de Valores

### 📝 Descrição do Desafio

O desafio do segundo dia consistia em capturar e armazenar valores dentro de variáveis, simulando um site que pede algumas informações ao usuário:

1. Qual o seu nome?
2. Quantos anos você tem?
3. Qual linguagem de programação você está estudando?

No final, o sistema exibe a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Além disso, havia um exercício opcional para perguntar se o usuário gosta da linguagem e responder de acordo com a resposta.

### 🔥 Minha Solução

```javascript
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
  document.getElementById("quest-submit").classList.add("display-none");
  let questAnswer = document.getElementById("quest-input").value;
  displayQuest(
    "quest-question",
    `Incrível! ${questAnswer} é uma ótima linguagem de programação.`
  );
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

displayNameInput();
```

---

🔗 **Confira a página do projeto:** [7 Days of Code](https://renzo-023.github.io/7-days-of-code/) 🚀

