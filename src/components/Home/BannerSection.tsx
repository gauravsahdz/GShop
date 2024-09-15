import MyButton from '@components/Buttons/MyButton';
import useThemedStyles from '@hooks/useThemedStyles';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const BannerSection = () => {
  const styles: any = useThemedStyles(themedStyles);

  return (
    <View style={styles.bannerSection}>
      <Image
        source={require('@assets/images/banner.png')}
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
const themedStyles = (theme: any) => {
  const { colors, typography } = theme;
  return StyleSheet.create({
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
      backgroundColor: colors.black,
      opacity: 0.4,
    },
    overlay: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
    },
    bannerText: {
      color: colors.white,
      fontSize: typography.size['5XL'],
      fontFamily: 'Poppins Bold',
      marginBottom: 10,
    },
    btn: {
      width: 160,
      height: 36,
    },
  });
};

export default BannerSection;
