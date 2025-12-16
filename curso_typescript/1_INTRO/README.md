# 1_INTRO — Introdução

Bem-vindo ao curso completo de TypeScript!

Neste módulo você vai aprender:
- O que é TypeScript
- Vantagens sobre o JavaScript
- Como instalar e configurar o ambiente
- Compilar e rodar seu primeiro código

## O que é TypeScript?
TypeScript é um superset do JavaScript que adiciona tipagem estática e recursos avançados, facilitando o desenvolvimento de aplicações robustas.

## Instalação
1. Instale o Node.js (https://nodejs.org/)
2. Instale o TypeScript globalmente:
   ```bash
   npm install -g typescript
   ```
3. Verifique a instalação:
   ```bash
   tsc --version
   ```

## Primeiro código
Crie um arquivo `hello.ts`:
```ts
let mensagem: string = 'Olá, TypeScript!';
console.log(mensagem);
```
Compile:
```bash
tsc hello.ts
node hello.js
```

---
Próximo módulo: Fundamentos do TypeScript
