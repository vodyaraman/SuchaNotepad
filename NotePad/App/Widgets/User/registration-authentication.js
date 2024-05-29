import React, { useState } from "react";
import { UserReg, UserAuth } from "../../Features/User/index";
import { UserEntrypointPlate } from "../../Pull/User";

const RegAndAuth = () => {
    const [isRegistering, setIsRegistering] = useState(true);

    const onPressHandler = (event) => {
        console.log(event.target);
    };

    /*const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };*/

    return (
        <UserEntrypointPlate>
            {isRegistering ? <UserReg onPressHandler={onPressHandler} /> : <UserAuth onPressHandler={onPressHandler} />}
        </UserEntrypointPlate>
    );
};

export default RegAndAuth;
