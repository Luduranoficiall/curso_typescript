# 14_ts_api_restful — API RESTful com TypeScript

Neste módulo você vai aprender:
- Criando uma API RESTful com TypeScript e Express
- Tipando controllers, rotas e modelos
- Boas práticas de organização

## Exemplo básico de API
```ts
import express, { Request, Response } from 'express';
const app = express();
app.use(express.json());

interface Usuario {
  id: number;
  nome: string;
}
const usuarios: Usuario[] = [];

app.get('/usuarios', (req: Request, res: Response) => {
  res.json(usuarios);
});

app.post('/usuarios', (req: Request, res: Response) => {
  const usuario: Usuario = req.body;
  usuarios.push(usuario);
  res.status(201).json(usuario);
});

app.listen(3000);
```

---
Próximo módulo: Conteúdo extra/gratuito
