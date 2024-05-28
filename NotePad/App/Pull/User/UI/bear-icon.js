import { Image } from 'react-native'
import bearIcon from '@/../../assets/panda-icon.png'

const BearIcon = ({height, width}) => {
    return(
        <Image source={bearIcon} style={{height: height, width: width}} />
    )
}

export default BearIcon;