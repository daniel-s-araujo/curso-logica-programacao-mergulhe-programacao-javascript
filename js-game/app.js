alert("Boas vindas ao jogo no número secreto");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 10");

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }

    tentativas++;
  }
}

if (tentativas > 1) {
  alert(
    `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
  );
} else {
  alert(
    `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`
  );
}
