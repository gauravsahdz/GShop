import useThemedStyles from '@hooks/useThemedStyles';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type MyInputFieldProps = {
  placeholder?: string;
};

const MyInputField = ({
  placeholder = 'Enter your name',
}: MyInputFieldProps) => {
  const styles: any = useThemedStyles(themedStyles);

  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={styles.placeholder.color}
    />
  );
};

const themedStyles = (theme: any) => {
  return StyleSheet.create({
    textInput: {
      fontFamily: 'Poppins Medium',
      fontSize: theme.typography.size.S,
      elevation: 1,
      shadowColor: theme.colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      backgroundColor: theme.colors.white,
      borderRadius: 10,
      padding: 10,
    },
    placeholder: {
      color: theme.colors.gray,
    },
  });
};

export default MyInputField;
