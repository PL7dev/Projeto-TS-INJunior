function retornarElemento<T>(arr: T[], index: number): T | undefined {
  return arr[index];
}

// Testes
console.log(retornarElemento([10, 20, 30], 1)); // 20
console.log(retornarElemento(['a', 'b', 'c'], 0)); // "a"