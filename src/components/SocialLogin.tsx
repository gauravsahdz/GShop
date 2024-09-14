import { FacebookIcon, GoogleIcon } from '@assets/icons';
import { constantValues } from '@constants/constantValues';
import useThemedStyles from '@hooks/useThemedStyles';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type SocialLoginProps = {
  title?: string;
};

const SocialLogin = ({
  title = 'Or login with social account',
}: SocialLoginProps) => {
  const styles: any = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconBox}>
        <TouchableOpacity
          activeOpacity={constantValues.touchableOpacity}
          style={styles.icons}>
          <GoogleIcon />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={constantValues.touchableOpacity}
          style={styles.icons}>
          <FacebookIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const themedStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      gap: 12,
    },
    title: {
      textAlign: 'center',
      color: theme.colors.shadow,
      fontFamily: 'Poppins Medium',
      fontSize: theme.typography.size.S,
    },
    iconBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 16,
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.white,
      paddingHorizontal: 34,
      paddingVertical: 28,
      borderRadius: 24,
      shadowColor: theme.colors.shadow,
      elevation: 0.5,
    },
  });
};

export default SocialLogin;
