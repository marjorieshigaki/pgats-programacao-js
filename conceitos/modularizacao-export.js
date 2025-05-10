/*

Sintaxe CommonJS:
  module.exports = {} / require('modulo') 

ESM - Ecmascript Standard Modules
  export {} / import { } from 'modulo.js'

*/

//const nomePet = 'Pitoco'
//console.log(`O nome do pet é ${nomePet}`)

//const nomePet = 'Pitpoca'
//console.log(`O nome do pet é ${nomePet2}`)

//const nomePet = 'Pantera'
//console.log(`O nome do pet é ${nomePet3}`)

const brinquedos = [
  'Osso',
  'Peteca',
  'Bola',
]

function exibirNomePet(paramNomePet) {
    console.log(`O nome do pet é ${paramNomePet}`)
} 

function exibirIdade(paramIdadePet) {
    console.log(`A idade do pet é ${paramIdadePet}`)
}

exibirNomePet(`Pipoca`)
exibirNomePet(`Pantera`)
exibirNomePet(`Peggy`)

exibirIdade(2)
exibirIdade(3)
exibirIdade(4)


// export {} / import
export {
  exibirNomePet,
  exibirIdade,
  brinquedos
}