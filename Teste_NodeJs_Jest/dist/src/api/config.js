"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configApp = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
const configApp = () => {
    // instancia um novo app com o express
    const app = (0, express_1.default)();
    // configura para que as requisições sejam parseadas em json
    app.use(body_parser_1.default.json());
    // configura as rotas definidas
    const router = (0, routes_1.configRoutes)();
    app.use(router);
    return app;
};
exports.configApp = configApp;
//# sourceMappingURL=config.js.map