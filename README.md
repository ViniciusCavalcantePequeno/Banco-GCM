# Banco-GCM

Projeto da Disciplina de **Gerência e Configuração de Mudança**.

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
│   ├── .env                         # Variáveis de ambiente
│   ├── docker-compose.yml           # Configuração de containers (DB, API, etc.)
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
│   │   │   │   │   ├── validateUtils.js
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
│   │   │   │   ├── transacationUtils.js
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
│   │   │   ├── auth.js
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
└── /tests
    └── backend.test.js
    └── frontend.test.js
    └── integration.test.js
```

# Itens de Configuração do Software

| **Item de Configuração** | **Tipo** | **Plataforma** | **Localização** | **Versão** | **Responsável** | **Dependências** |
|----------------------------|-----------|----------------|------------------|-------------|------------------|------------------|
| package.json | Configuração | Todos | `/` | v1.0.0 | **Pedro Alexandre** | — |
| yarn.lock | Configuração | Todos | `/` | v1.0.0 | **Vinicius Cavalcante** | package.json |
| .gitignore | Configuração | Todos | `/` | v1.0.0 | **Thiago Santos** | — |
| README.md | Documentação | Todos | `/` | v1.0.0 | **Pedro Alexandre** | — |
| arquitetura.md | Documentação | Todos | `/docs/` | v1.0.0 | **Vinicius Cavalcante** | — |
| api-endpoints.md | Documentação | Backend | `/docs/` | v1.0.0 | **Thiago Santos** | — |
| manual-usuario.md | Documentação | Web/Mobile/Desktop | `/docs/` | v1.0.0 | **Pedro Alexandre** | — |
| requisitos.md | Documentação | Todos | `/docs/` | v1.0.0 | **Vinicius Cavalcante** | — |
| build.sh | Script | Todos | `/scripts/` | v1.0.0 | **Thiago Santos** | — |
| deploy.sh | Script | Todos | `/scripts/` | v1.0.0 | **Pedro Alexandre** | build.sh |
| test.sh | Script | Todos | `/scripts/` | v1.0.0 | **Vinicius Cavalcante** | jest.config.js |
| .env | Configuração | Todos | `/config/` | v1.0.0 | **Thiago Santos** | — |
| docker-compose.yml | Configuração | Backend | `/config/` | v1.0.0 | **Pedro Alexandre** | .env |
| jest.config.js | Configuração | Todos | `/config/` | v1.0.0 | **Vinicius Cavalcante** | — |
| backend.test.js | Teste | Backend | `/tests/` | v1.0.0 | **Thiago Santos** | jest.config.js |
| frontend.test.js | Teste | Web | `/tests/` | v1.0.0 | **Pedro Alexandre** | jest.config.js |
| integration.test.js | Teste | Todos | `/tests/` | v1.0.0 | **Vinicius Cavalcante** | backend.test.js, frontend.test.js |

## Front-end Web

| **Item de Configuração** | **Tipo** | **Plataforma** | **Localização** | **Versão** | **Responsável** | **Dependências** |
|----------------------------|-----------|----------------|------------------|-------------|------------------|------------------|
| index.html | Recurso | Web | `/packages/frontend/web/public/` | v1.0.0 | **Vinicius Cavalcante** | — |
| favicon.ico | Recurso | Web | `/packages/frontend/web/public/` | v1.0.0 | **Thiago Santos** | — |
| logo.png | Recurso | Web | `/packages/frontend/web/public/` | v1.0.0 | **Pedro Alexandre** | — |
| Button.jsx | Código-fonte | Web | `/packages/frontend/web/src/components/` | v1.0.0 | **Thiago Santos** | — |
| InputField.jsx | Código-fonte | Web | `/packages/frontend/web/src/components/` | v1.0.0 | **Pedro Alexandre** | — |
| Navbar.jsx | Código-fonte | Web | `/packages/frontend/web/src/components/` | v1.0.0 | **Vinicius Cavalcante** | — |
| Home.jsx | Código-fonte | Web | `/packages/frontend/web/src/pages/` | v1.0.0 | **Pedro Alexandre** | Navbar.jsx |
| Login.jsx | Código-fonte | Web | `/packages/frontend/web/src/pages/` | v1.0.0 | **Thiago Santos** | InputField.jsx |
| Dashboard.jsx | Código-fonte | Web | `/packages/frontend/web/src/pages/` | v1.0.0 | **Vinicius Cavalcante** | Navbar.jsx |
| Transferencia.jsx | Código-fonte | Web | `/packages/frontend/web/src/pages/` | v1.0.0 | **Pedro Alexandre** | formatCurrency.js |
| Extrato.jsx | Código-fonte | Web | `/packages/frontend/web/src/pages/` | v1.0.0 | **Thiago Santos** | formatCurrency.js |
| api.js | Código-fonte | Web | `/packages/frontend/web/src/services/` | v1.0.0 | **Vinicius Cavalcante** | — |
| authService.js | Código-fonte | Web | `/packages/frontend/web/src/services/` | v1.0.0 | **Pedro Alexandre** | api.js |
| formatCurrency.js | Código-fonte | Web | `/packages/frontend/web/src/utils/` | v1.0.0 | **Thiago Santos** | — |
| validateUtils.js | Código-fonte | Web | `/packages/frontend/web/src/utils/` | v1.0.0 | **Vinicius Cavalcante** | — |
| App.js | Código-fonte | Web | `/packages/frontend/web/src/` | v1.0.0 | **Pedro Alexandre** | Navbar.jsx, api.js |
| index.js | Código-fonte | Web | `/packages/frontend/web/src/` | v1.0.0 | **Thiago Santos** | App.js |
| package.json | Configuração | Web | `/packages/frontend/web/` | v1.0.0 | **Vinicius Cavalcante** | — |

## Front-end Mobile

| **Item de Configuração** | **Tipo** | **Plataforma** | **Localização** | **Versão** | **Responsável** | **Dependências** |
|----------------------------|-----------|----------------|------------------|-------------|------------------|------------------|
| Button.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/components/` | v1.0.0 | **Thiago Santos** | — |
| Header.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/components/` | v1.0.0 | **Pedro Alexandre** | — |
| LoginScreen.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/screens/` | v1.0.0 | **Vinicius Cavalcante** | Button.js, Header.js |
| HomeScreen.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/screens/` | v1.0.0 | **Thiago Santos** | Header.js |
| TransferScreen.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/screens/` | v1.0.0 | **Pedro Alexandre** | currency.js |
| ExtratoScreen.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/screens/` | v1.0.0 | **Vinicius Cavalcante** | currency.js |
| api.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/services/` | v1.0.0 | **Thiago Santos** | — |
| authService.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/services/` | v1.0.0 | **Pedro Alexandre** | api.js |
| currency.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/utils/` | v1.0.0 | **Vinicius Cavalcante** | — |
| cpfUtils.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/utils/` | v1.0.0 | **Thiago Santos** | — |
| App.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/` | v1.0.0 | **Pedro Alexandre** | Header.js, api.js |
| index.js | Código-fonte | Mobile | `/packages/frontend/mobile/src/` | v1.0.0 | **Vinicius Cavalcante** | App.js |
| package.json | Configuração | Mobile | `/packages/frontend/mobile/` | v1.0.0 | **Thiago Santos** | — |

