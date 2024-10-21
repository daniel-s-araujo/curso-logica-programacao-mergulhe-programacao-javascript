alert("Boas vindas ao jogo no número secreto");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt("Escolha um número entre 1 e 10");

if (chute == numeroSecreto) {
  alert("Isso aí! Você descobriu o número secreto (5)");
} else {
  alert("Você errou :(");
}
