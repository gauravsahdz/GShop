import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type MyButtonProps = {
  title: string;
  btnStyle?: object;
  onPress?: () => void;
};

const MyButton = ({ title, onPress, btnStyle }: MyButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          ...btnStyle,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins Medium',
            fontSize: 14,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
