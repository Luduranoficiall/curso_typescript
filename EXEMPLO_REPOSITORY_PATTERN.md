# Exemplo Avançado: Repository Pattern com TypeScript

Este exemplo mostra como aplicar o padrão Repository para separar lógica de acesso a dados, facilitando testes, manutenção e escalabilidade.

```ts
// Interface genérica
export interface IRepository<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(entity: T): Promise<void>;
  delete(id: string): Promise<void>;
}

// Implementação para usuários
interface User {
  id: string;
  nome: string;
  email: string;
}

export class UserRepository implements IRepository<User> {
  private users: User[] = [];

  async findById(id: string) {
    return this.users.find(u => u.id === id) || null;
  }
  async findAll() {
    return this.users;
  }
  async save(user: User) {
    this.users.push(user);
  }
  async delete(id: string) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
```

**Dicas de especialista:**
- Use interfaces para facilitar mocks em testes.
- Separe lógica de negócio e persistência.
- Combine com injeção de dependência para máxima flexibilidade.
