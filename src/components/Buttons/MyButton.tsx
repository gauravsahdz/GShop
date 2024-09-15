import useThemedStyles from '@hooks/useThemedStyles';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MyButtonProps = {
  title: string;
  btnStyle?: object;
  onPress?: () => void;
};

const MyButton = ({ title, onPress, btnStyle }: MyButtonProps) => {
  const styles: any = useThemedStyles(themedStyles);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View
        style={{
          ...styles.container,
          ...btnStyle,
        }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const themedStyles = (theme: any) => {
  const { colors, typography } = theme;

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      backgroundColor: colors.primary,
      height: 48,
    },
    title: {
      color: 'white',
      fontFamily: 'Poppins Medium',
      fontSize: typography.size.S,
    },
  });
};

export default MyButton;
