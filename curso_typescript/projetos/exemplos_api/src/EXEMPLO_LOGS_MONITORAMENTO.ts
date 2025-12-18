import express, { Request, Response, NextFunction } from 'express';
import winston from 'winston';
import * as Sentry from '@sentry/node';

Sentry.init({ dsn: process.env.SENTRY_DSN || 'https://exemplo@sentry.io/123' });

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});

const app = express();
app.use(express.json());
app.use(Sentry.Handlers.requestHandler());

app.get('/health', (req: Request, res: Response) => {
  logger.info('Health check', { timestamp: new Date().toISOString() });
  res.json({ status: 'ok' });
});

app.get('/error', (req: Request, res: Response) => {
  try {
    throw new Error('Erro proposital!');
  } catch (err) {
    Sentry.captureException(err);
    logger.error('Erro capturado', { error: (err as Error).message });
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  const error = err instanceof Error ? err : new Error('Erro desconhecido');
  logger.error('Erro capturado', { error: error.message });
  Sentry.captureException(error);
  res.status(500).send('Erro interno');
});

app.listen(4002, () => logger.info('API monitorada rodando na porta 4002'));
