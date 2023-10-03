import { Request, Response } from 'express';

class ArtistController {
  // função para criar um novo artista
  async postArtist(req: Request, res: Response): Promise<void> {
    try {

    } catch (e) {
      // envia status 500 caso algum erro inesperado ocorra
      res.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
      });
    }
  }

  // função para buscar um artista
  async getArtist(req: Request, res: Response): Promise<void> {
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

export = new ArtistController();
