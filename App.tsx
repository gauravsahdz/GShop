import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Bag from './src/screens/Bag';
import ComponentsScreen from './src/screens/ComponentsScreen';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Components" component={ComponentsScreen} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Bag" component={Bag} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
