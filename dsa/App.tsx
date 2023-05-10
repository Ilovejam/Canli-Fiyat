import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, extendTheme } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginStackNavigator from './src/navigation/AppNavigator';
import Prices from './src/screens/Prices';
import NewsGeneral from './src/screens/NewsGeneral';


const theme = extendTheme({});

const Stack = createStackNavigator();

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleAuthentication = (status: boolean) => {
  //   setIsLoggedIn(status);
  // };

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AppNavigator" component={AppNavigator} />

          {/* {isLoggedIn ? (
            <Stack.Screen name="AppNavigator" component={AppNavigator} />
          ) : (
            <Stack.Screen name="LoginStackNavigator">
              {(props) => <SignInScreen {...props} handleAuthentication={handleAuthentication} />}
            </Stack.Screen>
          )} */}
        </Stack.Navigator>
      </NavigationContainer>
  </NativeBaseProvider>
    // <Prices />
  );
};

export default App;
