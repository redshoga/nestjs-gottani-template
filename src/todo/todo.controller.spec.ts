import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { INestApplication } from '@nestjs/common';
import { TodoService } from './todo.service';

describe('Todo Controller', () => {
  let app: INestApplication;
  let controller: TodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          ...require('../../ormconfig.test.js'),
          entities: [
            Todo,
          ],
        } as TypeOrmModuleOptions),
        TypeOrmModule.forFeature([Todo]),
      ],
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    controller = module.get<TodoController>(TodoController);

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  afterAll(async () => {
    await app.close();
  });
});
