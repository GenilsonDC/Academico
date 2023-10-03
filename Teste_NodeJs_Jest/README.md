# fatec-TDD

## Iniciando um projeto Node.js

1. Instalar o Node.js, versão mais atual

- No Windows: https://nodejs.org/en
- No Linux: https://github.com/nodesource/distributions#installation-instructions

2. Testar instalação

- `npm -v`
- `node -v`

3. Iniciar um novo projeto

- `npm init`
- Avançar pela criação
- Ao final, um arquivo package.json deve ter sido criado em seu projeto

## Instalando pacotes básicos e configurações iniciais

1. Instalar pacotes _dotenv_, _body-parser_, _express_

- `npm install dotenv body-parser express`

2. Instalar o typescript _globalmente_, e seus tipos como Dependência de Desenvolvimento

- `npm i typescript -save-dev -g`
- `npm i @types/node -D`

3. Instalar mais algumas dependências de desenvolvimento

- `npm i copyfiles rimraf @types/express -D`

4. Configurar o typescript
   Criar um arquivo _tsconfig.json_ na raiz do projeto, com as seguintes configurações:

   ```
   {
     "compilerOptions": {
       "outDir": "dist",
       "module": "commonjs",
       "target": "es2019",
       "esModuleInterop": true,
       "sourceMap": true,
       "rootDirs": ["src", "tests"],
       "baseUrl": "src",
       "paths": {
         "@/tests/*": ["../tests/*"],
         "@/*": ["*"]
       }
     }
   }
   ```

5. Criar scripts para rodar o projeto no package.json

- Alterar as seguintes chaves no package.json:
  ```
    "main": "src/index.ts",
    "scripts": {
      "copyfiles": "rimraf dist && copyfiles -u 1 src/**/*.html src/**/*.css src/**/*.js dist/",
      "build": "npm run copyfiles && tsc",
      "start": "npm run build && node dist/index.js",
      "test": "jest --passWithNoTests --maxWorkers=1"
    },
  ```
- Criar uma pasta _src_, e um arquivo _index.ts_ dentro dela
- Já podemos testar nossa compilação! Rode no terminal:
  - `npm run build`
  - Uma pasta _dist_ e um arquivo _index.js_ vazio devem ter sido gerados

6. Instalar e configurar o Jest


    - ```npm i jest @types/jest jest-mock-req-res ts-jest --save-dev```
    - ```jest --init```
    - No arquivo jest.config gerado, coloque a config ```preset: 'ts-jest```
    - Revisar script "test" no *package.json*
