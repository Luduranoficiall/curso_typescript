import { Request, Response, NextFunction } from 'express';

export function validarUsuario(req: Request, res: Response, next: NextFunction) {
  const { nome, email } = req.body;
  if (!nome || typeof nome !== 'string' || !nome.trim()) {
    return res.status(400).json({ error: 'Nome é obrigatório e deve ser uma string.' });
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email é obrigatório e deve ser válido.' });
  }
  next();
}

// Tipagem customizada para erros
interface AppError extends Error {
  status?: number;
}

export function erroGlobal(err: AppError, req: Request, res: Response, next: NextFunction) {
  // eslint-disable-next-line no-console
  console.error('Erro global:', err);
  res.status(err.status || 500).json({ erro: err.message || 'Erro interno do servidor' });
}
