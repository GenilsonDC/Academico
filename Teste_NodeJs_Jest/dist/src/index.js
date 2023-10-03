"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./api/db");
const config_1 = require("./api/config");
dotenv_1.default.config();
// conecta no banco de dados
db_1.db.connect()
    .then(async () => {
    // realiza a configuração inicial do app
    const app = (0, config_1.configApp)();
    // começa a receber requisições na porta 8080
    app.listen(8080, () => console.log(`Server running on port 8080`));
})
    .catch(console.error);
//# sourceMappingURL=index.js.map