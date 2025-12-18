## Trilha do Curso: Do Básico ao Especialista

1. **Fundamentos do TypeScript**
	- Tipos primitivos, inferência, interfaces, enums
	- Exemplo: declaração e uso de tipos básicos
	- Exemplo: função que recebe e retorna tipos diferentes
	- Exercício: Crie um sistema de cadastro de produtos com tipos explícitos
	- Desafio: Implemente validação de tipos em tempo de execução

2. **Tipos Avançados**
	- Generics, tipos condicionais, utilitários
	- Exemplo: função genérica para manipular arrays
	- Exemplo: uso de Partial, Pick, Omit
	- Exercício: Crie um CRUD genérico para qualquer entidade
	- Desafio: Implemente tipos condicionais para validação dinâmica

3. **Funções e Operações em Arrays**
	- Funções puras, callbacks, map/filter/reduce
	- Exemplo: função de soma, filtro e transformação
	- Exercício: Implemente um sistema de tarefas com filtros dinâmicos
	- Desafio: Crie funções de ordenação e agrupamento avançadas

4. **Object Types e Classes**
	- Classes, herança, polimorfismo, encapsulamento
	- Exemplo: classe base e subclasses com métodos sobrescritos
	- Exercício: Sistema de usuários com diferentes perfis e permissões
	- Desafio: Implemente padrão Singleton e Observer em classes

5. **Módulos, Padrões e Arquitetura**
	- Modularização, atomic design, patterns
	- Exemplo: separação de responsabilidades em arquivos e pastas
	- Exercício: Refatore um projeto para atomic design
	- Desafio: Implemente Repository Pattern e injeção de dependência

6. **APIs RESTful e Backend**
	- Express, autenticação, segurança, logs
	- Exemplo: endpoint CRUD com validação
	- Exercício: Implemente autenticação JWT e logs estruturados
	- Desafio: Adicione refresh token seguro e testes de integração

7. **Frontend com React + TS**
	- Componentes, hooks, contexto, atomic design
	- Exemplo: componente funcional tipado e hook customizado
	- Exercício: Crie um formulário acessível e responsivo
	- Desafio: Implemente contexto global e lazy loading avançado

8. **Performance, Testes e CI/CD**
	- Lazy loading, memoização, testes unitários/E2E, pipelines
	- Exemplo: uso de React.memo, useMemo, useCallback
	- Exercício: Implemente testes unitários e E2E com cobertura >90%
	- Desafio: Configure pipeline CI/CD com deploy automatizado

9. **Segurança e Monitoramento**
	- Criptografia, JWT, logs, métricas, monitoramento
	- Exemplo: uso de bcrypt, JWT, Winston, Sentry
	- Exercício: Implemente logs de auditoria e métricas customizadas
	- Desafio: Integre monitoramento de erros e alertas em produção

10. **Projeto Final Desafiador**
	 - Integração de todos os conceitos, deploy, documentação
	 - Exercício: Documente toda a API com Swagger/OpenAPI
	 - Desafio: Implemente painéis administrativos, testes E2E, integração com serviços externos e monitoramento completo

---


# Curso TypeScript Especialista Premium Ouro

🚀 Site do autor: https://www.luduranoficiall.com/ — acesse para mais conteúdos, dicas e novidades!

## Do Básico ao Especialista: Segurança, Performance e Carreira

Esta aplicação e curso vão além do básico: você terá criptografia ponta-a-ponta (AES, bcrypt), arquitetura moderna, exemplos reais, desafios de especialista, dicas de carreira e checklist de segurança de mercado.

---

## Como rodar o projeto

1. Clone o repositório e acesse a pasta raiz:
	```sh
	git clone https://github.com/Luduranoficiall/curso_typescript.git
	cd curso_typescript
	```
2. Instale as dependências principais e dos subprojetos:
	```sh
	npm install
	cd curso_typescript/projetos/fullstack_monorepo/packages/types && npm install && npm run build
	cd ../api && npm install && npm run build
	cd ../web && npm install && npm run build
	```
