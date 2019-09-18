import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private sampleKey: string;
  constructor(config: ConfigService) {
    // this.sampleKey = config.get('SAMPLE_KEY');
    this.sampleKey = config.sampleKey;
  }

  getHello(): string {
    return 'Hello World! ' + this.sampleKey;
  }
}
