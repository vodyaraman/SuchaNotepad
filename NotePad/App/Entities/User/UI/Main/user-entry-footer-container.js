import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { TextBetweenLine } from '../../../../Pull/Note';

import googleButtonIcon from '@/../../assets/google-button-icon.png';
import vkButtonIcon from '@/../../assets/vk-button-icon.png';
import mailButtonIcon from '@/../../assets/mail-button-icon.png';

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
          <Image source={img1} />
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
    width: '50%',
    justifyContent: 'center',
  },
  imgContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
});

