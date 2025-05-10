/*

  tentar {
    // conexão com o banco de dados (exemplo)
  } pegar (erro/excecao) {
    // salvar a excecao em algum lugar (exemplo: arquivo de log)
    // exibir
  }

  lançar = throw new Error('Erro ao conectar ao banco de dados')

*/

// TENTAR FAZER ALGO QUE PODE DAR ERRADO
try {
  console.log(`Tentando alimentar o Pet...`)
  // throw new Error('pet não quis alimento')

  // TENTAR CONECTAR NO BANCO
  // EXECUTAR UMA QUERY

} catch (excecao) {
  // TRATAR ESTE ERRO - EXIBIR, SALVAR, MELHORAR A DESCRIÇÃO DESSE ERRO
  console.log(excecao)
  console.log(excecao.name)
  console.log(excecao.message)

  // CAPTURA A EXCECAO

} finally {
  // SEMPRE EXECUTA, COMO SE FOSSE UMA ACAO FINAL
  console.log(`SEMPRE SEREI EXECUTADO`)

  // FECHAR A CONEXAO COM O BANCO DE DADOS (AO MENOS GARANTIR QUE FOI FECHADA)
}
