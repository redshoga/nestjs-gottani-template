import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {
  }

  getHello(): string {
    console.log(`sampleKey: ${this.config.sampleKey}`);
    return 'Hello World!';
  }
}
