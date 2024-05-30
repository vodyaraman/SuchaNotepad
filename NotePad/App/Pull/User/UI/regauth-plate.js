import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const RegAuthPlate = ({children, firstColor = '#61ACCC', secondColor = '#94D4EF'}) => {
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

export default RegAuthPlate;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 55,
        paddingHorizontal: 45,
    },
})