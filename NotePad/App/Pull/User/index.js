//Создание Public API - так мы передаём файлы между слоями, при импорте в других местах используем ссылку на index.js
import UserEntrypointPlate from "./UI/user-entrypoint-plate";
import MainRegAuthPlate from "./UI/main-regauth-plate";
import BearIcon from "./UI/bear-icon";

export {UserEntrypointPlate, BearIcon, MainRegAuthPlate};

/*В Pull/User мы создаём некоторые фрагменты кода, которые будут связаны с ситемой создание групп, регистрации,
авторизации, ведением аккаунта и идентификацией пользователя*/