import useTheme from '@hooks/useTheme';
import React from 'react';
import { TextInput } from 'react-native';

type MyInputFieldProps = {
  placeholder?: string;
};

const MyInputField = ({
  placeholder = 'Enter your name',
}: MyInputFieldProps) => {
  const { typography, colors } = useTheme();

  return (
    <TextInput
      style={{
        fontFamily: 'Poppins Medium',
        fontSize: typography.size.S,
        elevation: 1,
        shadowColor: colors.shadow,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
      }}
      placeholder={placeholder}
      placeholderTextColor={colors.placeholder}
    />
  );
};

export default MyInputField;
