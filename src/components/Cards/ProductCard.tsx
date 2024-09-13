import { HeartOutlineIcon, StarIcon } from '@assets/icons';
import RoundButton from '@components/Buttons/RoundButton';
import useTheme from '@hooks/useTheme';
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
  const { typography, colors } = useTheme();
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 1,
        ...style,
      }}>
      <View
        style={{
          position: 'absolute',
          padding: 6,
          zIndex: 1,
          backgroundColor: colors.primary,
          borderRadius: 29,
          top: 5,
          left: 5,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins SemiBold',
            fontSize: typography.size.XS,
            color: colors.white,
          }}>
          {-(props.price / props.oldPrice) * 100}%
        </Text>
      </View>
      <Image
        source={{ uri: props.image }}
        style={{
          width: 148,
          height: 184,
          borderRadius: 8,
        }}
      />
      <RoundButton
        icon={<HeartOutlineIcon width={24} height={24} />}
        btnStyle={{
          position: 'absolute',
          top: -20,
          right: 5,
          padding: 5,
          backgroundColor: colors.white,
          borderRadius: 29,
        }}
      />
      <View style={{ padding: 3 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
          }}>
          {Array.from({ length: 5 }, (_, i) => {
            return <StarIcon key={i} width={12} height={12} />;
          })}
          <Text
            style={{
              fontFamily: 'Poppins Regular',
              fontSize: typography.size.XXS,
              color: colors.gray,
            }}>
            ({props.totalRatings})
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins Regular',
            fontSize: typography.size.XS,
            color: colors.gray,
          }}>
          {props.category}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins SemiBold',
            fontSize: typography.size.M,
            color: colors.black,
          }}>
          {props.title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Text
            style={{
              fontFamily: 'Poppins Medium',
              fontSize: typography.size.S,
              color: colors.gray,
              textDecorationLine: 'line-through',
            }}>
            {props.oldPrice}$
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins Medium',
              fontSize: typography.size.S,
              color: colors.primary,
            }}>
            {props.price}$
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
