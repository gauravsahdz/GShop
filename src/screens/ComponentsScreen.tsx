import { HeartOutlineIcon } from '@assets/icons';
import Bottomsheet from '@components/BottomSheet';
import MyButton from '@components/Buttons/MyButton';
import RoundButton from '@components/Buttons/RoundButton';
import CategoryCard from '@components/Cards/CategoryCard';
import ProductCard from '@components/Cards/ProductCard';
import Chip from '@components/Chip';
import useThemedStyles from '@hooks/useThemedStyles';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

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
  const styles: any = useThemedStyles(themedStyles);
  const [isVisible, setIsVisible] = useState(false);
  const onPressMe = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MyButton title="Button" btnStyle={styles.btnStyle} onPress={onPressMe} />
      <Bottomsheet isVisible={isVisible}>
        <Text>Hi there</Text>
      </Bottomsheet>
      <Chip label="Chip" />
      <ProductCard props={data} />
      <CategoryCard />
      <RoundButton icon={<HeartOutlineIcon width={24} height={24} />} />
    </ScrollView>
  );
};

const themedStyles = (theme: any) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      padding: 10,
      gap: 10,
      alignItems: 'center',
    },
    btnStyle: {
      backgroundColor: colors.primary,
      height: 48,
      width: 343,
    },
  });
};

export default ComponentsScreen;
