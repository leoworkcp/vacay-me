# Backend Set Up

## Your file structure should now look like this.

authenticate-me
├── backend
└── frontend

## Create a .gitignore file at the root of the project with the following contents:

node_modules
.env
build
.DS_Store

# Dependencies

In the backend folder, initialize the server's package.json by running npm init -y.

npm install the following packages as dependencies:

- bcryptjs - password hashing
- cookie-parser - parsing cookies from requests
- cors - CORS
- csurf - CSRF protection
- dotenv - load environment variables into Node.js from a .env file
- express - Express
- express-async-handler - handling async route handlers
- express-validator - validation of request bodies
- faker - random seeding library
- helmet - security middleware
- jsonwebtoken - JWT
- morgan - logging information about server requests/responses
- per-env - use environment variables for starting app differently
- pg@">=8.4.1" - PostgresQL greater or equal to version 8.4.1
- sequelize@5 - Sequelize
- sequelize-cli@5 - use sequelize in the command line

## npm install -D the following packages as dev-dependencies:

dotenv-cli - use dotenv in the command line
nodemon - hot reload server backend files

## populate the .env file based on the example below:

PORT=5000
DB_USERNAME=auth_app
DB_PASSWORD=«auth_app user password»
DB_DATABASE=auth_db
DB_HOST=localhost
JWT_SECRET=«generate_strong_secret_here»
JWT_EXPIRES_IN=604800

## create a random string using openssl

(a library that should be installed in your Ubuntu/MacOS shell already).
Run openssl rand -base64 10 to generate a random JWT secret.

# Frontend Set Up

## Method 2: Use Redux template

Use the create-react-app command from inside your frontend folder to initialize React inside of the frontend folder:

npx create-react-app . --template @appacademy/react-redux-v17 --use-npm

npm start http://localhost:3000

# Heroku setup

npm install -g heroku

heroku git:remote -a vacay-me
