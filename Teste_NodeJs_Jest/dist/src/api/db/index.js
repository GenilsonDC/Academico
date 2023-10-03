"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const promises_1 = __importDefault(require("fs/promises"));
exports.db = {
    // função para simular a conexão com um banco de dados
    async connect() {
        try {
            // cria a pasta 'data', que vai conter os arquivos do bd
            await promises_1.default.mkdir('data');
        }
        catch (err) {
            // ignora o erro se ele for do tipo 'diretório já existe'
            if (err.code !== 'EEXIST') {
                throw err;
            }
        }
    },
    // função para buscar o conteúdo de um arquivo JSON
    async find(filename) {
        try {
            // lê o arquivo da pasta data
            const fileBuffer = await promises_1.default.readFile(`data/${filename}`);
            // retorna o JSON parseado
            return JSON.parse(fileBuffer.toString());
        }
        catch (err) {
            // se o arquivo não existe, retorna uma lista vazia
            if (err.code === 'ENOENT') {
                return [];
            }
            else {
                throw err;
            }
        }
    },
    // função para gravar o conteúdo em um arquivo JSON. Apaga o conteúdo anterior se o arquivo já existia
    async update(filename, data) {
        try {
            // escreve o arquivo na pasta data
            await promises_1.default.writeFile(`data/${filename}`, JSON.stringify(data));
            // retorna o nome do arquivo criado / atualizado
            return filename;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
};
//# sourceMappingURL=index.js.map