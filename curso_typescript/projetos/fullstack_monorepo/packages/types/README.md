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
```ts
import { User } from 'types';
const usuario: User = { id: 1, nome: 'Ana', email: 'ana@email.com' };
```

## Observações
- Os tipos compilados podem ser importados via path mapping nos outros pacotes.
- Garante segurança de tipos de ponta a ponta no monorepo.
