import { Request, Response } from 'express';
import { User } from '../models/User';

let users: User[] = [];
let nextId = 1;

export function getUsers(req: Request, res: Response) {
  res.json(users);
}

export function createUser(req: Request, res: Response) {
  const { nome, email } = req.body;
  if (!nome || !email) return res.status(400).json({ error: 'Nome e email obrigatórios' });
  const user: User = { id: nextId++, nome, email };
  users.push(user);
  res.status(201).json(user);
}

export function updateUser(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { nome, email } = req.body;
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
  if (nome) user.nome = nome;
  if (email) user.email = email;
  res.json(user);
}

export function deleteUser(req: Request, res: Response) {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);
  res.status(204).send();
}
