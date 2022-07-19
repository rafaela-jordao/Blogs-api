require('express-async-errors');
const express = require('express');

// ...
const authRouter = require('./database/routers/authRouter');
const usersRouter = require('./database/routers/usersRouter');
const categoryRouter = require('./database/routers/categoryRouter');
const postRouter = require('./database/routers/postRouter');

const app = express();

app.use(express.json());

app.use('/login', authRouter);

app.use('/user', usersRouter);
app.use('/user/:id', usersRouter);

app.use('/categories', categoryRouter);
app.use('/post', postRouter);

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
      res.status(401).json({ message });
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
