import { AnimatedModal } from "../../../../Pull/User";
import { OpeningAnim } from "../../../../Pull/User";

const AnimatedErrorModal = ({text, isVisible}) => {
    return(
        <OpeningAnim isVisible={isVisible}>
            <AnimatedModal text={text} />
        </OpeningAnim>
    )
}

export default AnimatedErrorModal;

