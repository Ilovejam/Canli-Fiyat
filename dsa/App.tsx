import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, extendTheme } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';
import EntryScreen from './src/screens/EntryScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignUpInputs from './src/components/SignUpInputs';
import LoginInputs from './src/components/LoginInputs';
import VerifyUserScreen from './src/screens/VerifyUserScreen';
import LoginStackNavigator from './src/navigation/AppNavigator';

const theme = extendTheme({});

const Stack = createStackNavigator();

const App = () => {
  // const [showSplash, setShowSplash] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(true); // Set this to true to bypass login

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSplash(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (showSplash) {
  //   return <EntryScreen />;
  // }

  // if (!isLoggedIn) {
  //   return (
  //     <NativeBaseProvider theme={theme}>
  //       <NavigationContainer>
  //         <Stack.Navigator screenOptions={{ headerShown: false }}>
  //             <Stack.Screen name="LoginStackNavigator" component={LoginStackNavigator} />
  //             <Stack.Screen name="SignUpInputs" component={SignUpInputs} />
  //             <Stack.Screen name="LoginInputs" component={LoginInputs} />
  //             <Stack.Screen name="VerifyUserScreen" component={VerifyUserScreen} />
  //           </Stack.Navigator>
  //       </NavigationContainer>
  //     </NativeBaseProvider>
  //   );
  // }

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AppNavigator" component={AppNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
