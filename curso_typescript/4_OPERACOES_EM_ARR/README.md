# 4_OPERACOES_EM_ARR — Operações em Arrays

Neste módulo você vai aprender:
- Arrays tipados
- Métodos de array (map, filter, reduce, forEach)
- Tuplas

## Arrays tipados
```ts
let numeros: number[] = [1, 2, 3];
let nomes: Array<string> = ['Ana', 'João'];
```

## Métodos de array
```ts
const dobrados = numeros.map(n => n * 2);
const maiores = numeros.filter(n => n > 1);
const soma = numeros.reduce((acc, n) => acc + n, 0);
nomes.forEach(nome => console.log(nome));
```

## Tuplas
```ts
let tupla: [string, number];
tupla = ['idade', 30];
```

---
Próximo módulo: Funções
