// Main structure imports
import express from 'express';
import passport from 'passport';

// Support imports
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Routes imports
import userRoutes from './routes/userRoutes.js';

// Defining express.js app
const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

// Обработка ошибок 404
app.use((req, res, next) => {
  next(createError(404, 'Resource not found'));
});

// Обработчик ошибок
app.use((err, req, res, next) => {
  const isDev = req.app.get('env') === 'development';
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      details: isDev ? err.stack : undefined,
    },
  });
});

app.use('/users', userRoutes);

export default app;

