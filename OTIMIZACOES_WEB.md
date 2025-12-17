# Otimização de Performance: React Web

## 1. Gzip/Brotli no build
Configure o servidor para servir arquivos .js/.css comprimidos.

## 2. Lazy Loading de Componentes
```tsx
const UserList = React.lazy(() => import('./UserList'));
```

## 3. Memoização
```tsx
import { memo } from 'react';
const MemoizedComponent = memo(SeuComponente);
```

## 4. Bundle Analyzer
```sh
npm run analyze
```

## 5. Lighthouse para auditoria
Use o Google Lighthouse para medir performance e acessibilidade.

**Checklist de especialista:**
- Sempre use lazy loading para rotas e componentes pesados.
- Analise o bundle e elimine dependências desnecessárias.
- Use memoização para componentes puros.
- Audite com Lighthouse regularmente.
