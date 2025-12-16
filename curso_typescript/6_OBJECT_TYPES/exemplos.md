# Exemplos práticos — 6_OBJECT_TYPES

## Exemplo 1: Interface
```ts
interface Produto {
  nome: string;
  preco: number;
}
const p: Produto = { nome: 'Caneta', preco: 2.5 };
```

## Exemplo 2: Interface com método
```ts
interface Animal {
  nome: string;
  falar(): void;
}
const cachorro: Animal = {
  nome: 'Rex',
  falar() { console.log('Au au!'); }
};
```

## Exemplo 3: Interface estendendo type
```ts
type Endereco = { rua: string; numero: number };
interface EnderecoCompleto extends Endereco {
  cidade: string;
}
```

---
Esses exemplos facilitam a compreensão de interfaces e types.
