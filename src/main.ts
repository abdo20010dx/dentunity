import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './auth/auth.gaurd';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const config = new DocumentBuilder()
    // .addBearerAuth()
    .addSecurity('ApiKeyAuth', {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    })
    .addSecurityRequirements('ApiKeyAuth')
    .setTitle('dentUnity example by Abdo Goma')
    .setDescription('The dentUnity API description => this app helps student_doctors communicate with patients to treat,learn and graduate . also helps doctors to sell thier tools online   ' + `\n
     contact me on +201151761416`)
    .setVersion('1.0')
    .addTag('dentUnity')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  const reflector = app.get(Reflector);
  app.useGlobalGuards(new AuthGuard(reflector));
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //just get data as dto
    // transform: true // you can  set default values in dto
  }));

  await app.listen(process.env.PORT, '0.0.0.0', (err, address) => {
    console.log(err);
    console.log(address);

  });
}
bootstrap();