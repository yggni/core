import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerConfigService } from '@yggni/enigma';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const port = app.get(ConfigService).get('port');
  const swagger = app.get(SwaggerConfigService);

  swagger.addSwagger(app, {
    title: 'Dasil',
    description: 'Dasil API',
    route: 'api-docs',
    version: 'v1'
  });

  await app.listen(port);


}
bootstrap();
