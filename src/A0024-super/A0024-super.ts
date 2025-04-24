export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Alexandre', 'Cardoso', 48, '123.456.789-00');
const aluno = new Aluno('Alexandre', 'Cardoso', 48, '123.456.789-00', '10A');
const cliente = new Cliente('Alexandre', 'Cardoso', 48, '123.456.789-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.sala);
console.log(cliente.getNomeCompleto());
