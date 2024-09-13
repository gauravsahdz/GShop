import ProductCard from '@components/Cards/ProductCard';
import useTheme from '@hooks/useTheme';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const data = [
  {
    title: 'Product 1',
    price: 100,
    image:
      'https://onlineframing.in/cdn/shop/files/shirt-mockup-concept-with-plain-clothingcopy_c5bce960-04b7-426a-bc40-a5e1f0c365e7.jpg?v=1696511824',
    rating: 4.5,
    totalRatings: 100,
    category: 'Shirt',
    oldPrice: 200,
  },
  {
    title: 'Product 1',
    price: 100,
    image:
      'https://onlineframing.in/cdn/shop/files/shirt-mockup-concept-with-plain-clothingcopy_c5bce960-04b7-426a-bc40-a5e1f0c365e7.jpg?v=1696511824',
    rating: 4.5,
    totalRatings: 100,
    category: 'Shirt',
    oldPrice: 200,
  },
  {
    title: 'Product 1',
    price: 100,
    image:
      'https://onlineframing.in/cdn/shop/files/shirt-mockup-concept-with-plain-clothingcopy_c5bce960-04b7-426a-bc40-a5e1f0c365e7.jpg?v=1696511824',
    rating: 4.5,
    totalRatings: 100,
    category: 'Shirt',
    oldPrice: 200,
  },
  {
    title: 'Product 1',
    price: 100,
    image:
      'https://onlineframing.in/cdn/shop/files/shirt-mockup-concept-with-plain-clothingcopy_c5bce960-04b7-426a-bc40-a5e1f0c365e7.jpg?v=1696511824',
    rating: 4.5,
    totalRatings: 100,
    category: 'Shirt',
    oldPrice: 200,
  },
  {
    title: 'Product 1',
    price: 100,
    image:
      'https://onlineframing.in/cdn/shop/files/shirt-mockup-concept-with-plain-clothingcopy_c5bce960-04b7-426a-bc40-a5e1f0c365e7.jpg?v=1696511824',
    rating: 4.5,
    totalRatings: 100,
    category: 'Shirt',
    oldPrice: 200,
  },
];

const NewSection = () => {
  const { typography, colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    infoSection: {
      flex: 1,
    },
    headerText: {
      fontSize: typography.size.XL,
      fontFamily: 'Poppins Bold',
      color: colors.shadow,
    },
    subText: {
      fontSize: typography.size.XS,
      fontFamily: 'Poppins Regular',
      color: colors.gray,
    },
    btn: {
      padding: 8,
    },
    btnText: {
      fontSize: typography.size.XS,
      fontFamily: 'Poppins Regular',
      color: colors.black,
    },
    layout: {
      marginTop: 16,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.infoSection}>
          <Text style={styles.headerText}>New Section</Text>
          <Text style={styles.subText}>You&apos;ve never seen it before!</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.layout}>
        {data.map((item, index) => {
          return (
            <ProductCard key={index} props={item} style={{ marginRight: 10 }} />
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default NewSection;
