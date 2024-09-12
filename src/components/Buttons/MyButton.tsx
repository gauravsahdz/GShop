import useTheme from '@hooks/useTheme';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type MyButtonProps = {
  title: string;
  btnStyle?: object;
  onPress?: () => void;
};

const MyButton = ({ title, onPress, btnStyle }: MyButtonProps) => {
  const { typography, colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          backgroundColor: colors.primary,
          height: 48,
          ...btnStyle,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins Medium',
            fontSize: typography.size.S,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
