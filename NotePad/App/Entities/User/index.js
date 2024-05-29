// ---- Компоненты для окна авторизации ----
import UserLogin from './UI/Authorisation/login';
import UserPassword from './UI/Authorisation/password';
import UserSubmit from './UI/Authorisation/submit';

// ---- Компоненты для окна регистрации ----
import UserEmail from './UI/Registration/email';
import UserPasswordRepeat from './UI/Registration/password-repeat';
import UserPasswordReg from './UI/Registration/password';
import UserUsername from './UI/Registration/username';
import SubmitRegisterButton from './UI/Registration/submit';

// ---- Компоненты для главного окна ----
import UserEntryLoginButton from "./UI/Authorisation/entry-button";
import UserEntryRegisterButton from "./UI/Registration/entry-button";
import UserEntryMainTitle from "./UI/Main/user-entry-main-title";
import UserEntryFooterContainer from "./UI/Main/user-entry-footer-container";

import { UserProvider } from './Helpers/user-manager';

export {
  UserLogin,
  UserPassword,
  UserSubmit,
  UserEmail,
  UserPasswordRepeat,
  UserPasswordReg,
  UserUsername,
  SubmitRegisterButton,
  UserEntryLoginButton,
  UserEntryRegisterButton,
  UserEntryMainTitle,
  UserEntryFooterContainer,
  UserProvider
};
