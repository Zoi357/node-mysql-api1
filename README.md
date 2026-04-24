# MySQL REST API

A modern Node.js REST API built with Express, TypeScript, and MySQL using Sequelize ORM. Includes authentication, authorization, email notifications, and comprehensive API documentation with Swagger.

## Features

- 🔐 **Authentication & Authorization** - JWT-based auth with refresh token support
- 🗄️ **MySQL Database** - Powered by Sequelize ORM
- 📚 **Swagger Documentation** - Interactive API docs included
- 📧 **Email Notifications** - SMTP integration with Nodemailer
- 🔒 **Password Security** - Bcrypt password hashing
- ✅ **Request Validation** - Joi schema validation
- 🚀 **Hot Reload** - Nodemon for development
- 🌐 **CORS Support** - Cross-origin request handling

## Tech Stack

- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **Database:** MySQL with Sequelize ORM
- **Authentication:** JSON Web Tokens (JWT)
- **Validation:** Joi
- **Security:** Bcryptjs
- **Email:** Nodemailer
- **API Docs:** Swagger UI Express

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server (running on localhost:3306)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd node-mysql-api
```

2. Install dependencies:
```bash
npm install
```

3. Create the database:
```bash
mysql -u root -p
CREATE DATABASE `node-mysql-api`;
```

## Configuration

Update `config.json` with your settings:

```json
{
  "database": {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "your-password",
    "database": "node-mysql-api"
  },
  "secret": "your-jwt-secret-key",
  "emailFrom": "your-email@example.com",
  "smtpOptions": {
    "host": "smtp.your-email-provider.com",
    "port": 587,
    "auth": {
      "user": "your-email@example.com",
      "pass": "your-password"
    }
  }
}
```

## Running the Application

**Development mode** (with hot reload):
```bash
npm run start:dev
```

**Production mode**:
```bash
npm run start
```

The server will be available at `http://localhost:4000` (development) or the port specified in `NODE_ENV=production`.

## API Documentation

Once the server is running, view the interactive Swagger documentation at:
```
http://localhost:4000/api-docs
```

## Project Structure

```
├── accounts/                 # Account management
│   ├── account.model.ts     # Database model
│   ├── account.service.ts   # Business logic
│   └── accounts.controller.ts # Route handlers
├── _helpers/                # Utility functions
│   ├── db.ts               # Database initialization
│   ├── role.ts             # Role definitions
│   ├── send-email.ts       # Email service
│   └── swagger.ts          # Swagger setup
├── _middleware/            # Express middleware
│   ├── authorize.ts        # JWT verification
│   ├── error-handler.ts    # Error handling
│   └── validate-request.ts # Input validation
├── server.ts              # Application entry point
├── config.json            # Configuration file
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript config
```

## Available Routes

### Accounts
- `POST /accounts/register` - Register new account
- `POST /accounts/authenticate` - Login
- `POST /accounts/refresh-token` - Get new access token
- `GET /accounts` - Get all accounts (admin only)
- `GET /accounts/:id` - Get account by ID
- `PUT /accounts/:id` - Update account
- `DELETE /accounts/:id` - Delete account

## Environment Variables

- `NODE_ENV` - Set to `production` for production builds (defaults to development)
- `PORT` - Server port (default: 4000 in dev, 80 in production)

## Development

### Run tests:
```bash
npm test
```

### Build TypeScript:
The project uses ts-node to run TypeScript directly in development and can be compiled for production.

## License

ISC
