import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { AlunoRepository } from './aluno.repository';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunoService {
  constructor(private readonly alunoRepository: AlunoRepository) {}

  cadastrar(createAlunoDto: CreateAlunoDto) {
    // Pessoas a partir de 16 anos (professores e estudantes);
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - createAlunoDto.anoNascimento;
    const IDADE_MIN_CADASTRO = 16;
    if (idade <= IDADE_MIN_CADASTRO) {
      throw new ForbiddenException('A idade mínima para cadastro é 16 anos.');
    }

    // TODO: Implentar um teste unitário para verificar essa regra

    // TO DO: Implementar a regra de negácio:
    // Não pode haver duplicação de registros de alunos, cursos e professores - identificador único;

    const novoAluno = new Aluno(
      createAlunoDto.nome,
      createAlunoDto.endereco,
      createAlunoDto.email,
      createAlunoDto.telefone,
    );

    const alunoCadastrado = this.alunoRepository.criar(novoAluno);
    return alunoCadastrado;
  }
}

// Eu não devo persistir informação de data de nascimento no meu sistema;
