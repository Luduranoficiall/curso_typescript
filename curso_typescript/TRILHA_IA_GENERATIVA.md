# Trilha Temática: Desafios de IA Generativa

## Exercício 1: Fine-tuning com OpenAI API
**Enunciado:**
Implemente um script para fine-tuning de modelo GPT-3.5 usando dataset customizado.
**Solução:**
```ts
import { OpenAIApi, Configuration } from 'openai';
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
async function fineTune() {
  const resp = await openai.createFineTune({
    training_file: 'file-abc123',
    model: 'gpt-3.5-turbo',
  });
  console.log(resp.data);
}
fineTune();
```

---
## Exercício 2: Geração de Imagens com DALL-E
**Enunciado:**
Implemente uma rota Express que gera imagens a partir de prompts usando DALL-E API.
**Solução:**
```ts
app.post('/imagem', async (req, res) => {
  const { prompt } = req.body;
  const r = await openai.createImage({ prompt, n: 1, size: '512x512' });
  res.json({ url: r.data.data[0].url });
});
```
