import { Controller, Get, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  async findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post()
  async create(): Promise<Photo> {
    return this.photoService.createSample();
  }
}
