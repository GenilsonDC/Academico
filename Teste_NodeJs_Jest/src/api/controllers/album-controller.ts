import { Request, Response } from 'express';

class AlbumController {
  // função para criar um novo álbum
  async postAlbum(req: Request, res: Response): Promise<void> {
    try {

    } catch (e) {
      // envia status 500 caso algum erro inesperado ocorra
      res.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
      });
    }
  }

  // função para buscar um album
  async getAlbum(req: Request, res: Response): Promise<void> {
    try {

    } catch (err) {
      // envia status 500 caso algum erro inesperado ocorra
      res.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
      });
    }
  }
}

export = new AlbumController();
