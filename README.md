# Pedro Arruda Portfolio

Portfólio profissional desenvolvido com ASP.NET Core (back-end) e React + TypeScript (front-end), com tema escuro inspirado no Swagger UI.

**Site:** https://pedrohendp.github.io/Arruda/

## Stack

- **Back-end:** ASP.NET Core 8, Minimal API, Swagger/OpenAPI (Swashbuckle)
- **Front-end:** React 19, TypeScript, Vite 7
- **Estilo:** CSS Modules com tema dark inspirado no Swagger

## Estrutura

```
Arruda/
├── backend/
│   ├── Dockerfile                     # Imagem usada no deploy do Render
│   └── PedroArruda.Portfolio.Api/     # API .NET
├── frontend/                          # App React
├── render.yaml                        # Blueprint do Render (API)
└── .github/workflows/                 # Deploy do front-end no GitHub Pages
```

### Onde ficam os dados

O conteúdo do site (bio, skills e projetos) fica em dois arquivos, que devem ser mantidos iguais:

- `frontend/src/data/portfolio-data.ts`: dados estáticos usados pelo site publicado
- `backend/PedroArruda.Portfolio.Api/Data/portfolio-data.json`: dados servidos pela API

## Desenvolvimento local

### Back-end

```bash
cd backend/PedroArruda.Portfolio.Api
dotnet run
```

API: `http://localhost:5150` | Swagger: `http://localhost:5150/swagger`

### Front-end

```bash
cd frontend
npm install
npm run dev
```

Front-end: `http://localhost:5173`

---

## Deploy

### Front-end: GitHub Pages (automático)

O workflow `.github/workflows/deploy-frontend.yml` publica o site a cada push na `main`.

**URL:** https://pedrohendp.github.io/Arruda/

O caminho diferencia maiúsculas: `/Arruda/` funciona, `/arruda/` dá 404.

Configuração inicial (uma vez só): em `Settings > Pages`, selecione **GitHub Actions** em **Source**.

### Back-end: Render (opcional, plano gratuito)

O `render.yaml` na raiz já descreve o serviço. No Render:

1. Clique em **New > Blueprint** e conecte o repositório `pedrohendp/Arruda`
2. Confirme o serviço `portfolio-api` (Docker, plano Free)
3. Aguarde o deploy; a API fica em `https://portfolio-api-xxxx.onrender.com`

### Conectar o front-end à API (opcional)

Sem configuração nenhuma, o site usa os dados estáticos do front-end. Para usar a API do Render:

1. Em `Settings > Secrets and variables > Actions > Variables`, crie a variável `VITE_API_URL` com o valor `https://portfolio-api-xxxx.onrender.com/api`
2. Faça um push na `main` (ou rode o workflow manualmente) para republicar

O workflow já lê essa variável no build.

---

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/developer | Dados do desenvolvedor |
| GET | /api/skills | Lista de skills |
| GET | /api/projects | Lista de projetos |
| GET | /api/projects/featured | Projetos em destaque |
| GET | /api/projects/{slug} | Detalhes do projeto |
| GET | /api/contact/info | Dados de contato |
| POST | /api/contact | Enviar mensagem |
| GET | /api/health | Status da API |

---

## Autor

**Pedro Arruda**: Backend Developer | C# & .NET

- Site: https://pedrohendp.github.io/Arruda/
- GitHub: [@pedrohendp](https://github.com/pedrohendp)
- LinkedIn: [/in/pedrohendp](https://www.linkedin.com/in/pedrohendp/)
- Email: pedrohendp@gmail.com
