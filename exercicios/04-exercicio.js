/*
Calculadora de ração diária

Crie um script que receba o peso do dog em kg + estoque atual de 
ração em gramas. Calcule a quantidade diária de ração com base 
na seguinte fórmula:

Gramas por dia = Peso x 30 gramas

Exiba:
  Nome do dog
  Peso
  Quantidade de ração recomendada por dia
  Dias que o estoque atual vai durar
*/

/*
//Feito pelo GPT com ajustes
const nomeDog = Thor
const pesoDog = 16
const estoqueGramas = 12.000
const gramasPorDia = pesoDog * 30
const diasDuracao = Math.floor(estoqueGramas / gramasPorDia)

console.log(`Nome do dog: ${nomeDog}`)
console.log(`Peso: ${pesoDog} kg`)
console.log(`Quantidade de ração recomendada por dia: ${gramasPorDia} g`)
console.log(`Dias que o estoque atual vai durar: ${diasDuracao} dia(s)`)
*/

// Correção professor. 
// Alternativa 1, simplificando sem função:
const nome = 'Mel'
const peso = 20
const estoque = 5000 // em gramas

const gramasPorDia = peso * 30
const duracaoEstoque = estoque / gramasPorDia

console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso} kg`)
console.log(`Quantidade de ração recomendada por dia: ${gramasPorDia} g`)
console.log(`Dias que o estoque atual vai durar: ${duracaoEstoque} dias`)

// Alternativa 2, usando função com parâmetros
function calcularConsumoDeRacao (peso, estoque) {
    const gramasPorDia = peso * 30
    const duracaoEstoque = estoque / gramasPorDia

    console.log(`--------------------------------------------`)
    console.log(`Nome: ${nome}`)
    console.log(`Peso: ${peso} kg`)
    console.log(`Quantidade de ração recomendada por dia: ${gramasPorDia} g`)
    console.log(`Dias que o estoque atual vai durar: ${duracaoEstoque} dias`)
    console.log(`--------------------------------------------`)
}

calcularConsumoDeRacao('Ada', 1, 2000)
calcularConsumoDeRacao('Laninha', 4.2, 15000)
calcularConsumoDeRacao('Pantera', 14.5, 5000)