# Projeto CRUD Node.js + TypeScript

Este projeto é um exemplo prático de uma API RESTful completa usando Node.js, Express e TypeScript.

## Funcionalidades
- Cadastro, listagem, atualização e remoção de usuários
- Tipagem forte em todas as rotas e modelos
- Validação simples

## Como rodar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm run dev
   ```

## Estrutura
- src/
   - index.ts (ponto de entrada)
   - models/User.ts
   - routes/userRoutes.ts
   - controllers/userController.ts

## Testes e Lint
- Para checar o lint:
   ```bash
   npm run lint
   ```
- Para formatar o código:
   ```bash
   npm run format
   ```
- Para rodar testes (placeholder):
   ```bash
   npm test
   ```

## Exemplo de uso (API)
```bash
curl -X POST http://localhost:3001/api/users -H 'Content-Type: application/json' -d '{"nome":"Maria","email":"maria@email.com"}'
curl http://localhost:3001/api/users
```

---
Veja o código nos arquivos da pasta `src`.
