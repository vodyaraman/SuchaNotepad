import { UserInputContainer } from '../../../../Pull/User';
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import emailIcon from '@../../../assets/email-input-icon.png'

import { useLogin } from '../../Helpers/user-manager';

const UserLogin = () => {
    const {updateLogin} = useLogin();
    return (
        <UserInputContainer 
            img={emailIcon} 
            fontSize={hg('2.3%')} 
            fontFamily={'Lexend-Medium'} 
            onChangeHandler={updateLogin} 
            placeholder={'Email:'}
            borderBottomColor={'white'} />
    )
  };
  
  export default UserLogin;

  