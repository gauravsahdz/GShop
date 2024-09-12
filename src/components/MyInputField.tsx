import useTheme from '@hooks/useTheme';
import React from 'react';
import { TextInput } from 'react-native';

type MyInputFieldProps = {
  placeholder?: string;
};

const MyInputField = ({
  placeholder = 'Enter your name',
}: MyInputFieldProps) => {
  const { typography } = useTheme();

  return (
    <TextInput
      style={{
        fontFamily: 'Poppins Medium',
        fontSize: typography.size.S,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
      }}
      placeholder={placeholder}
      placeholderTextColor="#A0A0A0"
    />
  );
};

export default MyInputField;
