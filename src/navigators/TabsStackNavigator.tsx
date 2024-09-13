import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { ChevronLeftIcon, MagnifyingGlassIcon } from '@assets/icons';
import BottomProfileIcon from '@assets/icons/bottom_account.svg';
import BottomBag from '@assets/icons/bottom_bag.svg';
import BottomFavoritesIcon from '@assets/icons/bottom_favorites.svg';
import BottomHomeIcon from '@assets/icons/bottom_home.svg';
import BottomCartIcon from '@assets/icons/bottom_shopping_cart.svg';
import Bag from '@screens/Bag';
import Categories from '@screens/Categories/Categories';
import ComponentsScreen from '@screens/ComponentsScreen';
import Home from '@screens/Home';
import Profile from '@screens/Profile';

const Tab = createBottomTabNavigator();

const TabsStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#DB3022',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          borderTopWidth: 0,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
        },
      }}>
      <Tab.Screen name="Components" component={ComponentsScreen} />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <BottomHomeIcon width={size} height={size} fill={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <BottomCartIcon width={size} height={size} fill={color} />
          ),
          headerTitleAlign: 'center',
          headerLeft: () => <ChevronLeftIcon />,
          headerRight: () => <MagnifyingGlassIcon />,
          headerLeftContainerStyle: { paddingLeft: 15 },
          headerRightContainerStyle: { paddingRight: 15 },
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarLabel: 'Bag',
          tabBarIcon: ({ color, size }) => (
            <BottomBag width={size} height={size} fill={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Profile}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <BottomFavoritesIcon width={size} height={size} fill={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <BottomProfileIcon width={size} height={size} fill={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsStackNavigator;
