import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('deve retornar uma mensagem de health check quando a rota / for requisitada', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('deve retornar uma mensagem quando a rota /alunos for requisitada', () => {
    return request(app.getHttpServer())
      .post('/alunos')
      .expect(201)
      .expect(
        'Eu sou capaz de criar um aluno, mas não sei como salvar essa informação...',
      );
  });
});
