import CategoryCard from '@components/Cards/CategoryCard';
import useThemedStyles from '@hooks/useThemedStyles';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const KidsCategory = () => {
  const styles: any = useThemedStyles(themedStyles);
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

const themedStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 20,
    },
  });
};

export default KidsCategory;
