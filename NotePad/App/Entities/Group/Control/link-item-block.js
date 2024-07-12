import { ItemContainerWithImg, BlockWithTitleBetweenLines } from "../../../Pull/Group";

import copyLinkItemIcon from '@../../../assets/copy-button.png'

const LinkItemBlock = ({invationLink=''}) => {

    const onPressHandler = () => {
        console.log('Ссылка скопирована')
    }

    return(
        <BlockWithTitleBetweenLines text='Link'>
            <ItemContainerWithImg text={invationLink} img={copyLinkItemIcon} fontWeight='normal' onPressHandler={onPressHandler} />
        </BlockWithTitleBetweenLines>
    )
}

export default LinkItemBlock;