import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import superagent from 'superagent';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8001;

  superagent
    .post('/api/pet')
    .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
    .set('X-API-Key', 'foobar')
    .set('accept', 'json')
    .end((err, res) => {
      // Calling the end function will send the request
    });

  await app.listen(port);
  console.log(`Listening on port ${port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
