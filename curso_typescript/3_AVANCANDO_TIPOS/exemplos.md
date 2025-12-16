# Exemplos práticos — 3_AVANCANDO_TIPOS

## Exemplo 1: Union Types
```ts
let id: number | string;
id = 10;
id = 'dez';
```

## Exemplo 2: Intersection Types
```ts
interface Pessoa { nome: string; }
interface Funcionario { cargo: string; }
type PessoaFuncionario = Pessoa & Funcionario;
const pf: PessoaFuncionario = { nome: 'Ana', cargo: 'Dev' };
```

## Exemplo 3: Enum
```ts
enum Status {
  Ativo,
  Inativo,
  Pendente
}
let s: Status = Status.Ativo;
```

## Exemplo 4: Literal Types
```ts
let direcao: 'esquerda' | 'direita';
direcao = 'direita';
```

---
Esses exemplos complementam os exercícios do módulo.
