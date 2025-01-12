import React from "react";
import { View, StyleSheet } from 'react-native';

import { UserLogin, UserPassword, UserSubmit, HelpTextButton, UserBackground } from "../../../../Entities/User"
import { UserBackgroundPlate } from "../../../../Pull/User";
import { Show } from "../../../../Processes/Navigation/Rules";

const UserAuth = () => {
    return (
        <UserBackground>
            <View style={styles.mainContainer}>
                <UserBackgroundPlate>
                    <View style={styles.inputContainer}>
                        <UserLogin />
                        <UserPassword />
                    </View>
                </UserBackgroundPlate>
                <UserSubmit />
                <HelpTextButton 
                    textDesc={'Don\'t have an account yet?'} 
                    textButton={'Register'} 
                    onPressHandler={ () => { Show.Registration() } } />
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