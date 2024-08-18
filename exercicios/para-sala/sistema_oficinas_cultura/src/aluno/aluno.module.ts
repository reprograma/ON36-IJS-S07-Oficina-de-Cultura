import { Module } from '@nestjs/common';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';

@Module({
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AlunoModule {}
