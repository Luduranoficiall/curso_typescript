# 7_CRIACAO_DE_TIPOS — Criação de Tipos

Neste módulo você vai aprender:
- Type Aliases
- Tipos literais
- Tipos utilitários (Partial, Readonly, Pick, Omit)
- Type Assertions

## Type Aliases
```ts
type ID = number | string;
let usuarioId: ID = 123;
```

## Tipos literais
```ts
let status: 'ativo' | 'inativo';
status = 'ativo';
```

## Tipos utilitários
```ts
type Pessoa = { nome: string; idade: number };
type ParcialPessoa = Partial<Pessoa>;
```

## Type Assertions
```ts
let valor: any = '123';
let tamanho: number = (valor as string).length;
```

---
Próximo módulo: Classes
