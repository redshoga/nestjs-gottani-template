import { Controller, Get, Post, Body } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { ApiResponse } from '@nestjs/swagger';

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

  @Post('check')
  // Sample swagger settings
  @ApiResponse({ status: 201, description: 'Sample Api Description' })
  checkPost(@Body() photo: Photo): Photo {
    return photo;
  }
}
