// Здесь емайл для входа в аккаунт
import { InputText } from "../../../../Pull/Note";
import { View, Image, StyleSheet } from 'react-native';

import emailIcon from '@../../../assets/email-input-icon.png'

const UserLogin = ({onChangeHandler}) => {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image source={emailIcon} />
          </View>
          <InputText onChangeText={onChangeHandler} color = {'white'} placeholder = {"Email:"} multiline = {false} />
        </View> 
    )
  };
  
  export default UserLogin;

  const styles = StyleSheet.create({
    mainContainer:{
      backgroundColor: 'red',
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
    },
    imageContainer: {

    }
  })
  