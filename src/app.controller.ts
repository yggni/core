import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { User } from './entities/user.entity';


@Controller('users')
@ApiTags('users')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiResponse({ status: 200, isArray: true, type: User, description: 'Success' })
  async getAllUsers(): Promise<Array<User>> {
    return await this.appService.getAllUsers();
  }


  @Post()
  @ApiResponse({ status: 201, description: 'Success' })
  async addUser(@Body() input: User): Promise<void> {
    return await this.appService.addUser(input);
  }
}
