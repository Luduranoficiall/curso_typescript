# 9_MODULES — Módulos

Neste módulo você vai aprender:
- Importação e exportação
- Módulos ES6
- Namespaces

## Importação e exportação
```ts
// arquivo math.ts
export function somar(a: number, b: number) {
  return a + b;
}
// arquivo app.ts
import { somar } from './math';
console.log(somar(2, 3));
```

## Módulos ES6
- Use `export` e `import` para organizar o código em arquivos separados.

## Namespaces
```ts
namespace Matematica {
  export function subtrair(a: number, b: number) {
    return a - b;
  }
}
console.log(Matematica.subtrair(5, 2));
```

---
Próximo módulo: Decorators
