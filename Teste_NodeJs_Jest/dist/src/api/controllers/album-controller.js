"use strict";
class AlbumController {
    // função para criar um novo álbum
    async postAlbum(req, res) {
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
    // função para buscar um album
    async getAlbum(req, res) {
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
module.exports = new AlbumController();
//# sourceMappingURL=album-controller.js.map