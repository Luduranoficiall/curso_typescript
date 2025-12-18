# Trilha Temática: GraphQL, IA e Performance Extrema

## Exercício 1: API GraphQL com Apollo Server
**Enunciado:**
Implemente uma API GraphQL em TypeScript para listar e criar usuários.
**Solução:**
```ts
import { ApolloServer, gql } from 'apollo-server';
const typeDefs = gql`
  type User { id: ID! nome: String! }
  type Query { users: [User!]! }
  type Mutation { addUser(nome: String!): User }
`;
let users = [];
const resolvers = {
  Query: { users: () => users },
  Mutation: { addUser: (_, { nome }) => { const u = { id: users.length+1, nome }; users.push(u); return u; } }
};
new ApolloServer({ typeDefs, resolvers }).listen(4003);
```

---
## Exercício 2: Integração com IA (OpenAI)
**Enunciado:**
Implemente uma rota que recebe um texto e retorna um resumo gerado pela OpenAI API.
**Solução:**
```ts
import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
const app = express();
app.use(express.json());
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
app.post('/resumir', async (req, res) => {
  const { texto } = req.body;
  const r = await openai.createChatCompletion({ model: 'gpt-3.5-turbo', messages: [{ role: 'user', content: `Resuma: ${texto}` }] });
  res.json({ resumo: r.data.choices[0].message?.content });
});
app.listen(4004);
```

---
## Exercício 3: Desafio de Performance Extrema
**Enunciado:**
Implemente cache em memória e benchmark de uma rota de listagem de usuários para suportar alta concorrência.
**Solução:**
```ts
let cache = null;
app.get('/users', (req, res) => {
  if (cache) return res.json(cache);
  // Simule consulta pesada
  const users = Array.from({ length: 10000 }, (_, i) => ({ id: i, nome: `User${i}` }));
  cache = users;
  res.json(users);
});
```
