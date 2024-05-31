import React, { useState } from "react";
import { UserReg, UserAuth } from "../../Features/User/index";
import { UserBackground } from "../../Entities/User";

const RegAndAuth = () => {
    const [isRegistering, setIsRegistering] = useState(true);

    const onPressHandler = () => {
        setIsRegistering(!isRegistering);
    };

    /*const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };*/

    return (
        // <UserEntrypointPlate>
        //     {isRegistering ? <UserReg onPressHandler={onPressHandler} /> : <UserAuth onPressHandler={onPressHandler} />}
        // </UserEntrypointPlate>
        <UserBackground>
            {isRegistering ? <UserReg onPressHandler={onPressHandler} /> : <UserAuth onPressHandler={onPressHandler} />}
        </UserBackground>
    );
};

export default RegAndAuth;
