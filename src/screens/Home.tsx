import BannerSection from '@components/Home/BannerSection';
import NewSection from '@components/Home/NewSection';
import React from 'react';
import { ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView>
      <BannerSection />
      <NewSection />
    </ScrollView>
  );
};

export default Home;
