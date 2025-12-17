import express from 'express';
import cors from 'cors';
import { User } from 'types/User';
import { validarUsuario, erroGlobal } from './middleware';
import CryptoJS from 'crypto-js';

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = process.env.CRYPTO_SECRET || 'curso_typescript_superseguro';
// Armazena os dados criptografados
let users: User[] = [
  { id: 1, nome: CryptoJS.AES.encrypt('Ana', SECRET).toString(), email: CryptoJS.AES.encrypt('ana@email.com', SECRET).toString() },
  { id: 2, nome: CryptoJS.AES.encrypt('João', SECRET).toString(), email: CryptoJS.AES.encrypt('joao@email.com', SECRET).toString() }
];

app.get('/api/users', (req, res) => {
  // Descriptografa antes de enviar
  const descriptografados = users.map(u => ({
    id: u.id,
    nome: CryptoJS.AES.decrypt(u.nome, SECRET).toString(CryptoJS.enc.Utf8),
    email: CryptoJS.AES.decrypt(u.email, SECRET).toString(CryptoJS.enc.Utf8)
  }));
  res.json(descriptografados);
});

app.post('/api/users', validarUsuario, (req, res) => {
  const { nome, email } = req.body;
  // Criptografa antes de salvar
  const novo: User = {
    id: Date.now(),
    nome: CryptoJS.AES.encrypt(nome, SECRET).toString(),
    email: CryptoJS.AES.encrypt(email, SECRET).toString()
  };
  users.push(novo);
  // Retorna já descriptografado para o frontend
  res.status(201).json({
    id: novo.id,
    nome,
    email
  });
});


// Middleware global de erro (deve ser o último)
app.use(erroGlobal);

app.listen(4000, () => {
  console.log('API rodando na porta 4000');
});
