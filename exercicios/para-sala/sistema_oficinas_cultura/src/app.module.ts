import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';

@Module({
  imports: [AlunoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
