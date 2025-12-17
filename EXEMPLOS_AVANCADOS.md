# Exemplo Avançado: JWT com TypeScript e Express

Este exemplo mostra como implementar autenticação JWT segura e tipada em uma API Express, seguindo padrões de mercado e boas práticas de segurança.

```ts
import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const SECRET = process.env.JWT_SECRET || 'superseguro';

interface UserPayload {
  id: string;
  email: string;
}

// Middleware para autenticar JWT
function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, SECRET) as UserPayload;
    (req as any).user = payload;
    next();
  } catch {
    return res.status(403).json({ error: 'Token inválido' });
  }
}

// Rota protegida
app.get('/protegido', authenticateJWT, (req, res) => {
  res.json({ mensagem: 'Acesso autorizado!', usuario: (req as any).user });
});

// Gerar token (exemplo)
app.post('/login', (req, res) => {
  // ...validação de usuário...
  const user: UserPayload = { id: '1', email: 'user@email.com' };
  const token = jwt.sign(user, SECRET, { expiresIn: '1h' });
  res.json({ token });
});
```

**Dicas de especialista:**
- Sempre armazene o segredo do JWT em variáveis de ambiente.
- Use tipos TypeScript para payloads e respostas.
- Implemente refresh tokens para sessões longas.
- Combine com logs estruturados para rastreabilidade.
