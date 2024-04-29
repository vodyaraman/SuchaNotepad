import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Загружаем переменные окружения из файла .env
dotenv.config();

// Строка подключения к MongoDB хранится в .env
const mongoURI = process.env.MONGO_URI;
console.log(mongoURI);

// Подключение к MongoDB с обработкой событий
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }) // параметры для совместимости
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

export default mongoose;
