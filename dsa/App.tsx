import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, extendTheme } from 'native-base';
import AuthNavigator from './src/navigation/AppNavigator'; // Giriş ekranlarının olduğu navigasyon
import AppNavigator from './src/navigation/AppNavigator'; // Ana uygulama navigasyonu
import VerifyUser from './src/screens/VerifyUser';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import Temp from './src/screens/Temp';

const theme = extendTheme({});

const Stack = createStackNavigator();

const App = () => {
  const [showEntryScreen, setShowEntryScreen] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEntryScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleUserLoggedIn = (loggedIn) => {
    setUserLoggedIn(loggedIn);
  };

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {showEntryScreen ? (
            <Stack.Screen name="AuthNavigator">
              {(props) => <AuthNavigator {...props} handleUserLoggedIn={handleUserLoggedIn} />}
            </Stack.Screen>
          ) : userLoggedIn ? (
            <Stack.Screen name="AppNavigator" component={AppNavigator} />
          ) : (
            <>
              <Stack.Screen name="SignInScreen">
                {(props) => <SignInScreen {...props} handleUserLoggedIn={handleUserLoggedIn} />}
              </Stack.Screen>
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
              <Stack.Screen name="VerifyUser">
                {(props) => <VerifyUser {...props} handleUserLoggedIn={handleUserLoggedIn} />}
              </Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    // <Temp />
  );
};

export default App;
