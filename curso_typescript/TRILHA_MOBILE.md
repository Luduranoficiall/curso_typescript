# Trilha Temática: Mobile com React Native + TypeScript

## Exercício 1: Lista de Tarefas
**Enunciado:**
Implemente um app React Native que exibe, adiciona e remove tarefas. Use tipagem forte.
**Solução:**
```tsx
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
export default function App() {
  const [tasks, setTasks] = useState<{ id: number; texto: string }[]>([]);
  const [texto, setTexto] = useState('');
  return (
    <View style={{ padding: 20 }}>
      <TextInput value={texto} onChangeText={setTexto} />
      <Button title="Adicionar" onPress={() => { setTasks([...tasks, { id: Date.now(), texto }]); setTexto(''); }} />
      <FlatList data={tasks} renderItem={({ item }) => <Text>{item.texto}</Text>} keyExtractor={item => item.id.toString()} />
    </View>
  );
}
```

---
## Exercício 2: Consumo de API
**Enunciado:**
Consuma uma API REST para listar usuários e exibir no app.
**Solução:**
```tsx
import { useEffect, useState } from 'react';
export function useUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => { fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()).then(setUsers); }, []);
  return users;
}
```
