import React, {useState} from 'react';
// Логин пользователя, проверка на уникальность на сервере
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import usenameIcon from '@../../../assets/user-input-icon.png'

//Импорт контекста
import { useRegistration } from "../../Helpers/user-manager";

//Импорт валидации
import { usernameValidation } from "../../Helpers/username-validation";

const UserUsernameReg = () => {
    const {updateUsername} = useRegistration()
    const [borderColor, setBorderColor] = useState('white')

    const onChangeUsername = async (username) => {
      const status = await usernameValidation(username)
      if (status) {
        setBorderColor('white')
        updateUsername(username)
      } else{
        setBorderColor('red')
      }
    }

    return (
      <UserInputContainer 
        img={usenameIcon}
        borderBottomColor={borderColor} 
        fontSize={hg('2.3%')}
        fontFamily={'Lexend-Medium'} 
        onChangeHandler={onChangeUsername} 
        placeholder={'Username:'} />
    );
  };
  
  export default UserUsernameReg;
  