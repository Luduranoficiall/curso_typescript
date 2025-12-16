# 6_OBJECT_TYPES — Tipos de Objetos

Neste módulo você vai aprender:
- Objetos tipados
- Interface
- Diferença entre type e interface
- Interface com métodos
- Interface estendendo outra interface

## Objetos tipados
```ts
const usuario: { nome: string; idade: number } = {
  nome: 'Ana',
  idade: 28
};
```

## Interface
```ts
interface Produto {
  nome: string;
  preco: number;
}
const p: Produto = { nome: 'Caneta', preco: 2.5 };
```

## Diferença entre type e interface
- `type` pode ser usado para union/intersection types
- `interface` é mais usada para objetos e pode ser extendida

## Interface com métodos
```ts
interface Animal {
  nome: string;
  falar(): void;
}
```

## Interface estendendo outra interface
```ts
interface Mamifero extends Animal {
  temPelos: boolean;
}
```

---
Próximo módulo: Criação de Tipos
