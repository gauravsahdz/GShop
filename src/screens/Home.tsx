import BannerSection from '@components/Home/BannerSection';
import Section from '@components/Home/Section';
import React from 'react';
import { ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView>
      <BannerSection />
      <Section
        title="New"
        subtitle="You’ve never seen it before!"
        actionBtnTitle="View all"
      />
      <Section
        title="Sale"
        subtitle="Super summer sale"
        actionBtnTitle="View all"
      />
    </ScrollView>
  );
};

export default Home;
