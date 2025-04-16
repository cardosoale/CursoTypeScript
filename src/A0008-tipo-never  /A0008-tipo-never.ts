// tipo never retorno erro, ou loop infinito, travando o código.
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();

// Module mode
export default 1;
