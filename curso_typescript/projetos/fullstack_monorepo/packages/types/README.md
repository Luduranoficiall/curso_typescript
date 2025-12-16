# Types (Compartilhados) - Fullstack Monorepo

Este pacote contém os tipos TypeScript compartilhados entre a API e o frontend.

## Scripts

- `npm run build` — Compila os tipos para a pasta `dist`

## Estrutura

- `User.ts` — Interface de usuário compartilhada

## Como rodar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Compile os tipos:
   ```sh
   npm run build
   ```

## Observações
- Os tipos compilados podem ser importados via path mapping nos outros pacotes.
- Garante segurança de tipos de ponta a ponta no monorepo.
