/*
+ adição
- subtração
* multiplicação
/ divisão
% resto da divisão
** exponencial (potenciação)
*/

console.log(1 + 1) // 2
console.log(10 - 5) // 5
console.log(2 * 2) // 4
console.log(11 / 2) // 5.5
console.log(11 % 2) // 1
console.log(4 ** 4) // 256
console.log(4 ** (1 / 2)) // 2

console.log( 2 + 3 * 4) // 14 // precedência - ordem de execução / prioridade dos operadores
console.log((2 + 3) * 4) // 20 // precedência - ordem de execução / prioridade dos operadores
console.log(2 + 3 * 4 - 5) // 9 // precedência - ordem de execução / prioridade dos operadores  
console.log(2 + 3 * (4 - 5)) // 2 // precedência - ordem de execução / prioridade dos operadores
console.log(2 + 3 * (4 - 5) / 2) // 1.5 // precedência - ordem de execução / prioridade dos operadores

console.log(+"5" * 2) // 10 - converte string para número e multiplica
console.log(+"5" - 2) // 3 - converte string para número e subtrai
console.log(+"5" / 2) // 2.5 - converte string para número e divide
console.log(+"5" + 2) // 7 - converte string para número e soma
console.log("5" ** 2) // 25 - converte string para número e potencia

console.log(11 / 12) // 0.9166666666666666 - divisão
console.log(parseInt(11 / 2)) // 5 - converte para inteiro
console.log(parseFloat(11 / 2)) // 5.5 - converte para float
console.log(11 / 2 | 0) // 5 - converte para inteiro
console.log(11 / 2 >> 0) // 5 - converte para inteiro
console.log(11 / 2 << 0) // 5 - converte para inteiro
console.log(11 / 2 >>> 0) // 5 - converte para inteiro

//arredondamento
console.log(Math.floor(5.8)) // 5 - arredonda para baixo
console.log(Math.ceil(5.2)) // 6 - arredonda para cima
console.log(Math.round(5.5)) // 6 - arredonda para o inteiro mais próximo
console.log(Math.round(5.4)) // 5 - arredonda para o inteiro mais próximo

//casas decimais
const valorDecimal = 2.123123
console.log(valorDecimal.toFixed(2)) // 2.12 - arredonda para 2 casas decimais
console.log(valorDecimal.toFixed(3)) // 2.123 - arredonda para 3 casas decimais

