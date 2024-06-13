import React, { useState } from "react";
import { UserReg, UserAuth } from "../../Features/User/index";
import { UserBackground } from "../../Entities/User";

const RegAndAuth = () => {
    const [isRegistering, setIsRegistering] = useState(true);

    const onPressHandler = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <UserBackground>
            {isRegistering ? <UserReg onPressHandler={onPressHandler} /> : <UserAuth onPressHandler={onPressHandler} />}
        </UserBackground>
    );
};

export default RegAndAuth;
