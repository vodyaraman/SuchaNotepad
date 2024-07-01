import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const UserBackgroundPlate = ({children, firstColor = '#61ACCC', secondColor = '#94D4EF'}) => {
    const colors = [firstColor, secondColor]
    return(
        <LinearGradient
            style={styles.container}
            colors={colors}
            start={{x: -2, y: -5}}
            end={{x: 2, y: 5}}>
                {children}
        </LinearGradient>
    )
}

export default UserBackgroundPlate;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: '9%',
        paddingHorizontal: '9%',
        borderRadius: 25,
        gap: 20,
        position: 'relative',
    },
})