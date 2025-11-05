// Importa o módulo readline para entrada de dados via terminal
const readline = require("readline");

// Função principal que calcula o saldo e determina o nível do jogador
function calcularRankeadas(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  // Define o nível com base na quantidade de vitórias
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Retorna a mensagem final com saldo e nível
  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Cria a interface de leitura para o terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicita a quantidade de vitórias
rl.question("Digite a quantidade de vitórias: ", (vitoriasInput) => {
  // Solicita a quantidade de derrotas
  rl.question("Digite a quantidade de derrotas: ", (derrotasInput) => {
    const vitorias = parseInt(vitoriasInput);
    const derrotas = parseInt(derrotasInput);

    // Valida se os valores são números
    if (isNaN(vitorias) || isNaN(derrotas)) {
      console.log("Por favor, insira apenas números válidos.");
    } else {
      // Chama a função e exibe o resultado
      const resultado = calcularRankeadas(vitorias, derrotas);
      console.log(resultado);
    }

    // Encerra a interface de leitura
    rl.close();
  });
});
