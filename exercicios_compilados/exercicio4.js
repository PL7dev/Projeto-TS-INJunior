"use strict";
const usuario = {
    nome: 'João',
    email: 'joao@email.com',
    exibirInfo() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
};
console.log(usuario.exibirInfo()); // "Nome: João - Email: joao@email.com"
