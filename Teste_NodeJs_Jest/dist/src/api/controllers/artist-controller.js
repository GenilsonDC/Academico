"use strict";
class ArtistController {
    // função para criar um novo artista
    async postArtist(req, res) {
        try {
        }
        catch (e) {
            // envia status 500 caso algum erro inesperado ocorra
            res.status(500).json({
                statusCode: 500,
                message: 'Internal server error',
            });
        }
    }
    // função para buscar um artista
    async getArtist(req, res) {
        try {
        }
        catch (err) {
            // envia status 500 caso algum erro inesperado ocorra
            res.status(500).json({
                statusCode: 500,
                message: 'Internal server error',
            });
        }
    }
}
module.exports = new ArtistController();
//# sourceMappingURL=artist-controller.js.map