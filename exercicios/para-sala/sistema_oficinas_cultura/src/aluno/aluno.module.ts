import { Module } from '@nestjs/common';
import { AlunoController } from './aluno.controller';

@Module({
  controllers: [AlunoController],
  providers: [],
})
export class AlunoModule {}
