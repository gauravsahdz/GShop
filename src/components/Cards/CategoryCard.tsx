import useThemedStyles from '@hooks/useThemedStyles';
import React from 'react';
import { Image, Text, View } from 'react-native';

const CategoryCard = () => {
  const styles: any = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <Image
        source={{
          uri: 'https://onlineframing.in/cdn/shop/files/shirt-mockup-concept-with-plain-clothingcopy_c5bce960-04b7-426a-bc40-a5e1f0c365e7.jpg?v=1696511824',
        }}
        style={styles.image}
      />
    </View>
  );
};

const themedStyles = (theme: any) => {
  return {
    container: {
      backgroundColor: theme.colors.white,
      borderRadius: 8,
      width: 343,
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      color: theme.colors.black,
      fontFamily: 'Poppins SemiBold',
      fontSize: theme.typography.size.L,
      marginLeft: 23,
    },
    image: {
      width: 171,
      height: 100,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
  };
};

export default CategoryCard;
