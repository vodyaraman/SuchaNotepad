import { UserEntryMainTitle, UserEntryFooterContainer, UserEntrypointPlate } from "../../../../Pull/User";
import { View, StyleSheet } from "react-native";

const UserBackground = ({children, onPressHandler}) => {
    return(
        <View style={styles.backgroundContainer}>
            <UserEntrypointPlate>
                <UserEntryMainTitle />
                {children}
                <UserEntryFooterContainer onPressHandler={onPressHandler} />
            </UserEntrypointPlate>
        </View>
    )
}

export default UserBackground;

const styles = StyleSheet.create({
    backgroundContainer:{
        height: '100%',
        width: '100%',
    },
})

