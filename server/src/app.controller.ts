import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/test-api")
  testApi(): string {
    // Some api data, can be an object also
    return 'my great api';
  }
}