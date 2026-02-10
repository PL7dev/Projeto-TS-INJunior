interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

function resumirLivro(livro: Livro): string {
  return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}

// Exemplo
const domCasmurro: Livro = {
  titulo: 'Dom Casmurro',
  autor: 'Machado de Assis',
  anoPublicacao: 1899
};

console.log(resumirLivro(domCasmurro));
// "O livro 'Dom Casmurro' foi escrito por Machado de Assis em 1899."