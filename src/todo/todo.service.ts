import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) { }

  async createOne(newTodo: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.save({
      name: newTodo.name,
      isCompleted: newTodo.isCompleted,
    });
  }
}
