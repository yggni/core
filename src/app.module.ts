import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EnigmaModule } from 'enigma';

@Module({
  imports: [EnigmaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
