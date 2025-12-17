# Segurança: Armazenamento de Senhas e Tokens

## Como armazenar senhas de forma segura
- **Nunca armazene senhas em texto puro!**
- Sempre utilize hash seguro, como bcrypt, argon2 ou scrypt.
- Use salt aleatório para cada senha (bcrypt já faz isso automaticamente).
- Nunca exponha hashes ou segredos em logs ou respostas de API.
- Tokens de autenticação (JWT, refresh tokens) devem ser armazenados apenas no backend e enviados ao frontend apenas quando necessário.
- Tokens sensíveis nunca devem ser salvos em localStorage/cookies inseguros.

## Exemplo de uso seguro com bcrypt
```ts
import { hashPassword, comparePassword } from './src/security';

// Cadastro
const hash = await hashPassword('senha123');
// Armazene apenas o hash no banco de dados

// Login
const ok = await comparePassword('senha123', hashRecebidoDoBanco);
```

## Checklist de segurança para armazenamento
- [x] Hash seguro para senhas
- [x] Salt aleatório
- [x] Tokens nunca expostos em logs
- [x] Variáveis de ambiente para segredos
- [x] Nunca armazene dados sensíveis em texto puro
