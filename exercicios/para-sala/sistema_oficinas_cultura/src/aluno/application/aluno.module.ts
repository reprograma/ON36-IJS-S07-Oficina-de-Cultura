import { Module } from '@nestjs/common';
import { AlunoController } from '../presenters/http/aluno.controller';
import { AlunoService } from './aluno.service';
import { AlunoFactory } from '../domain/factories/aluno-factory';

@Module({
  controllers: [AlunoController],
  providers: [AlunoService, AlunoFactory],
})
export class AlunoModule {}
