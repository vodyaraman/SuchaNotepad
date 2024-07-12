import { ItemContainerWithImg, BlockWithTitleBetweenLines } from "../../../Pull/Group";

import copyLinkItemIcon from '@../../../assets/copy-button.png'

//Импорт функции копирования текста в буфер обмена
import { copyTextToClipboard } from "../Helpers/copyToClipboard";

const LinkItemBlock = ({invationLink=''}) => {

    const onPressHandler = async () => {
        copyTextToClipboard(invationLink)
    }

    return(
        <BlockWithTitleBetweenLines text='Link'>
            <ItemContainerWithImg text={invationLink} img={copyLinkItemIcon} fontWeight='normal' onPressHandler={onPressHandler} />
        </BlockWithTitleBetweenLines>
    )
}

export default LinkItemBlock;