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
├── frontend/                          # React App
└── .github/workflows/                 # GitHub Actions
```

## Desenvolvimento Local

### Backend

```bash
cd backend/PedroArruda.Portfolio.Api
dotnet run
```

API: `http://localhost:5150` | Swagger: `http://localhost:5150/swagger`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:5173`

---

## Deploy

### Frontend - GitHub Pages (Automático)

O deploy é feito automaticamente via GitHub Actions quando você faz push para `main`.

**URL:** https://pedrohendp.github.io/Portfolio-Pedro-Arruda/

#### Configuração Inicial (uma vez):

1. Acesse: `Settings > Pages` no repositório
2. Em **Source**, selecione: **GitHub Actions**
3. Salve

### Backend - Render (Gratuito)

#### Passo 1: Criar conta no Render

1. Acesse [render.com](https://render.com) e crie uma conta (pode usar GitHub)

#### Passo 2: Criar Web Service

1. Clique em **New > Web Service**
2. Conecte seu repositório GitHub `Portfolio-Pedro-Arruda`
3. Configure:
   - **Name:** `portfolio-api`
   - **Region:** escolha a mais próxima
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Runtime:** `Docker`
   - **Instance Type:** `Free`

4. Clique em **Create Web Service**

#### Passo 3: Aguardar Deploy

O Render vai buildar e deployar automaticamente. Pode levar alguns minutos.

**URL da API:** `https://portfolio-api-xxxx.onrender.com`

#### Passo 4: (Opcional) Conectar Frontend à API

Se quiser que o frontend use a API do Render em vez de dados estáticos:

1. No repositório, vá em `Settings > Secrets and variables > Actions`
2. Adicione uma variável:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://portfolio-api-xxxx.onrender.com/api`

3. Atualize o workflow `.github/workflows/deploy-frontend.yml`:
   ```yaml
   - name: Build
     working-directory: ./frontend
     env:
       VITE_API_URL: ${{ vars.VITE_API_URL }}
     run: npm run build
   ```

---

## API Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/developer | Dados do desenvolvedor |
| GET | /api/skills | Lista de skills |
| GET | /api/projects | Lista de projetos |
| GET | /api/projects/{slug} | Detalhes do projeto |
| POST | /api/contact | Enviar mensagem |
| GET | /api/health | Status da API |

---

## Autor

**Pedro Arruda** - Backend Developer | C# & .NET Specialist

- GitHub: [@pedrohendp](https://github.com/pedrohendp)
- LinkedIn: [/in/pedrohendp](https://linkedin.com/in/pedrohendp)
- Email: pedrohendp@gmail.com
