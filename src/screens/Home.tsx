import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../components/BottomSheet';
import MyButton from '../components/MyButton';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onPressMe = () => {
    setIsVisible(!isVisible);
  };

  return (
    <GestureHandlerRootView>
      <MyButton
        title="Press me"
        btnStyle={{
          backgroundColor: '#DB3022',
          height: 48,
          width: 343,
        }}
        onPress={onPressMe}
      />
      <BottomSheet isVisible={isVisible} />
    </GestureHandlerRootView>
  );
};

export default Home;
