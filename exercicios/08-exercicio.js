/*
Controle de petiscos

Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.

Use a estrutura de repetição for contado.

Exiba:

Cada vez que um petisco for entregue

Quando o dog estiver satisfeito (que é quando terminar os petiscos)

Extra: transforme a lógica em uma função (da forma que conseguir)
*/

function controleDePetiscos(quantidadeDePetiscos) {
  for (let contador = 1; contador <= quantidadeDePetiscos; contador++) {
    console.log(`Petisco ${contador} entregue.`);
  }
    console.log("O dog está satisfeito!");
}

// Exemplo de uso da função
controleDePetiscos(5);