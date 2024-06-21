import { AnimatedModal } from "../../../../Pull/User";
import { OpeningAnim } from "../../../../Pull/User";

import { useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import { clearErrors } from "../../../../Processes/Authentication";

const AnimatedErrorModal = ({text, isVisible, setIsVisible}) => {
    const dispatch = useDispatch()
    const timerIDRef = useRef(null)

    useEffect(() => {
        if (text) {
            if (timerIDRef.current) {
                clearTimeout(timerIDRef.current);
            }
        
            timerIDRef.current = setTimeout(() => {
                setIsVisible(false);
                dispatch(clearErrors())
            }, 3000);
        
            return () => {
                if (timerIDRef.current) {
                    clearTimeout(timerIDRef.current);
                }
            };
        }
    }, [text, setIsVisible]);


    return(
        <View style={styles.alertContainer}>
            <OpeningAnim isVisible={isVisible}>
                <AnimatedModal text={text} />
            </OpeningAnim>
        </View>  
        
    )
}

export default AnimatedErrorModal;

const styles = StyleSheet.create({
    alertContainer: {
        position: 'absolute', 
        zIndex: 5, 
        gap: 10, 
        width: '100%', 
        left: '10%', 
    },
})



