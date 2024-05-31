// Логин пользователя, проверка на уникальность на сервере
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import usenameIcon from '@../../../assets/user-input-icon.png'

const UserUsernameReg = ({onChangeHandler}) => {
    return (
      <UserInputContainer 
        img={usenameIcon} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        onChangeHandler={onChangeHandler} 
        placeholder={'Username:'} />
    );
  };
  
  export default UserUsernameReg;
  