import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UserEntity } from './entity/user.entity';
import { UserSeed } from './user.seed';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UserSeed],
  exports: [UsersService, UserSeed]
})
export class UsersModule {}
