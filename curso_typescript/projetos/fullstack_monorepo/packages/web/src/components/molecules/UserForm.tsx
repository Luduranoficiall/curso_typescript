import React from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

interface UserFormProps {
  nome: string;
  setNome: (nome: string) => void;
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const UserForm: React.FC<UserFormProps> = ({ nome, setNome, email, setEmail, onSubmit }) => (
  <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }} aria-label="Adicionar novo usuário">
    <Input id="nome" label="Nome" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required />
    <Input id="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required type="email" />
    <Button type="submit" label="Adicionar usuário">Adicionar</Button>
  </form>
);
