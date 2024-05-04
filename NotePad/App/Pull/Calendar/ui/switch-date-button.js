import { Pressable, Image, StyleSheet } from "react-native";

export function SwitchDateButton({side}){
    
    return (
        <Pressable side={side} style={ ({pressed}) => [{opacity: pressed ? 0.8 : 1}, styles.switchButton ]}>
            <Image side={side} style={[side === 'left' ? styles.leftSide : styles.rightSide, styles.img]} source={require('../../../../assets/switchButtonPoligon.png')} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    switchButton: {
        padding: 15,
        borderRadius: 50,

        shadowColor: 'black',
        elevation: 4,
        backgroundColor: '#F8F8F8',
        height: 50,
        width: 50,

        alignItems: 'center',
        justifyContent: 'center',
    },

    img: {
        height: 20,
        width: 20,
    },

    leftSide: {
        transform: [{scaleX: -1}],
        left: -2,
    },

    rightSide: {
        right: -2,
    },
})