function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
    return idade >= 1 && porte === 'M';
}

function calcularConsumoDeRacao(nome, idade, peso) {
    return Math.round(peso * 300); 
}

function decidirTipoDeAtividadePorPorte(porte) {
    const atividades = {
        'pequeno': 'brincar dentro de casa',
        'medio': 'passear no parque',
        'grande': 'correr na praia'
    };
    return atividades[porte];
}

async function buscarDadoAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Pipoca');
        }, 1000);
    });
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
};