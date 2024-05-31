// ---- Компоненты для окна авторизации ----
import UserLogin from './UI/Authorisation/login';
import UserPassword from './UI/Authorisation/password';
import UserSubmit from './UI/Authorisation/submit';

// ---- Компоненты для окна регистрации ----
import UserEmailReg from './UI/Registration/email';
import UserPasswordRepeatReg from './UI/Registration/password-repeat';
import UserPasswordReg from './UI/Registration/password';
import UserUsernameReg from './UI/Registration/username';
import SubmitRegisterButton from './UI/Registration/submit';

// ---- Компоненты для фона ----
import UserBackground from './UI/Main/user-background';

// ---- Компонент текста с мини-кнопкой ---- 
import HelpTextButton from './UI/Main/help-text-button';


import { UserProvider } from './Helpers/user-manager';

export {
  UserLogin,
  UserPassword,
  UserSubmit,
  UserEmailReg,
  UserPasswordRepeatReg,
  UserPasswordReg,
  UserUsernameReg,
  SubmitRegisterButton,
  UserBackground,
  HelpTextButton,
  UserProvider
};