3. Para rodar a API:
	```sh
	cd curso_typescript/projetos/fullstack_monorepo/packages/api
	npm run dev
	```
4. Para rodar o frontend:
	```sh
	cd curso_typescript/projetos/fullstack_monorepo/packages/web
	npm start
	```

## Testes, Lint e Cobertura

- Para rodar o lint:
  ```sh
  npm run lint --if-present
  ```
- Para rodar os testes:
  ```sh
  npm test --if-present
  ```
- Para gerar cobertura:
  ```sh
  npm run coverage --if-present
  ```

## Integração Contínua (CI/CD)

O projeto utiliza GitHub Actions para rodar lint, testes e builds automaticamente a cada push ou pull request na branch main. O workflow está em `.github/workflows/ci.yml`.

## Estrutura dos subprojetos

- [Monorepo Fullstack (API, Web, Types)](curso_typescript/projetos/fullstack_monorepo/README.md)
- [API (Express)](curso_typescript/projetos/fullstack_monorepo/packages/api/README.md)
- [Web (React)](curso_typescript/projetos/fullstack_monorepo/packages/web/README.md)
- [Types (compartilhados)](curso_typescript/projetos/fullstack_monorepo/packages/types/README.md)

---

## Como contribuir

1. Faça um fork do projeto e crie uma branch para sua feature ou correção.
2. Siga o padrão de commits (commitlint) e mantenha o código formatado (Prettier).
3. Rode os testes e o lint antes de abrir um Pull Request.
4. Descreva claramente sua contribuição no PR.

---

## Sumário Premium

- [x] Fundamentos e tipos avançados de TypeScript
- [x] Arquitetura de projetos escaláveis (monorepo, atomic design, modularização)
- [x] Testes automatizados, cobertura e CI/CD (Jest, GitHub Actions)
- [x] Segurança real: criptografia ponta-a-ponta, JWT, proteção XSS/CSRF, variáveis de ambiente
- [x] Performance máxima: compressão, cache, lazy loading, análise de bundle
- [x] Deploy seguro (Vercel, Netlify, Docker, HTTPS)
- [x] Padrões de projeto e exemplos avançados (factory, singleton, observer, etc.)
- [x] Logs auditáveis e monitoramento
- [x] Desafios práticos e exercícios de especialista
- [x] Dicas de carreira, links para vagas, arquitetura para o mercado

---

## Segurança ponta-a-ponta (AES, bcrypt, JWT)

- Criptografia AES para dados sensíveis (frontend e backend)
- Hash seguro de senhas com bcrypt (salt aleatório)
- Autenticação JWT e refresh tokens (exemplo avançado)
- Nunca exponha segredos no código-fonte ou logs
- Use variáveis de ambiente para todas as chaves e segredos
- Checklist de segurança para produção

## Performance e Escalabilidade

- Compressão HTTP (gzip, brotli)
- Cache de respostas e assets
- Lazy loading de módulos e componentes
- Análise de bundle e otimização de dependências
- Monitoramento de latência e logs de performance

## Testes, CI/CD e Qualidade

- Testes unitários, de integração e acessibilidade (Jest, jest-axe)
- Cobertura de testes >90%
- Lint, Prettier, Husky, lint-staged, commitlint
- CI/CD com GitHub Actions e deploy automatizado


## Exemplos Avançados e Padrões de Projeto

- [Exemplo JWT seguro com TypeScript e Express](./EXEMPLOS_AVANCADOS.md)
- [Logger estruturado com Winston](./EXEMPLOS_LOGS.md)
- [Repository Pattern com TypeScript](./EXEMPLO_REPOSITORY_PATTERN.md)
- Factory, Singleton, Observer, Adapter, Strategy (exemplos práticos)
- API RESTful e integração frontend-backend

## Otimizações de Performance

- [Otimizações de API Express](./OTIMIZACOES_API.md)
- [Otimizações de React Web](./OTIMIZACOES_WEB.md)



## Desafios e Exemplos por Módulo

