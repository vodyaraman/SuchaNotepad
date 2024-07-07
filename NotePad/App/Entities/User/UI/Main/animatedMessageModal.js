import { AnimatedModal } from "../../../../Pull/User";
import { OpeningAnim } from "../../../../Pull/User";

import { useRef, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import { clearErrors } from "../../../../Processes/Authentication";

const AnimatedMessageModal = ({text, isVisible, setIsVisible, modalType='error'}) => {
    const dispatch = useDispatch()
    const timerIDRef = useRef(null)
    const [type] = useState(modalType)

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
        
        <OpeningAnim isVisible={isVisible}>
            <AnimatedModal text={text} textColor={type === 'error' ? '#EC7171' : '#7171EC'}  />
        </OpeningAnim>
         
        
    )
}

export default AnimatedMessageModal;




