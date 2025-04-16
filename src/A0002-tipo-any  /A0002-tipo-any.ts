// Utilize any apenas em último caso
// O tipo any é um tipo especial que pode representar qualquer valor.
// Isso significa que você pode atribuir qualquer valor a uma variável do tipo any.
// No entanto, isso também significa que você perde a verificação de tipo em tempo de compilação.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));

// Module mode
export default 1;
