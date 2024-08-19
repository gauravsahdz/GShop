import React, { useState } from 'react';
import { Text, View } from 'react-native';
import BottomSheet from '../components/BottomSheet';
import Chip from '../components/Chip';
import MyButton from '../components/MyButton';

const ComponentsScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onPressMe = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 10,
      }}>
      <MyButton
        title="Button"
        btnStyle={{
          backgroundColor: '#DB3022',
          height: 48,
          width: 343,
        }}
        onPress={onPressMe}
      />
      <BottomSheet isVisible={isVisible}>
        <Text>Hi there</Text>
      </BottomSheet>
      <Chip label="Chip" />
    </View>
  );
};

export default ComponentsScreen;
