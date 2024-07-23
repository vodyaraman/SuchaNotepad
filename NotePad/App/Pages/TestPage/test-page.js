import React from "react";
import { Group } from "../../Widgets";
import { GradientBackground } from "../../Pull/Note";

const TestPage = () => {
    return (
    <GradientBackground
        backgroundColor="#352C2C" 
        style={{
            padding: 15, 
            height: '100%', 
            width: '100%', 
            borderRadius: '0' 
        }}>
        <Group />
    </GradientBackground>
)};

export default TestPage;