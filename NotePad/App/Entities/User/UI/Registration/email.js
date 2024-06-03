import React, {useState} from 'react';
// email input registration 
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import emailIcon from '@../../../assets/email-input-icon.png'

//Импорт контекста
import { useRegistration } from "../../Helpers/user-manager";

//Импорт валидации
import { emailValidation } from "../../Helpers/email-validation";

const UserEmailReg = () => {

    const {updateEmail} = useRegistration()
    const [borderColor, setBorderColor] = useState('white')

    const onChangeEmail = (email) => {
      if(emailValidation(email)){
        console.log('Корректный email')
        setBorderColor('white')
        updateEmail(email)
      }
      else if(email === ''){
        setBorderColor('white')
      }
      else {
        setBorderColor('red')
        console.log('Некорректный email')
      }
    }

    return (
      <UserInputContainer 
        img={emailIcon} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        onChangeHandler={onChangeEmail} 
        placeholder={'Email:'}
        borderBottomColor={borderColor} /> 
    );
  };
  
  export default UserEmailReg;
  