import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { config } from './environment';
import { info } from './library/logger';

async function bootstrap() {
  const { appName, port, version } = config;
  const url = `/${version}`;
  const app = await NestFactory.create(AppModule, {
    logger: ['warn', 'error'],
    cors: true,
  });
  const options = new DocumentBuilder()
    .setTitle(appName)
    .setDescription('The API Documentation')
    .addServer(`${url}`)
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document, {
    customSiteTitle: `${appName} Api Docs`,
    customCss: '.swagger-ui .topbar{display:none}',
  });

  app.setGlobalPrefix(version);

  await app.listen(port, () => {
    info(`${appName} is running in http://localhost:${port}${url}`);
  });
}
bootstrap();
