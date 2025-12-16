# Exemplos práticos — 4_OPERACOES_EM_ARR

## Exemplo 1: Map, Filter e Reduce
```ts
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2); // [2, 4, 6, 8]
const pares = numeros.filter(n => n % 2 === 0); // [2, 4]
const soma = numeros.reduce((acc, n) => acc + n, 0); // 10
```

## Exemplo 2: Tuplas
```ts
let produto: [string, number];
produto = ['Caneta', 2.5];
```

## Exemplo 3: forEach
```ts
const nomes = ['Ana', 'João', 'Maria'];
nomes.forEach(nome => console.log(nome));
```

---
Esses exemplos ajudam a entender manipulação de arrays e tuplas.
