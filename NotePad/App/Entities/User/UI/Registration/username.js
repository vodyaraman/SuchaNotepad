import React, {useState} from 'react';
// Логин пользователя, проверка на уникальность на сервере
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import usenameIcon from '@../../../assets/user-input-icon.png'

//Импорт контекста
import { useRegistration } from "../../Helpers/user-manager";

//Импорт валидации
import { usernameValidation } from "../../Helpers/username-validation";

const UserUsernameReg = ({message, setMessage, setIsVisible}) => {
    const {updateUsername, registerState} = useRegistration()
    const [borderColor, setBorderColor] = useState('white')

    const onBlurCheckUser = async () => {
      const currentUsername = registerState.name
      
      const status = await usernameValidation(currentUsername)
      if (status.status) {
        setBorderColor('white')  
      } else{
        setMessage([...message, status.message])
        setIsVisible(true)
        setBorderColor('red')

        setTimeout(() => {
          setIsVisible(false)
          setTimeout(() => {
            setMessage('')
          }, 1000)
        }, 3000)
      }
    }

    return (
      <UserInputContainer 
        img={usenameIcon}
        borderBottomColor={borderColor} 
        fontSize={hg('2.3%')}
        fontFamily={'Lexend-Medium'} 
        onChangeHandler={updateUsername}
        onBlurHandler={onBlurCheckUser} 
        placeholder={'Username:'} />
    );
  };
  
  export default UserUsernameReg;
  