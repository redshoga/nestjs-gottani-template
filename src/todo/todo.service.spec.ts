import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from './todo.entity';

describe('TodoService', () => {
  let service: TodoService;

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
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
