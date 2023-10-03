import dotenv from 'dotenv';
import { db } from './api/db';
import { configApp } from './api/config';

dotenv.config();

// conecta no banco de dados
db.connect()
  .then(async () => {
    // realiza a configuração inicial do app
    const app = configApp();

    // começa a receber requisições na porta 8080
    app.listen(8080, () => console.log(`Server running on port 8080`));
  })
  .catch(console.error);
