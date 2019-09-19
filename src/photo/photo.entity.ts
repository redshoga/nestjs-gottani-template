import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  // Sample swagger settings
  @ApiModelProperty({
    description: 'Sample Description',
    example: 'Pretty Cats',
  })
  // Sample validation setting
  @Length(5, 20)
  // TypeORM setting
  @Column({ length: 500 })
  name: string;

  @ApiModelProperty()
  @Column('text')
  description: string;

  @ApiModelProperty()
  @Column()
  filename: string;

  @ApiModelProperty()
  @Column('int')
  views: number;

  @ApiModelProperty()
  @Column()
  isPublished: boolean;
}
