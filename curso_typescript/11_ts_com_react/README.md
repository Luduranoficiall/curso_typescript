# 11_ts_com_react — TypeScript com React

Neste módulo você vai aprender:
- Criando um projeto React com TypeScript
- Tipando props e state
- Componentes funcionais tipados
- Eventos

## Criando um projeto React com TypeScript
```bash
npx create-react-app meuapp --template typescript
```

## Tipando props e state
```tsx
type Props = { nome: string };
const Ola: React.FC<Props> = ({ nome }) => <h1>Olá, {nome}</h1>;
```

## Eventos
```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  alert('Clicou!');
};
```

---
Próximo módulo: Projeto Todo com React
