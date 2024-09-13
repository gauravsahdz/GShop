import CategoryCard from '@components/Cards/CategoryCard';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const WomenCategory = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.offerBanner}>
        <Text style={styles.offerTitle}>SUMMER SALES</Text>
        <Text style={styles.offerSubtitle}>Up to 50% off</Text>
      </View>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  offerBanner: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: '97%',
  },
  offerTitle: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins SemiBold',
  },
  offerSubtitle: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins Medium',
  },
});

export default WomenCategory;
