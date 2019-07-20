import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserSeed {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>
  ) {}

  async initialize(): Promise<void> {
    const username = 'bilal';
    const user = await this.usersRepo.findOne({ where: { username } });

    if (!user) {
      const newUser = await this.usersRepo.create({
        username: 'bilal',
        password: 'v%re$1%3432F'
      });
      await this.usersRepo.save(newUser);
    }
  }
}
