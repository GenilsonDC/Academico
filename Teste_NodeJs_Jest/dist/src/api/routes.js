"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configRoutes = void 0;
const express_1 = require("express");
const configRoutes = () => {
    const router = (0, express_1.Router)();
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
};
exports.configRoutes = configRoutes;
//# sourceMappingURL=routes.js.map