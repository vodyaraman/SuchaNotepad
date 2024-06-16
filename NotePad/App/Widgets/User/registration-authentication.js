import React, { useState } from "react";
import { UserReg, UserAuth, UserMailCode } from "../../Features/User/index";
import { UserBackground } from "../../Entities/User";

const RegAndAuth = () => {
    // const [isRegistering, setIsRegistering] = useState(false);
    const [currentWindow, setCurrentWindow] = useState(<UserReg MailCodeWindow={toEmailCode} changeAuthHandler={toLogin} />)

    // const switchAuth = () => {
    //     setIsRegistering(!isRegistering);
    // };
    function toRegister(){
        setCurrentWindow(<UserReg MailCodeWindow={toEmailCode} changeAuthHandler={toLogin} />)
    }
    function toLogin(){
        setCurrentWindow(<UserAuth changeAuthHandler={toRegister} />)
    }
    function toEmailCode(){
        setCurrentWindow(<UserMailCode />)
    }

    return (
        <UserBackground>
            {currentWindow}
        </UserBackground>
    );
};

export default RegAndAuth;
