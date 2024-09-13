import CategoryCard from '@components/Cards/CategoryCard';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const KidsCategory = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
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
});

export default KidsCategory;
