import { AnimatedModal } from "../../../../Pull/User";

const AnimatedErrorModal = ({text = 'User with this email already exists!'}) => {
    return(
        <AnimatedModal text={text} />
    )
}

export default AnimatedErrorModal;

