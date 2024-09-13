import { ChevronRightIcon } from '@assets/icons';
import useTheme from '@hooks/useTheme';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type MenuItem = {
  title: string;
  subtitle: string;
  onPress?: (navigation: any) => void;
};

const menus: MenuItem[] = [
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
    onPress: navigation => {
      navigation.navigate('Auth', { screen: 'Login' });
    },
  },
];

type ProfileProps = {
  navigation: any;
};

const Profile = ({ navigation }: ProfileProps) => {
  const { typography, colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    headerText: {
      fontSize: typography.size['3XL'],
      marginBottom: 10,
      fontFamily: 'Poppins Bold',
      color: colors.shadow,
      paddingLeft: 14,
    },
    menuTitle: {
      fontSize: typography.size.M,
      color: colors.shadow,
      fontFamily: 'Poppins SemiBold',
    },
    menuSubtitle: {
      fontSize: typography.size.XS,
      color: '#666',
      fontFamily: 'Poppins Regular',
    },
    menu: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: '#e0e0e0',
      paddingVertical: 18,
      paddingLeft: 15,
    },
  });

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
              fontSize: typography.size.L,
              fontFamily: 'Poppins SemiBold',
              color: colors.shadow,
            }}>
            John Doe
          </Text>
          <Text
            style={{
              fontSize: typography.size.S,
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
            style={styles.menu}
            onPress={() => {
              if (menu.onPress) {
                menu.onPress(navigation);
              }
            }}>
            <View>
              <Text style={styles.menuTitle}>{menu.title}</Text>
              <Text style={styles.menuSubtitle}>{menu.subtitle}</Text>
            </View>
            <ChevronRightIcon width={24} height={24} fill="#666" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;
