import useTheme from '@hooks/useTheme';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type ChipProps = {
  label: string;
  chipStyle?: object;
  textStyle?: object;
};

const Chip = ({ label, chipStyle, textStyle }: ChipProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={{
          backgroundColor: colors.primary,
          borderRadius: 29,
          padding: 8,
          width: 100,
          alignItems: 'center',
          ...chipStyle,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins Regular',
            color: 'white',
            ...textStyle,
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chip;
