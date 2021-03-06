import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ) { }

  async getAllUsers(): Promise<Array<User>> {
    const users = await this.userRepo.find();
    return users;
  }

  async addUser(user: User): Promise<void> {
    await this.userRepo.save(user);
  }
}
