"use strict";
function mostrarMensagemStatus(status) {
    switch (status) {
        case 'sucesso':
            return 'Tudo certo! Requisição concluída com sucesso.';
        case 'erro':
            return 'Ocorreu um erro ao processar a requisição.';
        case 'carregando':
            return 'Aguarde... carregando dados.';
        default:
            return 'Status desconhecido.';
    }
}
// Exemplo
console.log(mostrarMensagemStatus('carregando')); // "Aguarde... carregando dados."
