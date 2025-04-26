/*

--  decremento
++  incremento

?  operador ternário

*/


//incremento
let pesoDoDOg = 10
console.log(pesoDoDOg) // 10

pesoDoDOg++
console.log(pesoDoDOg) // 11 - incremento



//decremento
let pesoDoTutor = 100
console.log(pesoDoTutor) // 100

pesoDoTutor--
console.log(pesoDoTutor) // 99 - decremento

/*
gramaInicial = 0
contadorDeGramas = 0

contadorDeGramas++

gramaLimite = 200
*/

//ternário
// const porte = pesoDoDOg <= 10 ? 'pequeno' : 'médio'
//            <condicao>            se       senao

{/* <condicao> ? <ação se verdadeiro> : <ação se falso> */}

console.log(porte)

const pesoDoDOgOperadorTernario = 21
const porte = pesoDoDOg <= 10 //se if
              ? 'pequeno' 
              : pesoDoDOg <= 20 //senao se / else if
              ? 'médio' 
              : 'grande' //senao else
            // pesoDoDOgTernario <= 10 ? 'pequeno' : pesoDoDOgTernario <= 20 ? 'médio' : 'grande'
            // console.log(pesoDoDOgTernario)

