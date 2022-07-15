require('express-async-errors');
const express = require('express');

// ...
const authRouter = require('./database/routers/authRouter');
const usersRouter = require('./database/routers/usersRouter');
const authController = require('./controllers/authController');

const app = express();

app.use(express.json());

app.use('/login', authRouter);
// a partir dessa linha o express utilizará o validateToken para todas as rotas abaixo.
app.use(authController.validateToken); 
app.use('/user', usersRouter);

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    case 'UnauthorizedError':
      res.status(400).json({ message });
      break;
    default:
      res.status(500).json({ message });
      break;
  }
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
