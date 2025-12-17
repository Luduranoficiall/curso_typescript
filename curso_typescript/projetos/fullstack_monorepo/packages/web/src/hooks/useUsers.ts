
import { useEffect, useState } from 'react';
import { User } from '../../../types/User';
import CryptoJS from 'crypto-js';
const SECRET = 'curso_typescript_superseguro';

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
        // Descriptografa no frontend (ponta a ponta)
        setUsers(data.map(u => ({
          ...u,
          nome: CryptoJS.AES.decrypt(u.nome, SECRET).toString(CryptoJS.enc.Utf8) || u.nome,
          email: CryptoJS.AES.decrypt(u.email, SECRET).toString(CryptoJS.enc.Utf8) || u.email
        })));
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
    // Criptografa antes de enviar
    const nomeCripto = CryptoJS.AES.encrypt(nome, SECRET).toString();
    const emailCripto = CryptoJS.AES.encrypt(email, SECRET).toString();
    const res = await fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: nomeCripto, email: emailCripto })
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