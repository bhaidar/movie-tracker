import { Module, DynamicModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieTrackerModule } from './movietracker/movietracker.module';

@Module({})
export class AppModule {
  static forRoot(connOptions: ConnectionOptions): DynamicModule {
    return {
      module: AppModule,
      controllers: [AppController],
      imports: [MovieTrackerModule, TypeOrmModule.forRoot(connOptions)],
      providers: [AppService]
    };
  }
}
