var notas = [];

function incluirNota() {
  notas.push(Number(document.getElementById("idNota").value));
  document.getElementById("idNota").value = "";
}

function excluirNota() {
  notas.pop();
  console.log(notas);
}

function questaoA() {
  let saida = document.getElementById("idOutA");
  let somaNotas = 0;
  let media = 0;

  notas.forEach(function (nota, index) {
    console.log(nota + " " + index);
    somaNotas = somaNotas + nota;
  });

  media = somaNotas / notas.length;

  saida.value = "Média da turma: " + media;
}

function questaoA2() {
  console.log(notas);
  let saida = document.getElementById("idOutA");

  let media =
    notas.reduce(function (acumulador, elemento, index, array) {
      return (acumulador = acumulador + elemento);
    }, 0) / notas.length;

  saida.value = "Média da turma: " + media;
}

function questaoA3() {
  console.log(notas);
  let saida = document.getElementById("idOutA");

  let media = notas.reduce(function (acumulador, elemento, index, array) {
    if (index == notas.length - 1) {
      acumulador = acumulador + elemento;
      return (acumulador = acumulador / notas.length);
    } else {
      return (acumulador = acumulador + elemento);
    }
  }, 0);

  saida.value = "Média da turma: " + media;
}

function questaoB1(params) {
  let saida = document.getElementById("idOutB");
  let peso = 1 / notas.length;
  let media = 0;
  let alunosAcimaMedia = [];

  notas.forEach(function (element) {
    media = media + element * peso;
  });

  notas.forEach(function (element, index) {
    if (element > media) {
      alunosAcimaMedia.push(index);
    }
  });

  saida.value = "Alunos acima da média: " + alunosAcimaMedia.toString();
}

function questaoB2() {
  let saida = document.getElementById("idOutB");
  let taxa = 1 / notas.length;
  console.log("QB taxa: " + taxa);

  let media = notas.reduce(function (acc, valAtual, index, array) {
    return acc + valAtual * taxa;
  }, 0);

  console.log("QB Média: " + media);

  let alunosAcimaMedia = notas.map(function (value, index, array) {
    if (value > media) {
      return index;
    }
  });
  console.log(alunosAcimaMedia);

  alunosAcimaMedia = alunosAcimaMedia.filter(function (value, index, array) {
    return value != undefined;
  });

  saida.value = "Alunos acima da média: " + alunosAcimaMedia.toString();
}

function questaoC() {
  let saida = document.getElementById("idOutC");
  let maior = -Infinity;

  notas.forEach(function (element) {
    if (element > maior) {
      maior = element;
    }
  });

  saida.value = "A Maior nota é: " + maior;

  return maior;
}

function questaoD() {
  let saida = document.getElementById("idOutD");
  let maiorNota = questaoC();
  let posicoesMaiorNota = [];

  notas.forEach(function (nota, index) {
    if (nota == maiorNota) {
      posicoesMaiorNota.push(index);
    }
  });

  saida.value =
    "A maior nota aparece nas posições: " + posicoesMaiorNota.toString();
}

function questaoD2() {
  let saida = document.getElementById("idOutD");

  let maxNota = notas.reduce(function (acc, value) {
    return Math.max(acc, value);
  }, -Infinity);

  console.log("Maior Nota: " + maxNota);

  let indMaiorNota = notas.map(function (elemento, index) {
    if (elemento == maxNota) {
      return index;
    }
  });

  indMaiorNota = indMaiorNota.filter(function (value) {
    return value != undefined;
  });

  console.log(indMaiorNota);
  saida.value = "A maior nota aparece nas posições: " + indMaiorNota.toString();
}
