import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type MyButtonProps = {
  icon: React.ReactNode;
  onPress?: () => void;
  btnStyle?: object;
};

const RoundButton = ({ icon, onPress, btnStyle }: MyButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 36,
          width: 36,
          backgroundColor: 'white',
          borderRadius: 24,
          shadowColor: '#000',
          elevation: 3,
          ...btnStyle,
        }}>
        {icon}
      </View>
    </TouchableOpacity>
  );
};

export default RoundButton;
