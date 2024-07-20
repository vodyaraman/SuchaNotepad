import React from "react";
import { Notepad } from "../../Widgets";
import { GradientBackground } from "../../Pull/Note";

const MainPage = () => {
    return (
        <GradientBackground 
            backgroundColor="#352C2C" 
            style={{
                padding: 15, 
                height: '100%', 
                width: '100%', 
                borderRadius: '0' 
            }}
        >
            <Notepad />
        </GradientBackground>
    );
};

export default MainPage;

