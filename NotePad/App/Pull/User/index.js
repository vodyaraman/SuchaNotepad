//Создание Public API - так мы передаём файлы между слоями, при импорте в других местах используем ссылку на index.js
import UserEntrypointPlate from "./UI/user-entrypoint-plate";
import UserEntryMainTitle from "./UI/user-entry-main-title";
import UserEntryFooterContainer from "./UI/user-entry-footer-container";
import RegAuthPlate from "./UI/regauth-plate";
import UserInputContainer from "./UI/user-input-container";
import BearIcon from "./UI/bear-icon";

export {UserEntrypointPlate, BearIcon, RegAuthPlate, UserInputContainer, UserEntryMainTitle, UserEntryFooterContainer};

/*В Pull/User мы создаём некоторые фрагменты кода, которые будут связаны с ситемой создание групп, регистрации,
авторизации, ведением аккаунта и идентификацией пользователя*/