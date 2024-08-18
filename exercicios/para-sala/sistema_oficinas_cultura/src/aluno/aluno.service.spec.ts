import { Test, TestingModule } from '@nestjs/testing';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { ForbiddenException } from '@nestjs/common';

describe('AlunoService', () => {
  let service: AlunoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlunoService],
    }).compile();

    service = module.get<AlunoService>(AlunoService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar uma mensagem para o controller"', () => {
    const aluno = new CreateAlunoDto();

    expect(service.cadastrar(aluno)).toBe(
      'Eu sou capaz de criar um aluno, mas não sei como salvar essa informação...',
    );
  });

  it('should throw ForbiddenException if the age is less than or equal to 16', () => {
    const aluno = new CreateAlunoDto();
    aluno.anoNascimento = new Date().getFullYear() - 16;

    expect(() => service.cadastrar(aluno)).toThrow(ForbiddenException);
  });
});
