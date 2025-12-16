# Exemplos práticos — 5_FUNCOES

## Exemplo 1: Função tipada
```ts
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}
```

## Exemplo 2: Parâmetro opcional
```ts
function exibirIdade(idade?: number) {
  if (idade) {
    console.log(`Idade: ${idade}`);
  } else {
    console.log('Idade não informada');
  }
}
```

## Exemplo 3: Arrow function
```ts
const multiplicar = (a: number, b: number): number => a * b;
```

## Exemplo 4: Callback
```ts
function processar(valor: number, callback: (n: number) => void) {
  callback(valor);
}
```

---
Esses exemplos servem de base para os exercícios do módulo.
