import React from "react";
import { View, StyleSheet } from 'react-native';

import { UserLogin, UserPassword, UserSubmit, HelpTextButton, UserBackground } from "../../../../Entities/User"
import { RegAuthPlate } from "../../../../Pull/User";

const UserAuth = ({changeAuthHandler}) => {
    return (
        <UserBackground>
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
        </UserBackground>               
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