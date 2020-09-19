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

  async getHello(): Promise<string> {
    const users = await this.userRepo.find();
    return JSON.stringify(users);
  }
}
