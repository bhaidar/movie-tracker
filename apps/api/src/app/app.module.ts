import { Module, DynamicModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { ConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieTrackerModule } from './movietracker/movietracker.module';
import { UsersModule } from './users';
import { AuthModule } from './auth';

@Module({})
export class AppModule {
  static forRoot(connOptions: ConnectionOptions): DynamicModule {
    return {
      module: AppModule,
      controllers: [AppController],
      imports: [
        MovieTrackerModule,
        TypeOrmModule.forRoot(connOptions),
        UsersModule,
        AuthModule
      ],
      providers: []
    };
  }
}
