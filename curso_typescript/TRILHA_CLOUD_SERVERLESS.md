# Trilha Temática: Cloud & Serverless

## Exercício 1: Função Serverless AWS Lambda
**Enunciado:**
Implemente uma função Lambda em TypeScript que retorna a data/hora atual.
**Solução:**
```ts
export const handler = async () => ({
  statusCode: 200,
  body: JSON.stringify({ now: new Date().toISOString() })
});
```

---
## Exercício 2: Deploy com Serverless Framework
**Enunciado:**
Configure deploy automatizado de uma função Lambda usando Serverless Framework.
**Solução:**
```yaml
service: exemplo-serverless
provider:
  name: aws
  runtime: nodejs20.x
functions:
  hello:
    handler: handler.handler
    events:
      - http:
          path: /
          method: get
```
