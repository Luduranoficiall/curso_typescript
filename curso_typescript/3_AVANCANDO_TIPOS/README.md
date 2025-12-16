# 3_AVANCANDO_TIPOS — Avançando em Tipos

Neste módulo você vai aprender:
- Union Types
- Intersection Types
- Type Aliases
- Literal Types
- Enum

## Union Types
```ts
let id: number | string;
id = 10;
id = 'dez';
```

## Intersection Types
```ts
interface A { a: string; }
interface B { b: number; }
type AB = A & B;
const obj: AB = { a: 'x', b: 2 };
```

## Type Aliases
```ts
type ID = number | string;
let usuarioId: ID = 123;
```

## Literal Types
```ts
let direcao: 'esquerda' | 'direita';
direcao = 'esquerda';
```

## Enum
```ts
enum Status {
  Ativo,
  Inativo,
  Pendente
}
let s: Status = Status.Ativo;
```

---
Próximo módulo: Operações em Arrays
