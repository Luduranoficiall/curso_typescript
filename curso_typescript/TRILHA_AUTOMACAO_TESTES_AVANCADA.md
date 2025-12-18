# Trilha Temática: Automação de Testes Avançada

## Exercício 1: Testes E2E Mobile com Detox
**Enunciado:**
Implemente um teste E2E para um app React Native usando Detox.
**Solução:**
```js
describe('Login', () => {
  beforeAll(async () => { await device.launchApp(); });
  it('deve logar com sucesso', async () => {
    await element(by.id('input-email')).typeText('user@exemplo.com');
    await element(by.id('input-senha')).typeText('123456');
    await element(by.id('btn-login')).tap();
    await expect(element(by.id('home'))).toBeVisible();
  });
});
```

---
## Exercício 2: Testes de Contrato com Pact
**Enunciado:**
Implemente testes de contrato entre frontend e backend usando Pact.
**Solução:**
```ts
import { Pact } from '@pact-foundation/pact';
const provider = new Pact({ consumer: 'web', provider: 'api' });
describe('Contrato API', () => {
  beforeAll(() => provider.setup());
  it('deve validar contrato de /users', async () => {
    await provider.addInteraction({
      state: 'usuários existem',
      uponReceiving: 'GET /users',
      withRequest: { method: 'GET', path: '/users' },
      willRespondWith: { status: 200, body: [{ id: 1, nome: 'João' }] }
    });
    // ...chamada real e verificação
  });
  afterAll(() => provider.finalize());
});
```
