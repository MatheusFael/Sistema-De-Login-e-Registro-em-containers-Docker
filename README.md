
# 📝 Backend Project – Node.js, Express.js, Prisma, PostgreSQL & Docker

Este projeto é um Todo App com autenticação, desenvolvido com Node.js, Express.js, Prisma, PostgreSQL e Docker. Aqui você encontrará uma visão geral do sistema, sua estrutura e instruções passo a passo para rodá-lo localmente.

---

## 🚀 Visão Geral

Este é um **Todo App** dockerizado com autenticação JWT, desenvolvido com:

- **Node.js & Express.js**
- **Prisma ORM**
- **PostgreSQL**
- **JWT & Bcrypt**
- **Docker & Docker Compose**

### Funcionalidades:

- ✅ **Registrar:** Criar uma nova conta  
- 🔐 **Login:** Autenticar e receber um token JWT  
- 🧾 **Gerenciar Todos:** Realizar operações CRUD autenticadas

---

## 🗂 Estrutura do Projeto

```
backend-todo-app/
│
├── public/
│   └── index.html             # Frontend HTML para login e gerenciamento de tarefas
│
├── prisma/
│   ├── schema.prisma          # Definição do schema do banco de dados
│   └── migrations/            # Arquivos de migração do Prisma
│
├── src/
│   ├── controllers/           # (Opcional) Lógica separada dos endpoints
│   ├── middlewares/
│   │   └── authMiddleware.js  # Middleware para verificação do token JWT
│   ├── routes/
│   │   ├── authRoutes.js      # Rotas de autenticação (registro e login)
│   │   └── todoRoutes.js      # Rotas protegidas para gerenciamento de tarefas
│   ├── prismaClient.js        # Configuração do cliente Prisma
│   └── server.js              # Ponto de entrada principal da aplicação
│
├── .env                       # Variáveis de ambiente (DATABASE_URL, JWT_SECRET etc.)
├── Dockerfile                 # Instruções para construir a imagem do app
├── docker-compose.yaml        # Configuração do Docker Compose (app + PostgreSQL)
├── package.json               # Dependências e scripts do projeto
├── package-lock.json          # Versões travadas das dependências
└── todo-app.rest              # Arquivo de requisições HTTP para testes
```

---

## ⚙️ Como Começar

### 1. Instale o Docker Desktop  
Disponível em [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

### 2. Clone o repositório:

```bash
git clone https://github.com/your-username/backend-todo-app.git](https://github.com/MatheusFael/Sistema-De-Login-e-Registro-em-containers-Docker.git
cd backend-todo-app
```

### 3. Gere o cliente Prisma:

```bash
npx prisma generate
```

### 4. Construa as imagens Docker:

```bash
docker compose build
```

### 5. Crie e aplique as migrações:

```bash
docker compose run app npx prisma migrate dev --name init
```

Se necessário posteriormente:

```bash
docker compose run app npx prisma migrate deploy
```

### 6. Suba os containers:

```bash
docker compose up
# ou em modo detached:
docker compose up -d
```

### 7. Acesse a aplicação:

Abra seu navegador em:  
👉 `http://localhost:5003` (ou `localhost:3000`, dependendo da porta)

---

## 🛠 Comandos úteis

### Acessar o banco PostgreSQL:

```bash
docker exec -it postgres-db psql -U postgres -d todoapp
```

### Parar os containers:

```bash
docker compose down
```

### Remover todos os containers/paradas:

```bash
docker system prune
```

---

## 📬 Testando a API via REST Client

O arquivo `todo-app.rest` contém requisições HTTP para testar a API diretamente no VS Code.

### Como usar:

1. Instale a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) no VS Code.
2. Abra o arquivo `todo-app.rest`.
3. Clique em **"Send Request"** acima de cada bloco para executar.
4. Copie o token do login e substitua `{{token}}` pelas rotas protegidas.

### Inclui requisições para:

- ✅ Registro de usuário
- 🔐 Login
- 📥 Listagem de todos
- ➕ Criação de tarefa
- ✏️ Atualização de tarefa
- ❌ Exclusão de tarefa

---

## ✅ Fluxo de Uso (Resumo)

1. Modifique o `schema.prisma` se necessário  
2. Gere as migrações com o Prisma  
3. Rode o Docker Compose  
4. Use o frontend ou REST Client para interagir com a API

---

## 📌 Conclusão

Este projeto é um ótimo ponto de partida para aprender:

- Backend com Node.js e Express.js  
- Autenticação com JWT  
- ORM com Prisma  
- Banco de dados PostgreSQL  
- Dockerização de apps backend

Explore, modifique e aproveite para construir algo ainda maior!
