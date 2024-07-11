// Основные образующие импорты
import express from 'express';
import passport from 'passport';
import cors from 'cors';

// Вспомогательные импорты
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import http from 'http';
import { initWebSocket, getIo } from "./websocket-config.js"

// Импорты Sentry
import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

// Импорты маршрутов
import userRoutes from './routes/userRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import groupRoutes from './routes/groupRoutes.js';
import noteAccess from './models/noteAccess.js';

// Импорты стратегий
import './strategies/local.js';
import './strategies/authentication.js';

// Инициализация приложения express
const app = express();

// Инициализация сервера
const server = http.createServer(app);

// Инициализация Sentry
Sentry.init({
  dsn: "https://65332efa9675266be2d8db713c2d5347@o4507217079304192.ingest.sentry.io/4507225970507856",
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app }),
    nodeProfilingIntegration(),
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});

// Обработчик запросов Sentry
app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// Промежуточное обеспечение
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

// Логгирование запросов
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.path}, body ${JSON.stringify(req.body)}`);
  next();
});

// Инициализация WebSocket
initWebSocket(server);
const io = getIo();

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
  });
});

// Маршруты
app.use('/users', userRoutes);
app.use('/notes', noteRoutes);
app.use('/notes', noteAccess);
app.use('/groups', groupRoutes);

// Обработчик ошибок Sentry
app.use(Sentry.Handlers.errorHandler());

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

const PORT = process.env.PORT || 10101;
server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});

export default app;





