import ProductCard from '@components/Cards/ProductCard';
import useThemedStyles from '@hooks/useThemedStyles';
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

type SectionProps = {
  title: string;
  subtitle: string;
  actionBtn?: () => void;
  actionBtnTitle: string;
};

const Section = ({ title, subtitle, actionBtnTitle }: SectionProps) => {
  const styles: any = useThemedStyles(themedStyles);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.infoSection}>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.subText}>{subtitle}</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{actionBtnTitle}</Text>
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

const themedStyles = (theme: any) => {
  return StyleSheet.create({
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
      fontSize: theme.typography.size.XL,
      fontFamily: 'Poppins Bold',
      color: theme.colors.shadow,
    },
    subText: {
      fontSize: theme.typography.size.XS,
      fontFamily: 'Poppins Regular',
      color: theme.colors.gray,
    },
    btn: {
      padding: 8,
    },
    btnText: {
      fontSize: theme.typography.size.XS,
      fontFamily: 'Poppins Regular',
      color: theme.colors.black,
    },
    layout: {
      marginTop: 16,
    },
  });
};

export default Section;
