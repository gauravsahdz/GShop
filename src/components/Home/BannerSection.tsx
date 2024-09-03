import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import useTheme from '../../hooks/useTheme';
import MyButton from '../Buttons/MyButton';

const BannerSection = () => {
  const { typography } = useTheme();

  const styles = StyleSheet.create({
    bannerSection: {
      position: 'relative',
    },
    bannerImage: {
      width: '100%',
    },
    gradientOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '30%',
      backgroundColor: 'black',
      opacity: 0.4,
    },
    overlay: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
    },
    bannerText: {
      color: '#fff',
      fontSize: typography.size['5XL'],
      fontFamily: 'Poppins Bold',
      marginBottom: 10,
    },
    btn: {
      width: 160,
      height: 36,
    },
  });
  return (
    <View style={styles.bannerSection}>
      <Image
        source={require('../../../assets/images/banner.png')}
        style={styles.bannerImage}
      />
      <View style={styles.gradientOverlay} />
      <View style={styles.overlay}>
        <Text style={styles.bannerText}>Fashion Sale</Text>
        <MyButton title="Check" btnStyle={styles.btn} />
      </View>
    </View>
  );
};

export default BannerSection;
