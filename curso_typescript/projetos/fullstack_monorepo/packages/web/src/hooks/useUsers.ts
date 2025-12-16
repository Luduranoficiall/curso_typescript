
import { useEffect, useState } from 'react';
import { User } from '../../../types/User';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:4000/api/users')
      .then(res => res.json())
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  const validarEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const adicionar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim()) {
      setErro('O nome é obrigatório.');
      return;
    }
    if (!validarEmail(email)) {
      setErro('Digite um e-mail válido.');
      return;
    }
    setErro(null);
    setLoading(true);
    const res = await fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email })
    });
    const novo = await res.json();
    setUsers([...users, novo]);
    setNome('');
    setEmail('');
    setLoading(false);
  };

  return {
    users,
    nome,
    setNome,
    email,
    setEmail,
    erro,
    adicionar,
    loading,
  };
}