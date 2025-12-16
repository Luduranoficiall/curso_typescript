# 12_todo_react — Projeto Todo com React

Neste módulo você vai:
- Criar um app de lista de tarefas (Todo) usando React + TypeScript
- Praticar tipagem de props, state e eventos

## Estrutura básica do componente
```tsx
import React, { useState } from 'react';
type Todo = { id: number; texto: string; concluido: boolean };
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // ...restante do código
  return <div>Lista de tarefas</div>;
};
```

## Exercício
- Implemente as funções para adicionar, marcar como concluído e remover tarefas, sempre tipando tudo corretamente.

---
Próximo módulo: TypeScript com Express
