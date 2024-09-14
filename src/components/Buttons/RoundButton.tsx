import useThemedStyles from '@hooks/useThemedStyles';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type MyButtonProps = {
  icon: React.ReactNode;
  onPress?: () => void;
  btnStyle?: object;
};

const RoundButton = ({ icon, onPress, btnStyle }: MyButtonProps) => {
  const styles: any = useThemedStyles(themedStyles);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        style={{
          ...styles.container,
          ...btnStyle,
        }}>
        {icon}
      </View>
    </TouchableOpacity>
  );
};

const themedStyles = (theme: any) => {
  return {
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 36,
      width: 36,
      backgroundColor: theme.colors.lightGrey,
      borderRadius: 24,
      shadowColor: theme.colors.shadow,
      elevation: 3,
    },
  };
};

export default RoundButton;
