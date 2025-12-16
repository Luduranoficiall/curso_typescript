# Integração Avançada — 8_CLASSES + 9_MODULES + 14_ts_api_restful

## Exemplo: Usando Classes, Módulos e API RESTful

### 1. Defina uma classe Produto em um módulo separado:
```ts
// src/models/Produto.ts
export class Produto {
  constructor(
    public id: number,
    public nome: string,
    public preco: number
  ) {}
}
```

### 2. Importe e use a classe Produto em um controller de API:
```ts
// src/controllers/produtoController.ts
import { Produto } from '../models/Produto';
import { Request, Response } from 'express';

let produtos: Produto[] = [];

export function criarProduto(req: Request, res: Response) {
  const { nome, preco } = req.body;
  const novo = new Produto(Date.now(), nome, preco);
  produtos.push(novo);
  res.status(201).json(novo);
}
```

### 3. Exporte as rotas do módulo:
```ts
// src/routes/produtoRoutes.ts
import { Router } from 'express';
import { criarProduto } from '../controllers/produtoController';
const router = Router();
router.post('/produtos', criarProduto);
export default router;
```

### 4. Integre no app principal:
```ts
// src/index.ts
import express from 'express';
import produtoRoutes from './routes/produtoRoutes';
const app = express();
app.use(express.json());
app.use('/api', produtoRoutes);
app.listen(3002);
```

---
Esses exemplos mostram como integrar classes, módulos e API RESTful em um projeto real, promovendo reuso e organização.
