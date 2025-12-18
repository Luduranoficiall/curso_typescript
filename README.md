

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

## Desafios de Especialista

- [Desafios práticos e exercícios avançados](./DESAFIOS_ESPECIALISTA.md)


## Desafios de Especialista

- Exercícios práticos do básico ao avançado
- Desafios de arquitetura, segurança e performance
- Simulados de entrevistas e problemas reais do mercado

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