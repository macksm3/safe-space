import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import path from "path";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // root(@Res() response): void {
  //   response.sendFile(path.resolve('../client/dist/safe-space/index.html'))
  // }

  @Get()
  testApi(): string {
    // Some api data, can be an object also
    return 'my great api';
  }
}