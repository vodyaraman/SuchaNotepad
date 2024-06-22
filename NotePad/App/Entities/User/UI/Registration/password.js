import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import passwordIcon from '@../../../assets/password-input-icon.png'
import closeEyePasswordIcon from '@../../../assets/close-eye-password.png'
import openEyePasswordIcon from '@../../../assets/open-eye-password.png'

import React, {useState} from 'react';

//Импорт контекста
import { useRegistration } from "../../Helpers/user-manager";

const UserPasswordReg = () => {
    const {updatePassword} = useRegistration()
    const [statusSecureText, setStatusSecureText] = useState(true)

    const onImgPassPress = () => {
      setStatusSecureText(!statusSecureText)
    }

    return (
      <UserInputContainer 
        img={passwordIcon}
        additImg={statusSecureText ? closeEyePasswordIcon : openEyePasswordIcon}
        onImgPassPress={onImgPassPress} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        placeholder={'Password:'} 
        onChangeHandler={updatePassword} 
        secureTextEntry={statusSecureText}
         />
    );
  };
  
  export default UserPasswordReg;
  