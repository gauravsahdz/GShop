import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KidsCategory from '@screens/Categories/KidsCategory';
import MenCategory from '@screens/Categories/MenCategory';
import WomenCategory from '@screens/Categories/WomenCategory';
import React from 'react';

const Stack = createNativeStackNavigator();

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Men"
        component={MenCategory}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Women"
        component={WomenCategory}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Kids"
        component={KidsCategory}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
