import useThemedStyles from '@hooks/useThemedStyles';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type ChipProps = {
  label: string;
  chipStyle?: object;
  textStyle?: object;
};

const Chip = ({ label, chipStyle, textStyle }: ChipProps) => {
  const styles: any = useThemedStyles(themedStyles);
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={{
          ...styles.container,
          ...chipStyle,
        }}>
        <Text
          style={{
            ...styles.label,
            ...textStyle,
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const themedStyles = (theme: any) => {
  const { colors } = theme;
  return {
    container: {
      backgroundColor: colors.primary,
      borderRadius: 29,
      padding: 8,
      width: 100,
      alignItems: 'center',
    },
    label: {
      fontFamily: 'Poppins Regular',
      color: colors.white,
    },
  };
};

export default Chip;
