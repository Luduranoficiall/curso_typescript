# Exemplos práticos — 7_CRIACAO_DE_TIPOS

## Exemplo 1: Type Alias
```ts
type Pedido = { id: number; produto: string; quantidade: number; status: 'aberto' | 'fechado' };
const novoPedido: Pedido = { id: 1, produto: 'Notebook', quantidade: 2, status: 'aberto' };
```

## Exemplo 2: Utility Types
```ts
type Pessoa = { nome: string; idade: number };
type ParcialPessoa = Partial<Pessoa>;
const p: ParcialPessoa = { nome: 'Ana' };
```

## Exemplo 3: Type Assertion
```ts
let valor: any = '123';
let tamanho: number = (valor as string).length;
```

---
Esses exemplos facilitam a criação e manipulação de tipos avançados.
