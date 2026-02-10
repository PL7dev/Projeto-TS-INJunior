"use strict";
function resumirLivro(livro) {
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}
// Exemplo
const domCasmurro = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    anoPublicacao: 1899
};
console.log(resumirLivro(domCasmurro));
// "O livro 'Dom Casmurro' foi escrito por Machado de Assis em 1899."
