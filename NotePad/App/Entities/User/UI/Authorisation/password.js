// Пароль для входа в аккаунт
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import React, {useState} from 'react';

import passwordIcon from '@../../../assets/password-input-icon.png'
import closeEyePasswordIcon from '@../../../assets/close-eye-password.png'
import openEyePasswordIcon from '@../../../assets/open-eye-password.png'

import { useLogin } from "../../Helpers/user-manager";

const UserPassword = () => {
    const { updateUserPassword } = useLogin();

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
        onChangeHandler={ updateUserPassword } 
        secureTextEntry={statusSecureText}
        borderBottomColor={'white'}
      />
    );
  };
  
  export default UserPassword;
  