import { LinearGradient } from "expo-linear-gradient";

const MainRegAuthPlate = ({children}) => {
    const colors = ['#61ACCC', '#94D4EF']
    return(
        <LinearGradient
            colors={colors}
            start={{x: -2, y: -5}}
            end={{x: 2, y: 5}}>
                {children}
        </LinearGradient>
    )
}

export default MainRegAuthPlate;