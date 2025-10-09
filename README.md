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
├── package.json                    # Dependências globais do monorepo
├── yarn.lock                       # Arquivo de bloqueio (Yarn)
├── .gitignore                      # Arquivo para ignorar pastas/arquivos no Git
├── README.md                       # Documentação geral do projeto
│
├── /docs
│   ├── arquitetura.md               # Documentação da arquitetura do sistema
│   ├── api-endpoints.md             # Lista de endpoints da API
│   ├── manual-usuario.md            # Manual do usuário final
│   └── requisitos.md                # Requisitos funcionais e não funcionais
│
├── /scripts
│   ├── build.sh                     # Script para build do sistema
│   ├── deploy.sh                    # Script para deploy
│   └── test.sh                      # Script para executar testes automatizados
│
├── /config
│   ├── .env.example                 # Exemplo de variáveis de ambiente
│   ├── docker-compose.yml           # Configuração de containers (DB, API, etc.)
│   ├── nginx.conf                   # Configuração de proxy reverso (se necessário)
│   └── jest.config.js               # Configuração de testes
│
├── /packages
│   │
│   ├── /frontend
│   │   ├── /web
│   │   │   ├── /public
│   │   │   │   ├── index.html
│   │   │   │   ├── favicon.ico
│   │   │   │   └── logo.png
│   │   │   │
│   │   │   ├── /src
│   │   │   │   ├── /components
│   │   │   │   │   ├── Button.jsx
│   │   │   │   │   ├── InputField.jsx
│   │   │   │   │   └── Navbar.jsx
│   │   │   │   │
│   │   │   │   ├── /pages
│   │   │   │   │   ├── Home.jsx
│   │   │   │   │   ├── Login.jsx
│   │   │   │   │   ├── Dashboard.jsx
│   │   │   │   │   ├── Transferencia.jsx
│   │   │   │   │   └── Extrato.jsx
│   │   │   │   │
│   │   │   │   ├── /services
│   │   │   │   │   ├── api.js
│   │   │   │   │   └── authService.js
│   │   │   │   │
│   │   │   │   ├── /utils
│   │   │   │   │   ├── formatCurrency.js
│   │   │   │   │   ├── validateCPF.js
│   │   │   │   │   └── dateUtils.js
│   │   │   │   │
│   │   │   │   ├── App.js
│   │   │   │   └── index.js
│   │   │   │
│   │   │   └── package.json
│   │   │
│   │   ├── /mobile
│   │   │   ├── /src
│   │   │   │   ├── /components
│   │   │   │   │   ├── Button.js
│   │   │   │   │   └── Header.js
│   │   │   │   │
│   │   │   │   ├── /screens
│   │   │   │   │   ├── LoginScreen.js
│   │   │   │   │   ├── HomeScreen.js
│   │   │   │   │   ├── TransferScreen.js
│   │   │   │   │   └── ExtratoScreen.js
│   │   │   │   │
│   │   │   │   ├── /services
│   │   │   │   │   ├── api.js
│   │   │   │   │   └── authService.js
│   │   │   │   │
│   │   │   │   ├── /utils
│   │   │   │   │   ├── currency.js
│   │   │   │   │   └── cpfUtils.js
│   │   │   │   │
│   │   │   │   ├── App.js
│   │   │   │   └── index.js
│   │   │   │
│   │   │   └── package.json
│   │   │
│   │   └── /desktop
│   │       ├── /src
│   │       │   ├── /components
│   │       │   │   └── WindowMenu.js
│   │       │   ├── /windows
│   │       │   │   ├── MainWindow.js
│   │       │   │   └── LoginWindow.js
│   │       │   ├── /services
│   │       │   │   └── ipcService.js
│   │       │   └── main.js
│   │       └── package.json
│   │
│   ├── /backend
│   │   ├── /src
│   │   │   ├── /controllers
│   │   │   │   ├── userController.js
│   │   │   │   ├── accountController.js
│   │   │   │   └── transactionController.js
│   │   │   │
│   │   │   ├── /models
│   │   │   │   ├── User.js
│   │   │   │   ├── Account.js
│   │   │   │   └── Transaction.js
│   │   │   │
│   │   │   ├── /routes
│   │   │   │   ├── userRoutes.js
│   │   │   │   ├── accountRoutes.js
│   │   │   │   └── transactionRoutes.js
│   │   │   │
│   │   │   ├── /services
│   │   │   │   ├── transactionService.js
│   │   │   │   ├── userService.js
│   │   │   │   └── accountService.js
│   │   │   │
│   │   │   ├── /middlewares
│   │   │   │   ├── authMiddleware.js
│   │   │   │   └── errorHandler.js
│   │   │   │
│   │   │   ├── /utils
│   │   │   │   ├── logger.js
│   │   │   │   └── responseHelper.js
│   │   │   │
│   │   │   └── server.js
│   │   │
│   │   ├── /config
│   │   │   ├── db.config.js
│   │   │   ├── jwt.config.js
│   │   │   └── app.config.js
│   │   │
│   │   └── package.json
│   │
│   ├── /security
│   │   ├── /auth
│   │   │   ├── login.js
│   │   │   ├── logout.js
│   │   │   └── register.js
│   │   ├── /encryption
│   │   │   ├── hashPassword.js
│   │   │   └── decryptData.js
│   │   ├── /jwt
│   │   │   ├── generateToken.js
│   │   │   └── verifyToken.js
│   │   ├── /utils
│   │   │   └── securityHelpers.js
│   │   └── package.json
│   │
│   ├── /database
│   │   ├── /migrations
│   │   │   ├── 001-create-users.js
│   │   │   ├── 002-create-accounts.js
│   │   │   └── 003-create-transactions.js
│   │   ├── /seeds
│   │   │   ├── usersSeed.js
│   │   │   └── accountsSeed.js
│   │   ├── database.js
│   │   └── package.json
│   │
│   └── /notifications
│       ├── /email
│       │   └── emailService.js
│       ├── /sms
│       │   └── smsService.js
│       ├── /push
│       │   └── pushService.js
│       ├── notificationService.js
│       └── package.json
│
├── /tests
│   ├── backend.test.js
│   ├── frontend.test.js
│   └── integration.test.js
│
└── /logs
    ├── app.log
    └── error.log
