import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import KidsCategory from './KidsCategory';
import MenCategory from './MenCategory';
import WomenCategory from './WomenCategory';

const TABS = ['Women', 'Men', 'Kids'];
const screenWidth = Dimensions.get('window').width;

const Categories = () => {
  const navigation: any = useNavigation();
  const [activeTab, setActiveTab] = useState<string>('Women');

  const indicatorPosition = useSharedValue(0);

  const handleNavigate = (screen: string, index: number) => {
    setActiveTab(screen);
    indicatorPosition.value = withTiming(index * (screenWidth / TABS.length), {
      duration: 300,
    });
    navigation.navigate('Categories', { screen: screen });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: indicatorPosition.value }],
    };
  });

  const renderContent = () => {
    switch (activeTab) {
      case 'Women':
        return <WomenCategory />;
      case 'Men':
        return <MenCategory />;
      case 'Kids':
        return <KidsCategory />;
      default:
        return <WomenCategory />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {TABS.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            style={styles.button}
            onPress={() => handleNavigate(tab, index)}>
            <Text
              style={[
                styles.buttonText,
                activeTab === tab && styles.activeText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Animated.View style={[styles.indicator, animatedStyle]} />
      <View style={styles.content}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  button: {
    width: screenWidth / TABS.length,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins SemiBold',
  },
  activeText: {
    color: 'red',
  },
  indicator: {
    position: 'absolute',
    top: 50,
    height: 3,
    width: screenWidth / TABS.length,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default Categories;
