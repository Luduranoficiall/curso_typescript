

# Web (React) - Fullstack Monorepo

🚀 Este curso vai do básico ao especialista em TypeScript, React e desenvolvimento fullstack moderno. Ideal para quem quer dominar do zero ao avançado!

![Cobertura de Testes](./coverage/badge.svg)

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

## Exemplo de uso
Adicione um usuário pelo formulário. O frontend consome a API e exibe a lista em tempo real.

## Observações
- Certifique-se de que a API está rodando para consumir os dados.
- O frontend utiliza os tipos TypeScript compartilhados para máxima segurança de tipos.
