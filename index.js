const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const errorMiddleware = require('./middlewares/error.middleware');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(require('./routes/users.route'));
app.use(errorMiddleware);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log('Успешное соединение...'))
  .catch(() => console.log('Пал хила'));

app.listen(PORT, () => {
  console.log('Сервер запущен на http://localhost:8000/');
});
