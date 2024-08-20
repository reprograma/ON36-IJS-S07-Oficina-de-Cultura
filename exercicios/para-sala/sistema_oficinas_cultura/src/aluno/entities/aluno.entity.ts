export class Aluno {
  id: string;
  nome: string;
  endereco: string;
  email: string;
  telefone: string;
  cursos: string[];

  constructor(nome: string, endereco: string, email: string, telefone: string) {
    this.nome = nome;
    this.endereco = endereco;
    this.email = email;
    this.telefone = telefone;
    this.cursos = [];
  }
}
