import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { TasksModule } from '../src/tasks/tasks.module';

describe('TasksController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TasksModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET - Listar Todos', async () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200);
  });

  it('GET - Listar por id', async () => {
    return request(app.getHttpServer())
      .get('/tasks/1').expect(200);
  });

  it('POST - Criar', async () => {
    return await request(app.getHttpServer())
      .post('/tasks').send({description: "Tarefa Teste",completed: true,cep:84025530})
      .expect(201);
  });

  it('PUT - Atualizar', async () => {
    return await request(app.getHttpServer())
      .put('/tasks/1').send({description: "Tarefa Teste 2",completed: true,cep:84025530}).expect(200);
  });

  it('DELETE - Deletar', async () => {
    return request(app.getHttpServer())
    .get('/tasks/1').expect(200);
  });
});
