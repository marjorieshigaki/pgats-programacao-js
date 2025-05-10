

// async - assíncrono
async function exibirNomeDogFormatado (nome) {
    return nome.toUpperCase();
  }

// await - espera o resultado de uma promise
console.log(await exibirNomeDogFormatado(`Pipoca`))

