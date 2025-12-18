import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
app.use(express.json());
const SECRET: string = process.env.JWT_SECRET || 'supersecret';
const users: { email: string; password: string }[] = [];

app.post('/register', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  users.push({ email, password: hash });
  res.status(201).json({ message: 'Usuário registrado' });
});

app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token ausente' });
  const [, token] = authHeader.split(' ');
  try {
    const decoded = jwt.verify(token, SECRET) as { email: string };
    (req as any).user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido' });
  }
}

app.get('/me', auth, (req: Request, res: Response) => {
  res.json({ user: (req as any).user });
});

app.listen(4001, () => console.log('API users rodando na porta 4001'));
