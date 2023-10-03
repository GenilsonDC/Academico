import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { configRoutes } from './routes';

export const configApp = (): Express => {
  // instancia um novo app com o express
  const app = express();

  // configura para que as requisições sejam parseadas em json
  app.use(bodyParser.json());

  // configura as rotas definidas
  const router = configRoutes();
  app.use(router);

  return app;
}