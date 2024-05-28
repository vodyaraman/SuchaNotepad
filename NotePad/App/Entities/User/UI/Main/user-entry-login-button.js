import { UserSubmitButton } from "../../../../Pull/Buttons";
import {widthPercentageToDP as wd, heightPercentageToDP as hg} from 'react-native-responsive-screen'

const UserEntryLoginButton = ({onPressHandler}) => {
    return(
        <UserSubmitButton onPressHandler={onPressHandler} textColor={'white'} text={'Login'} fontSize={hg('3.7%')} fontWeight={'bold'} textAlign={'center'} />
    )
}

export default UserEntryLoginButton;