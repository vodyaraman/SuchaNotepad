import { ItemContainerWithImg, BlockWithTitleBetweenLines } from "../../../Pull/Group";

import copyLinkItemIcon from '@../../../assets/copy-button.png'

const LinkItemBlock = () => {

    const onPressHandler = () => {
        console.log('Ссылка скопирована')
    }

    const linkResponse = {link: 'kjgler#321l;1;l/dfsdf'}

    return(
        <BlockWithTitleBetweenLines text='Link'>
            <ItemContainerWithImg text={linkResponse.link} img={copyLinkItemIcon} fontWeight='normal' onPressHandler={onPressHandler} />
        </BlockWithTitleBetweenLines>
    )
}

export default LinkItemBlock;