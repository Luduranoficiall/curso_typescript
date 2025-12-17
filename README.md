# Segurança ponta-a-ponta

Esta aplicação implementa criptografia ponta-a-ponta dos dados sensíveis (nome e email) usando AES, tanto no frontend quanto no backend. Para produção, utilize HTTPS obrigatório (SSL/TLS) e variáveis de ambiente seguras para a chave de criptografia.


## Boas práticas de segurança para alunos

- Sempre use HTTPS em produção (Vercel, Netlify, Heroku, etc. já fornecem SSL).
- Nunca exponha segredos no código-fonte. Use variáveis de ambiente (.env).
- Senhas e tokens devem ser sempre armazenados com hash seguro (ex: bcrypt, argon2) e nunca em texto puro.
- Dados sensíveis trafegam criptografados do navegador até o backend (criptografia ponta-a-ponta já implementada).
- Para APIs públicas, implemente autenticação JWT e CORS restrito.
- Nunca armazene tokens sensíveis em localStorage/cookies inseguros.
- Use salt aleatório para cada senha (bcrypt já faz isso).
- Não exponha hashes ou segredos em logs ou respostas de API.
- Use variáveis de ambiente para segredos e chaves de criptografia.

### Checklist de segurança
- [x] HTTPS obrigatório em produção
- [x] Hash seguro para senhas
- [x] Salt aleatório
- [x] Tokens nunca expostos em logs
- [x] Variáveis de ambiente para segredos
- [x] Dados sensíveis trafegam criptografados
- [x] Tokens nunca armazenados em localStorage/cookies inseguros

# curso_typescript