import React from 'react';
import { ScrollView } from 'react-native';
import BannerSection from '../components/Home/BannerSection';
import NewSection from '../components/Home/NewSection';

const Home = () => {
  return (
    <ScrollView>
      <BannerSection />
      <NewSection />
    </ScrollView>
  );
};

export default Home;
