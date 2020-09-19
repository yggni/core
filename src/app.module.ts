import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EnigmaModule, PostgresConfigService } from '@yggni/enigma';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    EnigmaModule,
    TypeOrmModule.forRootAsync({ useClass: PostgresConfigService }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
