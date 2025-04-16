type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;
const inter: Intersecao = 'A'; // A é a única letra que está presente em todas as interseções

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(pessoa);
console.log(inter);

// Module mode
export { pessoa };
