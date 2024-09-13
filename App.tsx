import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ThemeProvider from '@context/ThemeProvider';
import AuthStackNavigator from '@navigators/AuthStackNavigator';
import CategoriesStackNavigator from '@navigators/CategoriesStackNavigator';
import TabsStackNavigator from '@navigators/TabsStackNavigator';
import { SafeAreaView, StatusBar } from 'react-native';

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
                component={TabsStackNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Categories"
                component={CategoriesStackNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Auth"
                component={AuthStackNavigator}
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
