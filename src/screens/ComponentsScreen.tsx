import React, { useState } from 'react';
import { Text, View } from 'react-native';
import HeartOutline from '../../assets/icons/Heart_Outline.svg';
import BottomSheet from '../components/BottomSheet';
import MyButton from '../components/Buttons/MyButton';
import RoundButton from '../components/Buttons/RoundButton';
import CategoryCard from '../components/Cards/CategoryCard';
import ProductCard from '../components/Cards/ProductCard';
import Chip from '../components/Chip';

const data = {
  title: 'Product 1',
  price: 100,
  image:
    'https://onlineframing.in/cdn/shop/files/shirt-mockup-concept-with-plain-clothingcopy_c5bce960-04b7-426a-bc40-a5e1f0c365e7.jpg?v=1696511824',
  rating: 4.5,
  totalRatings: 100,
  category: 'Shirt',
  oldPrice: 200,
};

const ComponentsScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onPressMe = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 10,
        gap: 10,
      }}>
      <MyButton
        title="Button"
        btnStyle={{
          backgroundColor: '#DB3022',
          height: 48,
          width: 343,
        }}
        onPress={onPressMe}
      />
      <BottomSheet isVisible={isVisible}>
        <Text>Hi there</Text>
      </BottomSheet>
      <Chip label="Chip" />
      <ProductCard props={data} />
      <CategoryCard />
      <RoundButton icon={<HeartOutline width={24} height={24} />} />
    </View>
  );
};

export default ComponentsScreen;
