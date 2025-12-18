# Trilha Temática: Arquitetura Cloud-Native

## Exercício 1: Microserviço Stateless com Docker e K8s
**Enunciado:**
Crie um microserviço Node.js stateless, dockerize e orquestre com Kubernetes.
**Solução:**
```Dockerfile
# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["node", "src/index.js"]
```
```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata: { name: users-api }
spec:
  replicas: 2
  selector: { matchLabels: { app: users-api } }
  template:
    metadata: { labels: { app: users-api } }
    spec:
      containers:
        - name: users-api
          image: users-api:latest
          ports: [ { containerPort: 3000 } ]
```

---
## Exercício 2: Observabilidade com Prometheus e Grafana
**Enunciado:**
Implemente métricas customizadas e dashboard para seu microserviço.
**Solução:**
```ts
import promClient from 'prom-client';
const httpRequestDuration = new promClient.Histogram({ name: 'http_request_duration_seconds', help: 'Duração das requisições', labelNames: ['method', 'route', 'code'] });
app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer({ method: req.method, route: req.path });
  res.on('finish', () => end({ code: res.statusCode }));
  next();
});
```
