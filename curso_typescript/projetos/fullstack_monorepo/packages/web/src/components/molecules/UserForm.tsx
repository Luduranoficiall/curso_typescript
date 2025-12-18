
import * as React from 'react';
import type { FormEvent } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

export interface UserFormProps {
  nome: string;
  setNome: (nome: string) => void;
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}


const UserForm = React.memo(({ nome, setNome, email, setEmail, onSubmit }: UserFormProps): React.ReactElement => (
  <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }} aria-label="Adicionar novo usuário">
    <Input id="nome" label="Nome" value={nome} onChange={(e) => setNome((e.target as HTMLInputElement).value)} placeholder="Nome" required />
    <Input id="email" label="Email" value={email} onChange={(e) => setEmail((e.target as HTMLInputElement).value)} placeholder="Email" required type="email" />
    <Button type="submit" label="Adicionar usuário">Adicionar</Button>
  </form>
));
export { UserForm };
export default UserForm;
