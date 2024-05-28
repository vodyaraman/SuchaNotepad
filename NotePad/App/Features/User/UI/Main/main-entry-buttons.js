import { UserEntryLoginButton, UserEntryRegisterButton } from "../../../../Entities/User"
import { View, StyleSheet } from 'react-native';

const MainEntryButtons = () => {
    const onPressHandler = (event) => {
        console.log(event.target)
    }

    return(
        <View style={Styles.buttonsContainer}>
            <View style={{marginBottom: 15}}>
                <UserEntryLoginButton onPressHandler={onPressHandler} />
            </View>
            
            <View>
                <UserEntryRegisterButton onPressHandler={onPressHandler} />
            </View>
        </View>
    )
}

export default MainEntryButtons;

const Styles = StyleSheet.create({
    buttonsContainer:{
        width: '60%',
    },
})