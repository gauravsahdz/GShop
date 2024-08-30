import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SafeAreaView, StatusBar } from 'react-native';
import ThemeProvider from './src/context/ThemeProvider';
import Tabs from './src/navigators/TabsNavigator';
import Signup from './src/screens/Signup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <StatusBar
          animated={true}
          backgroundColor="#F6F6F6"
          barStyle="dark-content"
          showHideTransition="slide"
          hidden={false}
          networkActivityIndicatorVisible={true}
        />
        <GestureHandlerRootView>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
