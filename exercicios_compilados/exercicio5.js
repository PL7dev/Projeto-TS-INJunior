"use strict";
function apresentarPessoa(p) {
    return `${p.nome} tem ${p.idade} anos e se identifica como ${p.genero}.`;
}
// Exemplo
const maria = { nome: 'Maria', idade: 30, genero: 'feminino' };
console.log(apresentarPessoa(maria)); // "Maria tem 30 anos e se identifica como feminino."
