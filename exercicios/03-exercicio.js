/*
Validador de idade mínima para adoção

Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.

Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção

Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade.

Exemplos:
  mínimo = 2

  idade 1 + porte M = não
  idade 2 + porte M = sim, pela idade
  idade 2 + porte P = sim, pela idade
  idade 1 + porte P = sim, pelo porte
*/

/*
//Feito pelo Copilot
const nomeDog = 'Thor'
const idadeDog = 4 // anos
const porteDog = 'M' // P, M, G
const idadeMinima = 2 // anos
const portePequeno = 'P' 
const aptoParaAdocao = (idadeDog >= idadeMinima) || (porteDog === portePequeno)
const aptoParaAdocaoTexto = aptoParaAdocao ? 'apto' : 'não apto'
*/

//Correção professor:
/*
const nomeDog = 'Ada'
const idadeDog = 4 

const adocao = idade < 2 ? 'não' : 'sim'
*/

//Correção professor com extra:
const nomeDog = 'Ada'
const idadeDog = 4 
const porte = 'P'

const idadeMinima = 2

const adocao = idade >= idadeMinima
               ? 'sim' 
               : porte === 'P'
               ? 'sim'
               : 'não'

const adocaov2 = idade >= idadeMinima || porte === 'P'

console.log(adocao)
console.log(adocaov2)

function verificarSePodeSerAdotado(idade, porte) {
    const adocao = idade >= idadeMinima
                     ? 'sim' 
                     : porte === 'P'
                     ? 'sim'
                     : 'não'
// return adocao
console
}

// idade 1 + porte M = não
// idade 2 + porte M = sim, pela idade
// idade 2 + porte P = sim, pela idade
// idade 1 + porte P = sim, pelo porte

verificarSePodeSerAdotado(1, 'M')
verificarSePodeSerAdotado(2, 'M')
verificarSePodeSerAdotado(2, 'P')
verificarSePodeSerAdotado(1, 'P')