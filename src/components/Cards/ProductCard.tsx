import React from 'react';
import { Image, Text, View } from 'react-native';
import HeartOutline from '../../../assets/icons/Heart_Outline.svg';
import StarIcon from '../../../assets/icons/Star.svg';
import RoundButton from '../Buttons/RoundButton';

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
};

const ProductCard = ({ props }: ProductCardProps) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 1,
      }}>
      <View
        style={{
          position: 'absolute',
          padding: 6,
          zIndex: 1,
          backgroundColor: '#DB3022',
          borderRadius: 29,
          top: 5,
          left: 5,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins SemiBold',
            fontSize: 11,
            color: 'white',
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
        icon={<HeartOutline width={24} height={24} />}
        btnStyle={{
          position: 'absolute',
          top: -20,
          right: 5,
          padding: 5,
          backgroundColor: 'white',
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
              fontSize: 10,
              color: '#9B9B9B',
            }}>
            ({props.totalRatings})
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins Regular',
            fontSize: 11,
            color: '#9B9B9B',
          }}>
          {props.category}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins SemiBold',
            fontSize: 16,
            color: '#222222',
          }}>
          {props.title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Text
            style={{
              fontFamily: 'Poppins Medium',
              fontSize: 14,
              color: '#9B9B9B',
              textDecorationLine: 'line-through',
            }}>
            {props.oldPrice}$
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins Medium',
              fontSize: 14,
              color: '#DB3022',
            }}>
            {props.price}$
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
