// повторение пароля выносим отдельно, подключаем логику проверки на совпадение на уровне
import { UserInputContainer } from "../../../../Pull/User";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import badConfirmImg from '@../../../assets/bad-confirm-icon.png'
import correctConfirmImg from '@../../../assets/correct-confirm-icon.png'

const UserPasswordRepeatReg = ({onChangeHandler}) => {
    return (
      <UserInputContainer 
        img={badConfirmImg} 
        fontSize={hg('2.3%')} 
        fontFamily={'Lexend-Medium'} 
        onChangeHandler={onChangeHandler} 
        placeholder={'Confirm:'} 
        secureTextEntry={true} />
    );
  };
  
  export default UserPasswordRepeatReg;
  