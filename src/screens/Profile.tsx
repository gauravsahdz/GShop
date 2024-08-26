import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ChevronRight from '../../assets/icons/chevron_right.svg';

const menus = [
  {
    title: 'My Orders',
    subtitle: 'Already have 12 orders',
  },
  {
    title: 'Shipping addresses',
    subtitle: '3 addresses',
  },
  {
    title: 'Payment methods',
    subtitle: 'Visa **34',
  },
  {
    title: 'Promocodes',
    subtitle: 'You have special promocodes',
  },
  {
    title: 'My reviews',
    subtitle: 'Reviews for 4 items',
  },
  {
    title: 'Settings',
    subtitle: 'Notifications, password',
  },
  {
    title: 'Log out',
    subtitle: 'Logout from the app',
    onPress: (navigation: any) => {
      navigation.navigate('Signup');
    },
  },
];

type ProfileProps = {
  navigation: any;
};

const Profile = ({ navigation }: ProfileProps) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>My Profile</Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          paddingLeft: 17,
        }}>
        <Image
          source={{
            uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
          }}
          style={{ width: 64, height: 64, borderRadius: 75 }}
        />
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins SemiBold',
              color: '#222',
            }}>
            John Doe
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins Medium',
            }}>
            john@gmail.com
          </Text>
        </View>
      </View>

      <View>
        {menus.map((menu, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderBottomColor: '#e0e0e0',
              paddingVertical: 18,
              paddingLeft: 15,
            }}
            onPress={() => {
              if (menu.onPress) {
                menu.onPress(navigation);
              }
            }}>
            <View style={styles.menu}>
              <Text style={styles.menuTitle}>{menu.title}</Text>
              <Text style={styles.menuSubtitle}>{menu.subtitle}</Text>
            </View>
            <ChevronRight width={24} height={24} fill="#666" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 34,
    marginBottom: 10,
    fontFamily: 'Poppins Bold',
    color: '#222',
    paddingLeft: 14,
  },
  menu: {},
  menuTitle: {
    fontSize: 16,
    color: '#222',
    fontFamily: 'Poppins SemiBold',
  },
  menuSubtitle: {
    fontSize: 11,
    color: '#666',
    fontFamily: 'Poppins Regular',
  },
};

export default Profile;
