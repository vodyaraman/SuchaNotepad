// Пароль для входа в аккаунт
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import passwordIcon from '@../../../assets/password-input-icon.png'

const UserPassword = ({onChangeHandler}) => {
    return (
      <UserInputContainer img={passwordIcon} fontSize={hg('2.3%')} fontFamily={'Lexend-Medium'} placeholder={'Password:'} onChangeHandler={onChangeHandler} secureTextEntry={true} />
    );
  };
  
  export default UserPassword;
  