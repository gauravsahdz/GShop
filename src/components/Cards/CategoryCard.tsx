import useTheme from '@hooks/useTheme';
import React from 'react';
import { Image, Text, View } from 'react-native';

const CategoryCard = () => {
  const { typography } = useTheme();

  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        width: 343,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Poppins SemiBold',
          fontSize: typography.size.L,
          color: '#222222',
          marginLeft: 23,
        }}>
        Category
      </Text>
      <Image
        source={{
          uri: 'https://onlineframing.in/cdn/shop/files/shirt-mockup-concept-with-plain-clothingcopy_c5bce960-04b7-426a-bc40-a5e1f0c365e7.jpg?v=1696511824',
        }}
        style={{
          width: 171,
          height: 100,
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        }}
      />
    </View>
  );
};

export default CategoryCard;
