import UserSubmitButton from "../../../../Pull/Buttons/submit";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import { useLogin } from "../../Helpers/user-manager";

const UserSubmit = () => {
  const { makeLogin } = useLogin();
  return(
    <UserSubmitButton 
        textColor={'white'} 
        text={'Login'}
        fontSize={hg('2.8%')}
        fontWeight={'bold'}
        onPressHandler={makeLogin} />
)};
  
export default UserSubmit;
  