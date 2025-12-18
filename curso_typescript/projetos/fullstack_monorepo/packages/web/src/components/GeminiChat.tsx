import React, { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Tipagem para variáveis de ambiente Vite
declare global {
  interface ImportMetaEnv {
    readonly VITE_GEMINI_API_KEY: string;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const GeminiChat: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setMessages((msgs) => [...msgs, `Você: ${input}`]);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(input);
      setMessages((msgs) => [...msgs, `Gemini: ${result.response.text()}`]);
    } catch (err: any) {
      setMessages((msgs) => [...msgs, `Erro: ${err.message}`]);
    }
    setInput("");
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Chat Gemini 3.0 Pro</h2>
      <div style={{ minHeight: 120, marginBottom: 16 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: "8px 0" }}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSend()}
        placeholder="Digite sua mensagem..."
        style={{ width: "80%", padding: 8, marginRight: 8 }}
        disabled={loading}
      />
      <button onClick={handleSend} disabled={loading || !input.trim()}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </div>
  );
};