- **Fundamentos:**
	- Exemplo: Tipagem de variáveis, funções e objetos.
	- Exemplo: Inferência e união de tipos.
	- Desafio: Implemente um CRUD de tarefas usando tipos genéricos e validação de dados.
	- Desafio Avançado: Crie um sistema de filtros dinâmicos usando tipos condicionais.

- **Classes e Objetos:**
	- Exemplo: Herança, polimorfismo e encapsulamento.
	- Exemplo: Métodos estáticos e privados.
	- Desafio: Sistema de cadastro de usuários com validação e métodos de autenticação.
	- Desafio Avançado: Implemente um padrão Singleton para um serviço de logs.

- **Módulos e Padrões:**
	- Exemplo: Modularização com ES Modules.
	- Exemplo: Repository Pattern e Service Layer.
	- Desafio: Refatore o CRUD usando atomic design e repository pattern.
	- Desafio Avançado: Implemente injeção de dependência manual em um serviço.

- **API RESTful:**
	- Exemplo: Endpoints REST com Express e TypeScript.
	- Exemplo: Middleware de autenticação JWT.
	- Desafio: Implemente autenticação JWT, refresh token seguro e logs estruturados.
	- Desafio Avançado: Adicione testes de integração e proteção contra ataques comuns (rate limit, CORS, Helmet).

- **React:**
	- Exemplo: Componentes funcionais tipados e hooks customizados.
	- Exemplo: Atomic design e contexto global.
	- Desafio: Crie componentes acessíveis, responsivos e com feedback visual.
	- Desafio Avançado: Implemente um hook customizado para consumo de API com cache e fallback.

- **Desempenho:**
	- Exemplo: Lazy loading de componentes e memoização.
	- Exemplo: Análise de bundle e otimização de dependências.
	- Desafio: Otimize o bundle, implemente lazy loading, memoização e análise de performance com Lighthouse.
	- Desafio Avançado: Implemente code splitting dinâmico e monitore métricas de UX.

- **Segurança:**
	- Exemplo: Criptografia AES, bcrypt e JWT.
	- Exemplo: Validação de dados e proteção XSS/CSRF.
	- Desafio: Proteja dados sensíveis, valide entradas, configure HTTPS e variáveis de ambiente.
	- Desafio Avançado: Implemente logs de auditoria e checklist de segurança automatizado.

- **Projeto Final:**
	- Desenvolva o [Projeto Final](./curso_typescript/PROJETO_FINAL.md) integrando todos os conceitos.
	- O projeto deve ser desafiador: inclua autenticação avançada, painéis administrativos, testes E2E, deploy automatizado, documentação de API, integração com serviços externos e monitoramento de erros/performance.

---

---
## Checklist de Validação de Experiência do Usuário (UX)

- [x] Layout responsivo e intuitivo
- [x] Feedback visual para ações e erros
- [x] Navegação fluida e acessível
- [x] Testes de acessibilidade (axe)
- [x] Validação com Lighthouse
- [x] Mensagens claras e amigáveis
- [x] Componentes com aria-label e roles
- [x] Documentação para onboarding do usuário

---

## Carreira e Mercado

- Dicas para vagas de especialista, links para oportunidades
- Como montar portfólio e projetos de referência
- Soft skills e comunicação para devs de elite

---

## Checklist de Segurança e Qualidade
- [x] HTTPS obrigatório em produção
- [x] Hash seguro para senhas (bcrypt)
- [x] Salt aleatório
- [x] Tokens nunca expostos em logs
- [x] Variáveis de ambiente para segredos
- [x] Dados sensíveis trafegam criptografados
- [x] Tokens nunca armazenados em localStorage/cookies inseguros
- [x] Testes automatizados e cobertura
- [x] Lint, Prettier, Husky, commitlint
- [x] CI/CD e deploy seguro

---

> Para dúvidas, desafios ou sugestões, abra uma issue ou envie seu feedback. Aqui você aprende do zero ao especialista, sem mimimi e sem enrolação.