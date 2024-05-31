// пароль, нужно изменить инпут для работы с паролями
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import passwordIcon from '@../../../assets/password-input-icon.png'

const UserPasswordReg = ({onChangeHandler}) => {
    return (
      <UserInputContainer 
        img={passwordIcon} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        placeholder={'Password:'} 
        onChangeHandler={onChangeHandler} 
        secureTextEntry={true} />
    );
  };
  
  export default UserPasswordReg;
  