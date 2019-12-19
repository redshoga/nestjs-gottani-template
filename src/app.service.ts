import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { debugLogger } from './logger';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {
  }

  getHello(): string {
    debugLogger.debug(`sampleKey: ${this.config.sampleKey}`);
    return 'Hello World!';
  }
}
