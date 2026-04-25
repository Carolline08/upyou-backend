# UpYou Backend

Backend da aplicação **UpYou**, uma plataforma de evolução pessoal com foco em hábitos, desafios diários, progresso e conquistas.

Este projeto foi desenvolvido com:

- Node.js
- Express
- MongoDB
- Mongoose
- Render (Deploy)
- MongoDB Atlas (Banco de Dados)



# Funcionalidades

## Usuários

- Cadastro de usuário
- Login de usuário
- Controle de XP
- Controle de nível
- Controle de streak

## Challenges (Hábitos)

- Criar novo hábito
- Listar hábitos
- Atualizar status do hábito
- Excluir hábito

## Progress

- Registrar progresso diário

## Achievements

- Criar conquistas
- Listar conquistas



# CRUD Implementado

## Challenge → CRUD Completo

### Create

Criar novo desafio

### Read

Listar desafios cadastrados

### Update

Atualizar status para concluído

### Delete

Remover desafio



# Estrutura de Pastas

´´´
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── achievementController.js
│   ├── challengeController.js
│   ├── progressController.js
│   └── userController.js
│
├── models/
│   ├── Achievement.js
│   ├── Challenge.js
│   ├── Progress.js
│   └── User.js
│
├── routes/
│   ├── achievementRoutes.js
│   ├── challengeRoutes.js
│   ├── progressRoutes.js
│   └── userRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js

# Instalação

## Clonar repositório

´´´
git clone <(https://github.com/Carolline08/upyou-backend.git)>
´´´
# Deploy

Backend publicado com:

## Render

Banco hospedado em:

## MongoDB Atlas

# Autor

## Carolline Barbosa

Projeto acadêmico desenvolvido para evolução pessoal gamificada através de hábitos e desafios.







