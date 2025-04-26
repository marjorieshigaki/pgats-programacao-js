/*

>  - Maior que
>=  - Maior ou igual que
<  - Menor que
<=  - Menor ou igual que
==  - Igualdade somente de valores
!=  - Diferença somente de valores
===  - Igualdade de valores e tipo de dado 
!==  - Diferença de valores e tipo de dado

*/

console.log('10 > 5 = ${ 10 > 5 }') // verdadeiro = true
console.log("10 >= 5 = ${ 10 >= 5 }") // verdadeiro = true

//maior que
console.log(10 > 5) // verdadeiro = true
console.log(10 > 20) // falso = false

//maior ou igual 
console.log(10 >= 10) // verdadeiro = true
console.log(10 >= 9) // verdadeiro = true

//menor que
console.log(10 < 5) // falso = false
console.log(10 < 20) // verdadeiro = true

//menor ou igual
console.log(10 <= 10) // verdadeiro = true
console.log(10 <= 9) // falso = false


//igualdade somente de valores
console.log(1 == '1') // verdadeiro = true
console.log(1 == 2) // falso = false
console.log(1 == 1) // verdadeiro = true
console.log(0 == false) // verdadeiro = true

//igualdade de valores e tipo de dado
console.log(1 === '1') // falso = false
console.log(1 === 2) // falso = false
console.log(1 === 1) // verdadeiro = true
console.log(1 === 1.0) // verdadeiro = true

//difença somente de valores
console.log(1 != '1') // falso = false
console.log(1 != 2) // verdadeiro = true
console.log(1 != 1) // falso = false

//diferença de valores e tipo de dado
console.log(1 !== '1') // verdadeiro = true
console.log(1 !== 2) // verdadeiro = true
console.log(1 !== 1) // falso = false
console.log(1 !== 1.0) // falso = false
console.log(1 !== 1.1) // verdadeiro = true
console.log(1 !== 1.01) // verdadeiro = true

