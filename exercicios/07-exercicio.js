/*
Contador de satisfação de passeio

Crie um script que avise quando o Dog já passeou o suficiente. Para saber, vamos considerar que ele se sentirá satisfeito somente a partir de 5 voltas na quadra.

Use a estrutura de repetição while.

Exiba:

Qual o número da volta atual

Quando o dog estiver satisfeito

Extra: transforme a lógica em uma função (da forma que conseguir)
*/

/*

// Feito por mim

function contadorDeSatisfacao() {
    let voltas = 0;
    const voltasNecessarias = 5;

    while (voltas < voltasNecessarias) {
        voltas++;
        console.log(`Volta atual: ${voltas}`);
    }

    console.log("O Dog está satisfeito! Já passeou o suficiente.");
}

// Chamada da função
contadorDeSatisfacao();
*/

// Correção do professor
let voltasParaDogFicarSatisfeito = 5
let volta = 1

while (volta <= voltasParaDogFicarSatisfeito) {
  console.log(`Volta de nº ${volta} com o Pitoco`)
  console.log(`Pitoco ainda não está satisfeito!`)

  volta++
}

console.log(`Acabou o passeio, Pitoco!`)

console.log(`----------------------------------`)

//correção com function
function verificarSeEstaSatisfeito() {

  let voltasParaDogFicarSatisfeito = 5
  let volta = 0

while (volta <= voltasParaDogFicarSatisfeito) {

  console.log(`Volta de nº ${volta} com o Pitoco`)
  console.log(`Pitoco ainda não está satisfeito!`)

  volta++
}

console.log(`Acabou o passeio, Pitoco!`)
}

verificarSeEstaSatisfeito(10)
