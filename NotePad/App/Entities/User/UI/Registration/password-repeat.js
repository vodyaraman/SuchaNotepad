import React, {useState} from 'react';
// повторение пароля выносим отдельно, подключаем логику проверки на совпадение на уровне
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import badConfirmImg from '@../../../assets/bad-confirm-icon.png'
import correctConfirmImg from '@../../../assets/correct-confirm-icon.png'

// Импорт контекста
import { useRegistration } from "../../Helpers/user-manager";

const UserPasswordRepeatReg = () => {
    const {passwordsMatch, updatePasswordRepeat} = useRegistration()

    const changePasswordRepeat = (password) => {
      updatePasswordRepeat(password)
    }
    
    return (
      <UserInputContainer 
        img={passwordsMatch ? correctConfirmImg : badConfirmImg} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        onChangeHandler={changePasswordRepeat} 
        placeholder={'Confirm:'} 
        secureTextEntry={true} />
    );
  };
  
  export default UserPasswordRepeatReg;
  