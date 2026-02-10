interface Usuario {
  nome: string;
  email: string;
  exibirInfo(): string;
}

const usuario: Usuario = {
  nome: 'João',
  email: 'joao@email.com',
  exibirInfo() {
    return `Nome: ${this.nome} - Email: ${this.email}`;
  }
};

console.log(usuario.exibirInfo()); // "Nome: João - Email: joao@email.com"
