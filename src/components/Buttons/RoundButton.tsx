import useTheme from '@hooks/useTheme';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type MyButtonProps = {
  icon: React.ReactNode;
  onPress?: () => void;
  btnStyle?: object;
};

const RoundButton = ({ icon, onPress, btnStyle }: MyButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 36,
          width: 36,
          backgroundColor: colors.lightGrey,
          borderRadius: 24,
          shadowColor: colors.shadow,
          elevation: 3,
          ...btnStyle,
        }}>
        {icon}
      </View>
    </TouchableOpacity>
  );
};

export default RoundButton;
