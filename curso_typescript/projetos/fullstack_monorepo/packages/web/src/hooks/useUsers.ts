
import { useEffect, useState } from 'react';
import { User } from '../../../types/User';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:4000/api/users');
        const data = (await res.json()) as User[];
        setUsers(data);
      } catch {
        setErro('Erro ao carregar usuários.');
      } finally {
        setLoading(false);
      }
    };
    void fetchUsers();
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
    const novo = (await res.json()) as User;
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