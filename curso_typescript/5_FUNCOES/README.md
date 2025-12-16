# 5_FUNCOES — Funções

Neste módulo você vai aprender:
- Funções tipadas
- Parâmetros opcionais e default
- Funções anônimas e arrow functions
- Funções como tipos
- Callback

## Funções tipadas
```ts
function soma(a: number, b: number): number {
  return a + b;
}
```

## Parâmetros opcionais e default
```ts
function saudacao(nome: string = 'Visitante'): string {
  return `Olá, ${nome}!`;
}
function exibirIdade(idade?: number) {
  if (idade) {
    console.log(`Idade: ${idade}`);
  } else {
    console.log('Idade não informada');
  }
}
```

## Funções anônimas e arrow functions
```ts
const multiplicar = (x: number, y: number): number => x * y;
```

## Funções como tipos
```ts
type Operacao = (a: number, b: number) => number;
const dividir: Operacao = (a, b) => a / b;
```

## Callback
```ts
function processar(valor: number, callback: (n: number) => void) {
  callback(valor);
}
```

---
Próximo módulo: Tipos de Objetos
