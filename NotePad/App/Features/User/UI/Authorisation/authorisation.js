import React from "react";
import { View, StyleSheet } from 'react-native';

import { UserLogin, UserPassword, UserSubmit, HelpTextButton } from "../../../../Entities/User"
import { RegAuthPlate } from "../../../../Pull/User";

const UserAuth = ({changeAuthHandler}) => {
    return (            
        <View style={styles.mainContainer}>
            <RegAuthPlate>
                <View style={styles.inputContainer}>
                    <UserLogin/>
                    <UserPassword/>
                </View>
            </RegAuthPlate>
            <UserSubmit/>
            <HelpTextButton textDesc={'Don\'t have an account yet?'} textButton={'Register'} onPressHandler={changeAuthHandler} />
        </View>   
    );
};

export default UserAuth;

const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        gap: 15,
    },
    inputContainer:{
        gap: 40,
    },
})