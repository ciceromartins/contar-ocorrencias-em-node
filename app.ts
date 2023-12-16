const contarOcorrencias = (objeto, elem) => {
  /*return objeto.reduce((contador, itemAtual) => {
    return itemAtual == elem ? contador + 1 : contador;
  }, 0);
  let contagem = 0;
  objeto.forEach((fruta, posicao) => {
    if (fruta == elem) {
      contagem++;
    }
  });
  return contagem;*/
  let contagem = 0;
  objeto.map((itemAtual) => {
    if (itemAtual == elem) {
      contagem++;
    }
  });
  return contagem;
};

const frutasLista = [
  "banana",
  "abacaxi",
  "goiaba",
  "banana",
  "pera",
  "abacaxi",
  "banana",
];

console.log(contarOcorrencias(frutasLista, "pera"));
