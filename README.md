# Banco-GCM

Projeto da disciplina GCM

Professor: Alvaro

Membros:
- Pedro Henrique Alexandre
- Thiago dos Santos Araujo
- Vinicius Cavalcante Pequeno


# Estrutura do Projeto

```

/Banco-GCM
│
├── /src
│   ├── /api
│   │   ├── /controllers
│   │   │   ├── authController.js           # Controle de autenticação (login, cadastro)
│   │   │   ├── accountController.js        # Controle de contas bancárias
│   │   │   └── transactionController.js    # Controle de transações bancárias
│   │   ├── /models
│   │   │   ├── userModel.js                # Modelo de usuário
│   │   │   ├── accountModel.js             # Modelo de conta bancária
│   │   │   └── transactionModel.js         # Modelo de transação
│   │   ├── /routes
│   │   │   ├── authRoutes.js               # Rotas de autenticação (login, cadastro)
│   │   │   ├── accountRoutes.js            # Rotas de contas bancárias
│   │   │   └── transactionRoutes.js        # Rotas de transações
│   │   ├── /middlewares
│   │   │   └── authMiddleware.js           # Middleware para autenticação (JWT)
│   │   ├── /services
│   │   │   ├── authService.js              # Serviço de autenticação (login, criação de token)
│   │   │   ├── accountService.js           # Lógica de contas bancárias
│   │   │   └── transactionService.js       # Lógica de transações
│   │   └── config.js                       # Configuração geral da API
│   ├── /config
│   │   └── config.yaml                     # Arquivo YAML de configurações
│   ├── server.js                           # Inicialização do servidor Express
│   └── .env                                # Arquivo de variáveis de ambiente
│
├── /public
│   ├── index.html                          # Página inicial (front-end)
│   └── /assets
│       └── logo.png                        # Imagem do logo
│
├── /client
│   ├── /components
│   │   └── Account.js                      # Componente React de exibição da conta
│   ├── /pages
│   │   └── Dashboard.js                    # Página principal do usuário (Dashboard)
│   └── index.js                            # Arquivo de inicialização do React
│
├── package.json                            # Gerenciador de dependências
└── README.md                               # Documentação do projeto
