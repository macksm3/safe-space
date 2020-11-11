import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/safe-space/browser')
    }),
    ConfigModule.forRoot()
  ]
})
export class AppModule {}
