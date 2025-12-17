# Otimização de Performance: API Express

## 1. Compressão Gzip
```ts
import compression from 'compression';
app.use(compression());
```

## 2. Helmet para Segurança
```ts
import helmet from 'helmet';
app.use(helmet());
```

## 3. Limite de Requisições (Rate Limit)
```ts
import rateLimit from 'express-rate-limit';
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
```

## 4. CORS Seguro
```ts
import cors from 'cors';
app.use(cors({ origin: 'https://seusite.com', optionsSuccessStatus: 200 }));
```

## 5. Logs de Performance
```ts
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${ms}ms`);
  });
  next();
});
```

**Checklist de especialista:**
- Sempre use compressão e helmet.
- Limite requisições para evitar ataques.
- CORS restrito para produção.
- Monitore logs de performance.
