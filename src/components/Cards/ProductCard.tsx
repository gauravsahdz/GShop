import { HeartOutlineIcon, StarIcon } from '@assets/icons';
import RoundButton from '@components/Buttons/RoundButton';
import useThemedStyles from '@hooks/useThemedStyles';
import React from 'react';
import { Image, Text, View } from 'react-native';

type ProductCardProps = {
  props: {
    title: string;
    price: number;
    image: string;
    rating: number;
    totalRatings: number;
    category: string;
    oldPrice: number;
  };
  style?: object;
};

const ProductCard = ({ props, style }: ProductCardProps) => {
  const styles: any = useThemedStyles(themedStyles);
  return (
    <View
      style={{
        ...styles.container,
        ...style,
      }}>
      <View style={styles.imageBox}>
        <Text style={styles.discountText}>
          {-(props.price / props.oldPrice) * 100}%
        </Text>
      </View>
      <Image source={{ uri: props.image }} style={styles.image} />
      <RoundButton
        icon={<HeartOutlineIcon width={24} height={24} />}
        btnStyle={styles.roundBtn}
      />
      <View style={{ padding: 3 }}>
        <View style={styles.ratingBox}>
          {Array.from({ length: 5 }, (_, i) => {
            return <StarIcon key={i} width={12} height={12} />;
          })}
          <Text style={styles.totalRating}>({props.totalRatings})</Text>
        </View>
        <Text style={styles.category}>{props.category}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Text style={{}}>{props.oldPrice}$</Text>
          <Text style={styles.priceText}>{props.price}$</Text>
        </View>
      </View>
    </View>
  );
};

const themedStyles = (theme: any) => {
  return {
    container: {
      backgroundColor: theme.colors.white,
      borderRadius: 10,
      padding: 1,
    },
    imageBox: {
      position: 'absolute',
      padding: 6,
      zIndex: 1,
      backgroundColor: theme.colors.primary,
      borderRadius: 29,
      top: 5,
      left: 5,
    },
    discountText: {
      fontFamily: 'Poppins SemiBold',
      fontSize: theme.typography.size.XS,
      color: theme.colors.white,
    },
    image: {
      width: 148,
      height: 184,
      borderRadius: 8,
    },
    roundBtn: {
      position: 'absolute',
      top: -20,
      right: 5,
      padding: 5,
      backgroundColor: theme.colors.white,
      borderRadius: 29,
    },
    ratingBox: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 1,
    },
    totalRatings: {
      fontFamily: 'Poppins Regular',
      fontSize: theme.typography.size.XXS,
      color: theme.colors.gray,
    },
    category: {
      fontFamily: 'Poppins Regular',
      fontSize: theme.typography.size.XS,
      color: theme.colors.gray,
    },
    title: {
      fontFamily: 'Poppins SemiBold',
      fontSize: theme.typography.size.M,
      color: theme.colors.black,
    },
    previousPriceText: {
      fontFamily: 'Poppins Medium',
      fontSize: theme.typography.size.S,
      color: theme.colors.gray,
      textDecorationLine: 'line-through',
    },
    priceText: {
      fontFamily: 'Poppins Medium',
      fontSize: theme.typography.size.S,
      color: theme.colors.primary,
    },
  };
};

export default ProductCard;
