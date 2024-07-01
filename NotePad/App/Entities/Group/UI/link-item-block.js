import { ItemContainerWithImg } from "../../../Pull/Group";

import copyLinkItemIcon from '@../../../assets/copy-button.png'

const LinkItemBlock = ({text='invationLink'}) => {

    const onPressHandler = () => {
        console.log('Ссылка скопирована')
    }

    return(
        <ItemContainerWithImg text={text} img={copyLinkItemIcon} onPressHandler={onPressHandler} />
    )
}

export default LinkItemBlock;