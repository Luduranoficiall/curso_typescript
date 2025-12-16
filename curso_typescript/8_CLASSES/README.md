# 8_CLASSES — Classes

Neste módulo você vai aprender:
- Classes e construtores
- Modificadores de acesso (public, private, protected)
- Herança
- Polimorfismo
- Getters e Setters

## Classes e construtores
```ts
class Pessoa {
  nome: string;
  idade: number;
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}
const p1 = new Pessoa('Carlos', 40);
```

## Modificadores de acesso
```ts
class Conta {
  private saldo: number;
  constructor(saldo: number) {
    this.saldo = saldo;
  }
  public getSaldo() {
    return this.saldo;
  }
}
```

## Herança e polimorfismo
```ts
class Animal {
  falar() {
    console.log('Som genérico');
  }
}
class Cachorro extends Animal {
  falar() {
    console.log('Au au!');
  }
}
```

## Getters e Setters
```ts
class Produto {
  private _preco: number;
  constructor(preco: number) {
    this._preco = preco;
  }
  get preco() {
    return this._preco;
  }
  set preco(valor: number) {
    if (valor > 0) this._preco = valor;
  }
}
```

---
Próximo módulo: Módulos
