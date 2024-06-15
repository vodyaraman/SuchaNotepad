// Пароль для входа в аккаунт
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import passwordIcon from '@../../../assets/password-input-icon.png'
import { useLogin } from "../../Helpers/user-manager";

const UserPassword = () => {
    const { updateUserPassword } = useLogin();
    return (
      <UserInputContainer 
        img={passwordIcon} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        placeholder={'Password:'} 
        onChangeHandler={ updateUserPassword } 
        secureTextEntry={true}
      />
    );
  };
  
  export default UserPassword;
  