import { UserSubmitButton } from "../../../../Pull/Buttons";
import {widthPercentageToDP as wd, heightPercentageToDP as hg} from 'react-native-responsive-screen'

const SubmitRegisterButton = ({onPressHandler}) => {
    return(
        <UserSubmitButton onPressHandler={onPressHandler} textColor={'white'} text={'Register'} fontSize={hg('3%')} fontWeight={'bold'} textAlign={'center'} />
    )
}

export default SubmitRegisterButton;