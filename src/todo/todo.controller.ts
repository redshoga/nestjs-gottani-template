import { Controller, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';

@ApiUseTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Post()
  @ApiOperation({
    title: 'Create todo',
    description: 'Create new todo entity to DB',
  })
  @ApiResponse({
    status: 201,
    type: Todo,
  })
  async createOne(@Body() req: CreateTodoDto): Promise<Todo> {
    return this.todoService.createOne(req);
  }
}
