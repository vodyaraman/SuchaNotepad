// пароль, нужно изменить инпут для работы с паролями
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import passwordIcon from '@../../../assets/password-input-icon.png'

//Импорт контекста
import { useRegistration } from "../../Helpers/user-manager";

const UserPasswordReg = () => {
    const {updatePassword} = useRegistration()

    return (
      <UserInputContainer 
        img={passwordIcon} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        placeholder={'Password:'} 
        onChangeHandler={updatePassword} 
        secureTextEntry={true} />
    );
  };
  
  export default UserPasswordReg;
  