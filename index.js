/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
  nome: 'Marjorie',
  turma: '02',
  disciplina: 'Prog JS'
},
{
  nome: 'Juliana',
  turma: '02',
  disciplina: 'Prog JS'
}])

/**
 * Constantes e Variáveis
 */

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar

// informacoes de um dog que nao mudam
const nome = 'Thor'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo com preto'
const dataDeNascimento = '18/09/2020'
const porte = 'M'

// informacoes que mudam
let idade = 4 //Number
let peso = 16 //Number
let vacinado = true //Boolean
let castrado = false //Boolean
let tamanho = 'M' //String

// hoisting -> içamento ou elevação

/*
console.log(irmaos)
var irmaos = ["Thor", "Hela"]
*/

/*
const irmaos = ["Thor", "Hela"]
console.table(irmaos)
*/

const irmaos = [
  {
    nome: 'Thor',
    idade: 4,
    
  },
  {
   nome: 'Hela',
    idade: 1,
  }
]
console.table(irmaos) 

/*
* Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
*Funções - leia, escreva

- cadeia - String
- inteiro/real - Number
- logico - Boolean
- vetor - Array
- matriz - Array de Array

undefined - quando declara uma variável sem atribuir valor = não definido
null - é uma variável sem valor propositalmente = nulo, vazio, sem valor
NaN - Not a Number (não é um número)

BigInt - inteiro grande = Number para números extremamente grandes
Symbol - valor único e imutável, usado como identificador de propriedades de objetos = identificador único

*/

//Typescript - superconjunto do JS que adiciona tipagem estática e outros recursos. O TypeScript é transpilado para JavaScript, o que significa que o código TypeScript é convertido em JavaScript puro antes de ser executado. Isso permite que os desenvolvedores aproveitem os benefícios da tipagem estática enquanto ainda escrevem código que pode ser executado em qualquer ambiente JavaScript.

/*
console.log("5" + 1) // 51 - concatena
console.log("5" - 1) // 4 - subtrai
console.log("5" * 2) // 10 - multiplica
console.log("5" / 2) // 2.5 - divide
console.log(5 + 1) // 6 - soma
console.log(5 - 1) // 4 - subtrai
console.log(5 * 2) // 10 - multiplica
console.log(5 / 2) // 2.5 - divide
console.log(5 % 2) // 1 - resto da divisão
console.log(5 ** 2) // 25 - potenciação
console.log(5 ** (1 / 2)) // 2.236 - raiz quadrada
console.log(5 ** (1 / 3)) // 1.710 - raiz cúbica
*/

/*
const valor = "50"
console.log(valor)
*/

/*
'String' // String - cadeia de caracteres - aspas simples ou single quote
"String" // String - cadeia de caracteres - aspas duplas ou double quote
`String` // String - template string (interpolação de variáveis) - crase ou template strings
*/

const numeroAula = "03"
const turma = "02"
let data = "05 de abril"

console.log("Aula 03 da Turma " + turma + " no sábado dia 05 de abril") // concatenação - +

console.log(`Aula 03 da Turma ${ turma } no sábado dia 05 de abril`) // template string - crase ou template strings - interpolação de variáveis

console.log(`Aula ${ numeroAula } da Turma ${ turma } no sábado dia ${ data }`) // template string - crase ou template strings - interpolação de variáveis


console.log(numeroAula.length) // length - tamanho da string
console.log(numeroAula[0]) // índice - posição do caractere na string

// split - divide a string em um array de substrings com base em um delimitador = separar a string
const nomesDeAlunos = "Marjorie Juliana Ana Maria Pedro"
const nomesDeAlunosSplit = nomesDeAlunos.split(" ") // separa a string em um array de substrings com base no espaço em branco

console.log(nomesDeAlunosSplit) // ["Marjorie", "Juliana", "Ana", "Maria", "Pedro"]

console.log(nomesDeAlunos.toLowerCase()) // ["marjorie", "juliana", "ana", "maria", "pedro"] - transforma tudo em minúsculo
console.log(nomesDeAlunos.toUpperCase()) // ["MARJORIE", "JULIANA", "ANA", "MARIA", "PEDRO"] - transforma tudo em maiúsculo

console.log(nomesDeAlunos.includes("Dennys")) // false - verifica se a string contém o valor "Dennys"
console.log(nomesDeAlunos.includes("Juliana")) // true - verifica se a string contém o valor "Juliana"

console.log(nomesDeAlunos.toLowerCase().includes("juliana")) // true - verifica se a string contém o valor "Juliana" em minúsculo

// Chai - biblioteca de asserções para testes em JavaScript. Ela fornece uma sintaxe legível e expressiva para escrever testes, permitindo que os desenvolvedores verifiquem se o código está se comportando conforme o esperado. A Chai é frequentemente usada em conjunto com frameworks de teste como Mocha ou Jasmine.
// Ela suporta diferentes estilos de asserções, como "should", "expect" e "assert", permitindo que os desenvolvedores escolham o estilo que melhor se adapta ao seu fluxo de trabalho. A Chai é amplamente utilizada na comunidade JavaScript para garantir a qualidade do código e facilitar o desenvolvimento orientado a testes (TDD).

console.log(nomesDeAlunos.replaceAll('a', 'i')) // ["Mijjorie", "Julijina", "Ana", "Mijri", "Pedro"] - substitui todas as ocorrências de 'a' por 'i'
console.log(nomesDeAlunos.replace('a', 'i')) // ["Mijjorie", "Julijina", "Ana", "Mijri", "Pedro"] - substitui a primeira ocorrência de 'a' por 'i'

const conceitosLogica = "            inteiro real cadeia de caracteres...          "
console.log(conceitosLogica.trim()) // ["inteiro real cadeia de caracteres..."] - remove os espaços em branco no início e no final da string
console.log(conceitosLogica.trimStart()) // ["inteiro real cadeia de caracteres...          "] - remove os espaços em branco no início da string
console.log(conceitosLogica.trimEnd()) // ["            inteiro real cadeia de caracteres..."] - remove os espaços em branco no final da string

