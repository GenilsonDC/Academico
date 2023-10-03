import fs from 'fs/promises';

export const db = {
  // função para simular a conexão com um banco de dados
  async connect (): Promise<void> {
    try {
      // cria a pasta 'data', que vai conter os arquivos do bd
      await fs.mkdir('data');
    } catch (err) {
      // ignora o erro se ele for do tipo 'diretório já existe'
      if (err.code !== 'EEXIST') {
        throw err;
      }
    }
  },

  // função para buscar o conteúdo de um arquivo JSON
  async find (filename: string): Promise<any> {
    try {
      // lê o arquivo da pasta data
      const fileBuffer = await fs.readFile(`data/${filename}`);

      // retorna o JSON parseado
      return JSON.parse(fileBuffer.toString());
    } catch (err) {
      // se o arquivo não existe, retorna uma lista vazia
      if (err.code === 'ENOENT') {
        return [];
      } else {
        throw err;
      }
    }

  },

  // função para gravar o conteúdo em um arquivo JSON. Apaga o conteúdo anterior se o arquivo já existia
  async update (filename: string, data: any): Promise<string> {
    try {
      // escreve o arquivo na pasta data
      await fs.writeFile(`data/${filename}`, JSON.stringify(data));

      // retorna o nome do arquivo criado / atualizado
      return filename;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}