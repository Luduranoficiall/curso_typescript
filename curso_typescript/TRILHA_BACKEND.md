# Trilha Temática: Backend TypeScript

## Exercício 1: CRUD de Usuários
**Enunciado:**
Implemente uma API RESTful de usuários com TypeScript e Express. Cada usuário deve ter id, nome e email. Implemente rotas para criar, listar, atualizar e remover usuários.

**Solução:**
```ts
import express from 'express';
const app = express();
app.use(express.json());
let users = [];
app.post('/users', (req, res) => { users.push(req.body); res.status(201).json(req.body); });
app.get('/users', (req, res) => res.json(users));
app.put('/users/:id', (req, res) => { users = users.map(u => u.id == req.params.id ? req.body : u); res.json(req.body); });
app.delete('/users/:id', (req, res) => { users = users.filter(u => u.id != req.params.id); res.status(204).end(); });
app.listen(4000);
```

---
## Exercício 2: Autenticação JWT
**Enunciado:**
Adicione autenticação JWT à API. O login deve retornar um token e rotas protegidas devem exigir autenticação.

**Solução:**
```ts
// Use o exemplo EXEMPLO_MICROSERVICO_USERS.ts já criado
```

---
## Exercício 3: Logs e Monitoramento
**Enunciado:**
Implemente logs estruturados e monitore erros com Sentry.

**Solução:**
```ts
// Use o exemplo EXEMPLO_LOGS_MONITORAMENTO.ts já criado
```

---
## Exercício 4: Testes E2E
**Enunciado:**
Implemente testes E2E para o fluxo de autenticação.

**Solução:**
```ts
// Use o exemplo EXEMPLO_TESTE_E2E.cy.ts já criado
```
