import {Pressable, Image} from 'react-native';

const SearchButton = ({onPressHandler}) => {
    return(
        <Pressable onPress={onPressHandler}>
            <Image style={{height: 25, width: 25}} source={require('@../../../assets/search-icon.png')} />  
        </Pressable>
    )
}

export default SearchButton;
