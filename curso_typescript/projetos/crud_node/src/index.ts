import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes';
import { setupSwagger } from './swagger';

const app = express();
setupSwagger(app);
// Segurança
app.use(helmet());
// Compressão
app.use(compression());
// Limite de requisições
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
// CORS restrito (ajuste o origin conforme necessário)
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
// Logs de requisição
app.use(morgan('combined'));
// Logs de performance
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${ms}ms`);
  });
  next();
});
app.use(express.json());
app.use('/api', userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
