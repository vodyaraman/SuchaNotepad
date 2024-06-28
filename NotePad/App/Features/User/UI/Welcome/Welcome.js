import { UserBackgroundPlate } from "../../../../Pull/User";
import { CustomText } from "../../../../Pull/Note";
import { WelcomeButton } from "../../../../Entities/User";

import { heightPercentageToDP as hg } from "react-native-responsive-screen";

import {View, StyleSheet} from 'react-native';

const Welcome = () => {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <UserBackgroundPlate>
                    <CustomText
                        textColor={'white'}
                        text={'Регистрация прошла успешно! Добро пожаловать, пройдите небольшое обучение о том, как эффективно использовать это приложение! '}
                        numberOfLines={5}
                        textAlign={'center'}
                        fontSize={hg('2%')} />
                </UserBackgroundPlate>
            </View>
            <View style={styles.buttonsContainer}>
                <WelcomeButton text={'Пройти обучение'} />
                <WelcomeButton text={'Продолжить без обучения'}/>
            </View>
        </View>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    mainContainer:{
        width: '80%',
        margin: [0, 'auto'],
        justifyContent: 'center',
    },
    textContainer:{
        marginBottom: 20,
    },
    buttonsContainer:{
        gap: 10,
    }
})