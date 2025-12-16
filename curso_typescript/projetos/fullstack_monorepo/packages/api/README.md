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

## Observações
- A API utiliza os tipos TypeScript compartilhados para máxima segurança de tipos.
- O frontend consome esta API.