## Front-end Desktop

| **Item de Configuração** | **Tipo** | **Plataforma** | **Localização** | **Versão** | **Responsável** | **Dependências** |
|----------------------------|-----------|----------------|------------------|-------------|------------------|------------------|
| WindowMenu.js | Código-fonte | Desktop | `/packages/frontend/desktop/src/components/` | v1.0.0 | **Pedro Alexandre** | — |
| MainWindow.js | Código-fonte | Desktop | `/packages/frontend/desktop/src/windows/` | v1.0.0 | **Vinicius Cavalcante** | WindowMenu.js |
| LoginWindow.js | Código-fonte | Desktop | `/packages/frontend/desktop/src/windows/` | v1.0.0 | **Thiago Santos** | WindowMenu.js |
| ipcService.js | Código-fonte | Desktop | `/packages/frontend/desktop/src/services/` | v1.0.0 | **Pedro Alexandre** | — |
| main.js | Código-fonte | Desktop | `/packages/frontend/desktop/src/` | v1.0.0 | **Vinicius Cavalcante** | ipcService.js, MainWindow.js |
| package.json | Configuração | Desktop | `/packages/frontend/desktop/` | v1.0.0 | **Thiago Santos** | — |

## Back-end

| **Item de Configuração** | **Tipo** | **Plataforma** | **Localização** | **Versão** | **Responsável** | **Dependências** |
|----------------------------|-----------|----------------|------------------|-------------|------------------|------------------|
| userController.js | Código-fonte | Backend | `/packages/backend/src/controllers/` | v1.0.0 | **Thiago Santos** | userService.js |
| accountController.js | Código-fonte | Backend | `/packages/backend/src/controllers/` | v1.0.0 | **Pedro Alexandre** | accountService.js |
| transactionController.js | Código-fonte | Backend | `/packages/backend/src/controllers/` | v1.0.0 | **Vinicius Cavalcante** | transactionService.js |
| User.js | Código-fonte | Backend | `/packages/backend/src/models/` | v1.0.0 | **Pedro Alexandre** | db.config.js |
| Account.js | Código-fonte | Backend | `/packages/backend/src/models/` | v1.0.0 | **Vinicius Cavalcante** | db.config.js |
| Transaction.js | Código-fonte | Backend | `/packages/backend/src/models/` | v1.0.0 | **Thiago Santos** | db.config.js |
| userRoutes.js | Código-fonte | Backend | `/packages/backend/src/routes/` | v1.0.0 | **Pedro Alexandre** | userController.js |
| accountRoutes.js | Código-fonte | Backend | `/packages/backend/src/routes/` | v1.0.0 | **Vinicius Cavalcante** | accountController.js |
| transactionRoutes.js | Código-fonte | Backend | `/packages/backend/src/routes/` | v1.0.0 | **Thiago Santos** | transactionController.js |
| transactionService.js | Código-fonte | Backend | `/packages/backend/src/services/` | v1.0.0 | **Pedro Alexandre** | Transaction.js |
| userService.js | Código-fonte | Backend | `/packages/backend/src/services/` | v1.0.0 | **Vinicius Cavalcante** | User.js |
| accountService.js | Código-fonte | Backend | `/packages/backend/src/services/` | v1.0.0 | **Thiago Santos** | Account.js |
| authMiddleware.js | Código-fonte | Backend | `/packages/backend/src/middlewares/` | v1.0.0 | **Pedro Alexandre** | jwt.config.js |
| errorHandler.js | Código-fonte | Backend | `/packages/backend/src/middlewares/` | v1.0.0 | **Vinicius Cavalcante** | — |
| transacationUtils.js | Código-fonte | Backend | `/packages/backend/src/utils/` | v1.0.0 | **Thiago Santos** | — |
| server.js | Código-fonte | Backend | `/packages/backend/src/` | v1.0.0 | **Pedro Alexandre** | routes, middlewares |
| db.config.js | Configuração | Backend | `/packages/backend/config/` | v1.0.0 | **Vinicius Cavalcante** | .env |
| jwt.config.js | Configuração | Backend | `/packages/backend/config/` | v1.0.0 | **Thiago Santos** | security/jwt |
| app.config.js | Configuração | Backend | `/packages/backend/config/` | v1.0.0 | **Pedro Alexandre** | — |
| package.json | Configuração | Backend | `/packages/backend/` | v1.0.0 | **Vinicius Cavalcante** | — |
| auth.js | Código-fonte | Segurança | `/packages/security/auth/` | v1.0.0 | **Thiago Santos** | generateToken.js |
| hashPassword.js | Código-fonte | Segurança | `/packages/security/encryption/` | v1.0.0 | **Pedro Alexandre** | — |
| decryptData.js | Código-fonte | Segurança | `/packages/security/encryption/` | v1.0.0 | **Vinicius Cavalcante** | — |
| generateToken.js | Código-fonte | Segurança | `/packages/security/jwt/` | v1.0.0 | **Thiago Santos** | jwt.config.js |
| verifyToken.js | Código-fonte | Segurança | `/packages/security/jwt/` | v1.0.0 | **Pedro Alexandre** | jwt.config.js |
| securityHelpers.js | Código-fonte | Segurança | `/packages/security/utils/` | v1.0.0 | **Vinicius Cavalcante** | — |
| package.json | Configuração | Segurança | `/packages/security/` | v1.0.0 | **Thiago Santos** | — |
| 001-create-users.js | Migração | Banco de Dados | `/packages/database/migrations/` | v1.0.0 | **Pedro Alexandre** | database.js |
| 002-create-accounts.js | Migração | Banco de Dados | `/packages/database/migrations/` | v1.0.0 | **Vinicius Cavalcante** | database.js |
| 003-create-transactions.js | Migração | Banco de Dados | `/packages/database/migrations/` | v1.0.0 | **Thiago Santos** | database.js |
| usersSeed.js | Seed | Banco de Dados | `/packages/database/seeds/` | v1.0.0 | **Pedro Alexandre** | 001-create-users.js |
| accountsSeed.js | Seed | Banco de Dados | `/packages/database/seeds/` | v1.0.0 | **Vinicius Cavalcante** | 002-create-accounts.js |
| database.js | Código-fonte | Banco de Dados | `/packages/database/` | v1.0.0 | **Thiago Santos** | db.config.js |
| package.json | Configuração | Banco de Dados | `/packages/database/` | v1.0.0 | **Pedro Alexandre** | — |
| emailService.js | Código-fonte | Notificações | `/packages/notifications/email/` | v1.0.0 | **Vinicius Cavalcante** | — |
| smsService.js | Código-fonte | Notificações | `/packages/notifications/sms/` | v1.0.0 | **Thiago Santos** | — |
| pushService.js | Código-fonte | Notificações | `/packages/notifications/push/` | v1.0.0 | **Pedro Alexandre** | — |
| notificationService.js | Código-fonte | Notificações | `/packages/notifications/` | v1.0.0 | **Vinicius Cavalcante** | emailService.js, smsService.js, pushService.js |
| package.json | Configuração | Notificações | `/packages/notifications/` | v1.0.0 | **Thiago Santos** | — |

