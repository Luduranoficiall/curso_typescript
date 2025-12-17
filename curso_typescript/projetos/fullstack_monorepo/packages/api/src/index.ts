import express from 'express';
import cors from 'cors';
import { User } from 'types/User';
import { validarUsuario, erroGlobal } from './middleware';

const app = express();
app.use(cors());
app.use(express.json());

let users: User[] = [
  { id: 1, nome: 'Ana', email: 'ana@email.com' },
  { id: 2, nome: 'João', email: 'joao@email.com' }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', validarUsuario, (req, res) => {
  const { nome, email } = req.body;
  const novo: User = { id: Date.now(), nome, email };
  users.push(novo);
  res.status(201).json(novo);
});


// Middleware global de erro (deve ser o último)
app.use(erroGlobal);

app.listen(4000, () => {
  console.log('API rodando na porta 4000');
});
