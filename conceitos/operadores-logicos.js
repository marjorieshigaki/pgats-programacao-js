/*
&&  - E / AND
||  - OU / OR
!   - NÃO / NOT
*/

// && - E / AND
const nomeDog = "Pipoca"

const nomeEhValido = nomeDog.split(" ").length === 1
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10

console.log(nomeDog.lenght)

console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

// console.log(10 > 5 && 5 < 10) // true
// console.log(10 > 5 && 5 > 10) // false
// console.log(10 < 5 && 5 < 10) // false
// console.log(10 < 5 && 5 > 10) // false

// || - OU / OR
const dog = {
    adotado: false,
    peso: 5.3,
}

console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

console.log(!dog.adotado || dog.peso > 10) // true

// ! - NÃO / NOT
console.log(!true) // false
console.log(true) // true
console.log(!false) // true
console.log(false) // false

