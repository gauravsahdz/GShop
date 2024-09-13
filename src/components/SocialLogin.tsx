import { FacebookIcon, GoogleIcon } from '@assets/icons';
import { constantValues } from '@constants/constantValues';
import useTheme from '@hooks/useTheme';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type SocialLoginProps = {
  title?: string;
};

const SocialLogin = ({
  title = 'Or login with social account',
}: SocialLoginProps) => {
  const { colors, typography } = useTheme();
  return (
    <View
      style={{
        gap: 12,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: colors.shadow,
          fontFamily: 'Poppins Medium',
          fontSize: typography.size.S,
        }}>
        {title}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 16,
        }}>
        <TouchableOpacity
          activeOpacity={constantValues.touchableOpacity}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
            paddingHorizontal: 34,
            paddingVertical: 28,
            borderRadius: 24,
            shadowColor: colors.shadow,
            elevation: 0.5,
          }}>
          <GoogleIcon />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={constantValues.touchableOpacity}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
            paddingHorizontal: 34,
            paddingVertical: 28,
            borderRadius: 24,
            shadowColor: colors.shadow,
            elevation: 0.5,
          }}>
          <FacebookIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialLogin;
