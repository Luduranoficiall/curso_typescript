import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'CRUD Node API',
    version: '1.0.0',
    description: 'Documentação da API CRUD Node com TypeScript',
  },
  paths: {
    '/api/users': {
      get: {
        summary: 'Listar usuários',
        responses: {
          200: {
            description: 'Lista de usuários',
          },
        },
      },
      post: {
        summary: 'Criar usuário',
        responses: {
          201: {
            description: 'Usuário criado',
          },
        },
      },
    },
    '/api/users/{id}': {
      put: {
        summary: 'Atualizar usuário',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: 'Usuário atualizado',
          },
        },
      },
      delete: {
        summary: 'Remover usuário',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          204: {
            description: 'Usuário removido',
          },
        },
      },
    },
  },
};

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
