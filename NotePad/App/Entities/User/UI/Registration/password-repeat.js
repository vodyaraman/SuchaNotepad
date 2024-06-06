import React, {useState, useEffect} from 'react';
// повторение пароля выносим отдельно, подключаем логику проверки на совпадение на уровне
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import badConfirmImg from '@../../../assets/bad-confirm-icon.png'
import correctConfirmImg from '@../../../assets/correct-confirm-icon.png'

// Импорт контекста
import { useRegistration } from "../../Helpers/user-manager";

const UserPasswordRepeatReg = () => {
    const {passwordsMatch,updatePasswordRepeat} = useRegistration()
    const [borderColor, setBorderColor] = useState('white')
    const [correctImg, setCorrectImg] = useState(badConfirmImg)

    const changePasswordRepeat = (password) => {
      updatePasswordRepeat(password)
    }

    useEffect(() => {
      if(passwordsMatch){
        setBorderColor('white')
        setCorrectImg(correctConfirmImg)
      } else if(passwordsMatch === null){
        setBorderColor('white')
        setCorrectImg(badConfirmImg)
      } 
      else{
        setBorderColor('red')
        setCorrectImg(badConfirmImg)
      }
    }, [passwordsMatch])
    
    return (
      <UserInputContainer 
        img={correctImg} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        onChangeHandler={changePasswordRepeat} 
        placeholder={'Confirm:'} 
        secureTextEntry={true}
        borderBottomColor={borderColor}/> 
    );
  };
  
  export default UserPasswordRepeatReg;
  