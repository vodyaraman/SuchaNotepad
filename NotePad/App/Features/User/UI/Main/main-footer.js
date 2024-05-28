import { UserEntryFooterContainer } from "../../../../Entities/User";

import googleButtonIcon from '@/../../assets/google-button-icon.png';
import vkButtonIcon from '@/../../assets/vk-button-icon.png';
import mailButtonIcon from '@/../../assets/mail-button-icon.png';

const MainFooter = () => {
    const onPressHandler = (event) => {
        console.log(event.target)
    }

    return(
        <UserEntryFooterContainer img1={googleButtonIcon} img2={vkButtonIcon} img3={mailButtonIcon} onPressHandler={onPressHandler} />
    )
}

export default MainFooter;