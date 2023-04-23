import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, extendTheme } from 'native-base';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen'; // Add this import
import AppNavigator from './src/navigation/AppNavigator';
import EntryScreen from './src/screens/EntryScreen';

const theme = extendTheme({});

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <EntryScreen />;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {isLoggedIn ? (
          <AppNavigator />
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              initialParams={{ onLoginSuccess: handleLoginSuccess }}
            />
            <Stack.Screen
              name="SignUpScreen" // Add this screen name
              component={SignUpScreen} // Add this screen component
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
