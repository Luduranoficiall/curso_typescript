# API (Express) - Fullstack Monorepo

Este pacote é a API Node.js/Express do exemplo fullstack monorepo.

## Scripts

- `npm install` — Instala as dependências
- `npm run build` — Compila o projeto TypeScript
- `npm start` — Inicia a API em modo desenvolvimento

## Estrutura

- `src/` — Código-fonte da API
- Usa tipos compartilhados de `@types`

## Endpoints

- `GET /users` — Lista todos os usuários
- `POST /users` — Cria um novo usuário

## Como rodar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Compile os tipos:
   ```sh
   cd ../types && npm run build
   cd ../api
   ```
3. Compile e rode a API:
   ```sh
   npm run build
   npm start
   ```

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
curl -X POST http://localhost:4000/api/users -H 'Content-Type: application/json' -d '{"nome":"Maria","email":"maria@email.com"}'
curl http://localhost:4000/api/users
```

## Observações
- A API utiliza os tipos TypeScript compartilhados para máxima segurança de tipos.
- O frontend consome esta API.
