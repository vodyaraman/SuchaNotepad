// email input registration 
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import emailIcon from '@../../../assets/email-input-icon.png'

const UserEmailReg = ({onChangeHandler}) => {
    return (
      <UserInputContainer 
        img={emailIcon} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        onChangeHandler={onChangeHandler} 
        placeholder={'Email:'} />
    );
  };
  
  export default UserEmailReg;
  