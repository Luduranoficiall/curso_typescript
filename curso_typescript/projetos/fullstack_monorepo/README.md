# Fullstack Monorepo TypeScript

Este exemplo mostra como organizar um monorepo com API Node.js/Express, frontend React e tipos compartilhados usando TypeScript.

## Estrutura
- packages/
  - api/ (backend Node.js/Express)
  - web/ (frontend React)
  - types/ (tipos compartilhados)

## Como rodar
1. Instale as dependências em cada pacote:
   ```bash
   cd packages/api && npm install
   cd ../web && npm install
   ```
2. Inicie a API:
   ```bash
   npm run dev
   ```
3. Inicie o frontend:
   ```bash
   npm start
   ```

## Benefícios
- Tipagem compartilhada entre backend e frontend
- Organização moderna e escalável
- Pronto para projetos reais

Veja os exemplos de código nas pastas `api`, `web` e `types`.
