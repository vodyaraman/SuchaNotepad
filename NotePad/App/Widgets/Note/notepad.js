import React from "react";
import { StyleSheet, Text } from 'react-native';
import { CustomText, NotePlate, SmallUnderplate, MainWidgetPlate } from '../../Pull/Note/index';
import { NoteUser } from '../../Entities/User/index';


/*  <SwipeButton side='left' img={require('../../assets/swipeGroupButton.png')} />
      <SwipeButton side='right' img={require('./assets/swipeSettingsButton.png')} />
      <TaskButton  /> */

const Notepad = () => {
    return (
    <MainWidgetPlate style = { styles.NotepadStyle}>
        <NotePlate 
            leftColor="#9CFFF3" 
            rightColor="#A2EFE6" 
            height={60} 
            leftSlot={<NoteUser />}
            rightSlot={<CustomText text="Длинный заголовок статьи"  textColor="#121010"/>}
            bottomSlot={
                <SmallUnderplate>
                    <Text style={styles.Text}>7/10</Text>
                </SmallUnderplate>
            }/>
        <NotePlate 
            leftColor="#FDFF9C" 
            rightColor="#E9EFA2" 
            height={60} 
            leftSlot={<NoteUser />}
            rightSlot={<CustomText text="Не забыть поесть"  textColor="#121010"/>}
            bottomSlot={
                <SmallUnderplate>
                    <Text style={styles.Text}>15:45</Text>
                </SmallUnderplate>
            }/>
        <NotePlate 
            leftColor="#D4FF9C" 
            rightColor="#CDEFA2" 
            height={60} 
            leftSlot={<NoteUser />}
            rightSlot={<CustomText text="Моё расписание"  textColor="#121010"/>}
            bottomSlot={
                <SmallUnderplate>
                    <Text style={styles.Text}>8am - 9pm</Text>
                </SmallUnderplate>
            }/>
    </MainWidgetPlate>
)};

export default Notepad;

const styles = StyleSheet.create({
    NotepadStyle: {
        zIndex: 1,
        top: "10%",
        paddingTop: "10%",
    },
    Text: {
        fontFamily: "Montserrata-bold",
        fontWeight: 500,
        fontSize: 11,
        color: 'black',
        justifyContent: 'center',
      },
});