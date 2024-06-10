import { AnimatedModal } from "../../../../Pull/User";
import { OpeningAnim } from "../../../../Pull/User";

const AnimatedErrorModal = ({text, isVisible, setIsVisible, setMessage}) => {
    let timerID1 = null;

    if (text) {  
        if (timerID1) {
            clearTimeout(timerID1)
        }

        timerID1 = setTimeout(() => {
            setIsVisible(false)  
        }, 3000)
    }

    return(  
        <OpeningAnim isVisible={isVisible}>
            <AnimatedModal text={text} />
        </OpeningAnim>
    )
}

export default AnimatedErrorModal;



