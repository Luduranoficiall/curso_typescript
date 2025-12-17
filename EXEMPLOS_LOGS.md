# Exemplo Avançado: Logger Estruturado com Winston

Este exemplo mostra como configurar logs estruturados e seguros em Node.js, essenciais para aplicações profissionais.

```ts
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

logger.info('Servidor iniciado', { timestamp: new Date().toISOString() });
logger.error('Erro crítico', { erro: 'detalhes do erro', timestamp: new Date().toISOString() });

export default logger;
```

**Dicas de especialista:**
- Sempre logue erros críticos com contexto.
- Nunca logue dados sensíveis.
- Use logs para auditoria e rastreabilidade.
