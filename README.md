# Pedro Arruda Portfolio

Portfolio profissional desenvolvido com ASP.NET Core (Backend) e React + TypeScript (Frontend), com tema escuro inspirado no Swagger UI.

## Stack

- **Backend:** ASP.NET Core 8, Minimal API, Swagger/OpenAPI
- **Frontend:** React 18, TypeScript, Vite
- **Estilo:** CSS Modules com tema dark Swagger

## Estrutura

```
Portfolio-Pedro-Arruda/
├── backend/
│   └── PedroArruda.Portfolio.Api/    # API .NET
└── frontend/                          # React App
```

## Como Executar

### Backend

```bash
cd backend/PedroArruda.Portfolio.Api
dotnet run
```

A API estará disponível em `http://localhost:5150`
Swagger UI: `http://localhost:5150/swagger`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173`

## API Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/developer | Dados do desenvolvedor |
| GET | /api/skills | Lista de skills |
| GET | /api/projects | Lista de projetos |
| GET | /api/projects/{slug} | Detalhes do projeto |
| POST | /api/contact | Enviar mensagem |
| GET | /api/health | Status da API |

## Design

O design é inspirado no Swagger UI com:
- Tema escuro (#1a1a1a)
- Cores de métodos HTTP (GET verde, POST azul, PUT laranja)
- Tipografia: Inter + JetBrains Mono
- Cards expansíveis estilo endpoint

## Autor

**Pedro Arruda** - Backend Developer | C# & .NET Specialist

- GitHub: [@pedrohendp](https://github.com/pedrohendp)
- LinkedIn: [/in/pedrohendp](https://linkedin.com/in/pedrohendp)
- Email: pedrohendp@gmail.com
