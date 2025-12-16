# Web (React) - Fullstack Monorepo

Este pacote é o frontend React do exemplo fullstack monorepo.

## Scripts

- `npm install` — Instala as dependências
- `npm run build` — Compila o projeto TypeScript
- `npm start` — Serve a build (requer build prévia)

## Estrutura

- `src/` — Código-fonte React
- `public/` — Arquivos estáticos (inclui `index.html`)
- Usa tipos compartilhados de `@types`

## Integração

- Consome a API do pacote `api` usando os tipos compartilhados de `types`.

## Como rodar

1. Instale as dependências em todos os pacotes:
   ```sh
   cd ../..
   npm install
   cd packages/web
   npm install
   ```
2. Compile os tipos e a API:
   ```sh
   cd ../types && npm run build
   cd ../api && npm run build
   ```
3. Compile e rode o frontend:
   ```sh
   cd ../web
   npm run build
   npm start
   ```

## Observações
- Certifique-se de que a API está rodando para consumir os dados.
- O frontend utiliza os tipos TypeScript compartilhados para máxima segurança de tipos.
