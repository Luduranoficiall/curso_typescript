# 10_DECORATORS — Decorators

Neste módulo você vai aprender:
- O que são decorators
- Decorator de classe
- Decorator de método
- Decorator de propriedade

> Para usar decorators, ative `experimentalDecorators` no tsconfig.json

## Decorator de classe
```ts
function logar(construtor: Function) {
  console.log('Classe criada:', construtor.name);
}
@logar
class Teste {}
```

## Decorator de método
```ts
function logarMetodo(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log('Método:', key);
}
class Exemplo {
  @logarMetodo
  falar() {}
}
```

## Decorator de propriedade
```ts
function logarPropriedade(target: any, key: string) {
  console.log('Propriedade:', key);
}
class Produto {
  @logarPropriedade
  nome: string;
}
```

---
Próximo módulo: TypeScript com React
