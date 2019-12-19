import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsBoolean, IsString, MaxLength } from 'class-validator';

export class CreateTodoDto {
  // Swagger settings
  @ApiModelProperty({
    type: 'strings',
    description: 'Name of todo',
    example: 'Fix bugs on wip project',
    required: true,
  })
  // Validation settings
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name!: string;

  // Swagger settings
  @ApiModelProperty({
    type: 'strings',
    description: 'Completed flag of todo',
    example: false,
    required: true,
  })
  // Validation settings
  @IsBoolean()
  @IsNotEmpty()
  isCompleted!: boolean;
}
