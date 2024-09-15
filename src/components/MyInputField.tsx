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
  const { colors, typography } = theme;

  return StyleSheet.create({
    textInput: {
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
      color: colors.shadow,
    },
    placeholder: {
      color: colors.gray,
    },
  });
};

export default MyInputField;
