import React, { useState } from "react";
import { UserReg, UserAuth } from "../../Features/User/index";
import { UserBackground } from "../../Entities/User";

const RegAndAuth = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    const switchAuth = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <UserBackground>
            {isRegistering ? <UserReg changeAuthHandler={switchAuth} /> : <UserAuth changeAuthHandler={switchAuth} />}
        </UserBackground>
    );
};

export default RegAndAuth;
