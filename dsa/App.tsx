import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, extendTheme } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginStackNavigator from './src/navigation/AppNavigator';
import Prices from './src/screens/Prices';
import NewsGeneral from './src/screens/NewsGeneral';
import EntryScreen from './src/screens/EntryScreen';


const theme = extendTheme({});

const Stack = createStackNavigator();

const App = () => {
  const [showEntryScreen, setShowEntryScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEntryScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {showEntryScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="EntryScreen" component={EntryScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AppNavigator" component={AppNavigator} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
