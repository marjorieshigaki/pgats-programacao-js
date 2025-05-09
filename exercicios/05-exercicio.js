/*
Classificador de porte automático

Muitos tutores não fazem ideia do porte de seu Dog.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:

- Até 10kg -> Pequeno; acima disso -> Médio

Use o operador ternário para determinar o porte. Exiba:
- Nome
- Peso
- Porte classificado

Extra: transforme a lógica em uma função (da forma que conseguir)
Extra: adicionar mais condições. Ex.: >= 50 -? porte grande
*/

/*
//Feito pelo GPT

const classificarPorte = (nome, peso) => {
  const porte = peso <= 10 ? 'Pequeno' : 'Médio'
  console.log(`Nome: ${nome}`)
  console.log(`Peso: ${peso} kg`)
  console.log(`Porte: ${porte}`)
}

classificarPorte('Ada', 4)
*/

// Correção professor:
const nome = `Ada`
const peso = 5.5

const porte = peso <= 10 ? 'Pequeno' : 'Médio'

console.log(`-------------------`)
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso} kg`)
console.log(`Porte: ${porte}`)
console.log(`-------------------`)


// Alternativa com a função (Extra):
function classificarPortePorPeso(nome, peso) {
  const porte = peso <= 10 ? 'Pequeno' : 'Médio'
  console.log(`-------------------`)
  console.log(`Nome: ${nome}`)
  console.log(`Peso: ${peso} kg`)
  console.log(`Porte: ${porte}`)
  console.log(`-------------------`)
}

classificarPortePorPeso('Pantera', 14.5)
classificarPortePorPeso('Bandite', 35)
classificarPortePorPeso('Rex', 8)