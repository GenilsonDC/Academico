import { Router } from 'express';

export const configRoutes = (): Router => {
  const router = Router();

  // rota base para teste
  router.route('/').get((req, res) => {
    res.send('hello world!');
  });

  // rota para criar um novo álbum
  router.route('/album').post(async (req, res) => {
    res.sendStatus(200);
  });

  // rota para buscar um álbum
  router.route('/album').get(async (req, res) => {
    res.sendStatus(200);
  });

  // rota para criar um novo artista
  router.route('/artist').post(async (req, res) => {
    res.sendStatus(200);
  });

  // rota para buscar um artista
  router.route('/artist').get(async (req, res) => {
    res.sendStatus(200);
  });

  return router;
}