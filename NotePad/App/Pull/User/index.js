//Создание Public API - так мы передаём файлы между слоями, при импорте в других местах используем ссылку на index.js
import UserEntrypointPlate from "./UI/user-entrypoint-plate";
import UserEntryMainTitle from "./UI/user-entry-main-title";
import UserEntryFooterContainer from "./UI/user-entry-footer-container";
import UserBackgroundPlate from "./UI/user-background-plate";
import UserInputContainer from "./UI/user-input-container";
import BearIcon from "./UI/bear-icon";
import AnimatedModal from "./UI/animated-modal";
import { OpeningAnim } from "../Calendar/UI/opening-anim";

export {
    UserEntrypointPlate, 
    BearIcon, 
    UserBackgroundPlate, 
    UserInputContainer, 
    UserEntryMainTitle, 
    UserEntryFooterContainer,
    AnimatedModal,
    OpeningAnim};

/*В Pull/User мы создаём некоторые фрагменты кода, которые будут связаны с ситемой создание групп, регистрации,
авторизации, ведением аккаунта и идентификацией пользователя*/