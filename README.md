# ViajaJunto — Frontend

Base do frontend do ViajaJunto, criada com Next.js (App Router), React e TypeScript. As telas e a integração com o backend serão desenvolvidas nas próximas etapas.

## Pré-requisitos

- Node.js 22.14.0 ou superior (a versão de referência do grupo está em `.nvmrc`).
- npm, incluído na instalação do Node.js.

## Como executar

No terminal, dentro da pasta do projeto:

```bash
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). Para parar o servidor, pressione `Ctrl+C` no terminal.

No PowerShell, se a política de execução bloquear `npm.ps1`, use `npm.cmd` no lugar de `npm`.

O backend também usa a porta 3000 por padrão. Para executar os dois na mesma máquina, mantenha o backend na porta 3000 e inicie o frontend na porta 5173:

```bash
npm run dev -- --port 5173
```

Então acesse [http://localhost:5173](http://localhost:5173). A origem `http://localhost:5173` já consta na configuração CORS padrão do backend. A integração com a API será configurada posteriormente.

## Outros comandos

```bash
npm run lint    # verifica o código com ESLint
npm run build   # compila a versão de produção
npm run start   # inicia a versão compilada após o build
```

## Estrutura inicial

- `src/app/page.tsx`: página da rota inicial (`/`).
- `src/app/layout.tsx`: estrutura compartilhada pelas páginas.
- `src/app/globals.css`: estilos globais.
- `public/`: arquivos estáticos.

O Next.js usa pastas e arquivos em `src/app` para definir rotas. A organização de componentes e serviços será detalhada conforme as funcionalidades forem planejadas.
