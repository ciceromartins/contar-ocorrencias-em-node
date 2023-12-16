const contaTodasOcorrencias = (objeto) => {
  let resultado = [];

  objeto.forEach((itemAtual) => {
    let elementoExiste = resultado.find((el) => el.fruta == itemAtual);

    if (elementoExiste) {
      elementoExiste.quantidade++;
    } else {
      resultado.push({
        fruta: itemAtual,
        quantidade: 1,
      });
    }
  });

  return resultado;
};

const frutasLista2 = [
  "banana",
  "abacaxi",
  "goiaba",
  "banana",
  "pera",
  "abacaxi",
  "banana",
];

console.log(contaTodasOcorrencias(frutasLista2));
