type Genero = 'masculino' | 'feminino';

interface Pessoa {
  nome: string;
  idade: number;
  genero: Genero;
}

function apresentarPessoa(p: Pessoa): string {
  return `${p.nome} tem ${p.idade} anos e se identifica como ${p.genero}.`;
}

// Exemplo
const maria: Pessoa = { nome: 'Maria', idade: 30, genero: 'feminino' };
console.log(apresentarPessoa(maria)); // "Maria tem 30 anos e se identifica como feminino."