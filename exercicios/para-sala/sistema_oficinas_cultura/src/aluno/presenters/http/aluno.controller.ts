import { Body, Controller, Post } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { AlunoService } from '../../application/aluno.service';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  cadastrar(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunoService.cadastrar(createAlunoDto);
  }

  @Post()
  listar() {
    return this.alunoService.listar();
  }
}
