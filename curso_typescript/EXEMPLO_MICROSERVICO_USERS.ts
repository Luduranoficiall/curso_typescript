// Exemplo prático: Microserviço de Usuários com TypeScript + Express + JWT
import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
app.use(express.json());

const users: { id: number; email: string; password: string }[] = [];
const SECRET: string = process.env.JWT_SECRET || 'supersecret';

// Cadastro
app.post('/register', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (users.find(u => u.email === email)) return res.status(409).json({ error: 'Usuário já existe' });
  const hash = await bcrypt.hash(password, 10);
  users.push({ id: users.length + 1, email, password: hash });
  res.status(201).json({ ok: true });
});

// Login
app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ error: 'Credenciais inválidas' });
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware de autenticação
function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token não enviado' });
  try {
    const [, token] = authHeader.split(' ');
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido' });
  }
}

// Rota protegida
app.get('/me', auth, (req: Request, res: Response) => {
  res.json({ user: req.user });
});

app.listen(4001, () => console.log('Microserviço de usuários rodando na porta 4001'));
