# Exemplos de Integração Avançada

## 1. Autenticação OAuth2 (Google)
```ts
// Backend (Express + passport-google-oauth20)
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Salve ou atualize usuário no banco
  return done(null, profile);
}));

// Frontend: use react-oauth/google ou next-auth
```

## 2. Upload de Arquivos (Multer)
```ts
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});
```

## 3. WebSockets (Socket.io)
```ts
// Backend
import { Server } from 'socket.io';
const io = new Server(httpServer);
io.on('connection', socket => {
  socket.on('msg', data => io.emit('msg', data));
});

// Frontend
import { io } from 'socket.io-client';
const socket = io('http://localhost:4000');
socket.on('msg', data => console.log(data));
```

---
Use estes exemplos como base para desafios e integrações reais.
