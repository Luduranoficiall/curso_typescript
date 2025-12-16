# 13_ts_com_express — TypeScript com Express

Neste módulo você vai aprender:
- Criando um projeto Node.js com TypeScript
- Instalando e usando o Express
- Tipando rotas e middlewares

## Criando o projeto
```bash
npm init -y
npm install typescript @types/node @types/express express --save-dev
npx tsc --init
```

## Exemplo de servidor Express com TypeScript
```ts
import express, { Request, Response } from 'express';
const app = express();
app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript + Express!');
});
app.listen(3000);
```

---
Próximo módulo: API RESTful com TypeScript
