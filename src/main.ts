import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.Module';
import { RollModule } from './Roll/roll.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar títulos de documentación
 const options = new DocumentBuilder() 
    .setTitle('Rent A Car REST API')
    .setDescription('API REST para rentar carros con VUE')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options); 

  // La ruta en que se sirve la documentación
 SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
 //waldo main
/*
async function bootstrap() {
  const app = await NestFactory.create(AppModule , {cors:true});
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe({
    transform:true,
    whitelist:true,
    forbidNonWhitelisted:true,
  }),
)
}
bootstrap();
*/