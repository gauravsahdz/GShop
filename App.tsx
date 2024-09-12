import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ThemeProvider from '@context/ThemeProvider';
import Tabs from '@navigators/TabsNavigator';
import ForgotPassword from '@screens/ForgotPasswod';
import Login from '@screens/Login';
import Signup from '@screens/Signup';
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
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
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
