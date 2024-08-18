import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Injectable()
export class AlunoService {
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

    return 'Eu sou capaz de criar um aluno, mas não sei como salvar essa informação...';
  }
}

// Eu não devo persistir informação de data de nascimento no meu sistema;
