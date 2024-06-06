import React, {useState} from 'react';
// email input registration 
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import emailIcon from '@../../../assets/email-input-icon.png'

//Импорт контекста
import { useRegistration } from "../../Helpers/user-manager";

//Импорт валидации
import { emailValidation, checkAvailabilityEmail } from "../../Helpers/email-validation";

const UserEmailReg = ({setMessage, setIsVisible}) => {

    const {updateEmail, registerState} = useRegistration()
    const [borderColor, setBorderColor] = useState('white')

    const onChangeEmail = (email) => {
      if(emailValidation(email)){
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

    const onBlurCheckEmail = async () => {
      const currentEmail = registerState.email
      const status = await checkAvailabilityEmail(currentEmail)

      if (status.status) {
        setBorderColor('white')
      } else{
        setMessage(status.message)
        setIsVisible(true)
        setBorderColor('red')

        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      }
    }

    return (
      <UserInputContainer 
        img={emailIcon} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        onChangeHandler={onChangeEmail}
        onBlurHandler={onBlurCheckEmail} 
        placeholder={'Email:'}
        borderBottomColor={borderColor} /> 
    );
  };
  
  export default UserEmailReg;
  