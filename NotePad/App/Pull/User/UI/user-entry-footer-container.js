import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { TextBetweenLine } from '../../Note';

import {heightPercentageToDP as hg, widthPercentageToDP as wd} from 'react-native-responsive-screen';

import googleButtonIcon from '@/../../../assets/google-button-icon.png';
import vkButtonIcon from '@/../../../assets/vk-button-icon.png';
import mailButtonIcon from '@/../../../assets/mail-button-icon.png';

const UserEntryFooterContainer = ({
  img1 = googleButtonIcon,
  img2 = vkButtonIcon,
  img3 = mailButtonIcon,
  onPressHandler,
}) => {
  return (
    <View style={Styles.container}>
      <View>
        <TextBetweenLine text={'or'} lineWidth="100%" />
      </View>
      <View style={Styles.imgContainer}>
        <Pressable onPress={(e) => onPressHandler(e)}>
          <Image source={img1} style={{resizeMode: 'cover',}} />
        </Pressable>
        <Pressable onPress={(e) => onPressHandler(e)}>
          <Image source={img2} />
        </Pressable>
        <Pressable onPress={(e) => onPressHandler(e)}>
          <Image source={img3} />
        </Pressable>
      </View>
    </View>
  );
};

export default UserEntryFooterContainer;

const Styles = StyleSheet.create({
  container: {
    width: '80%',
    justifyContent: 'center',
  },
  imgContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
});

