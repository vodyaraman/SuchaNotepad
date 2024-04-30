import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

// Настройка JWT Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Получение JWT из заголовка Authorization
      secretOrKey: secretKey,
    },
    async (jwtPayload, done) => {
      try {
        // Поиск пользователя по ID из JWT-полей
        const user = await User.findById(jwtPayload.id);
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        return done(null, user); // Успешная аутентификация
      } catch (error) {
        return done(error);
      }
    }
  )
);
