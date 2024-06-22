import { UserEntryMainTitle, UserEntryFooterContainer, UserEntrypointPlate } from "../../../../Pull/User";
import { View, StyleSheet } from "react-native";

const UserBackground = ({children}) => {
    return(
        <View style={styles.backgroundContainer}>
            <UserEntrypointPlate>
                <UserEntryMainTitle />
                {children}
                <UserEntryFooterContainer/>
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

