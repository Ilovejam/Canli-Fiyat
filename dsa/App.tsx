import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { NativeBaseProvider, extendTheme } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';

const theme = extendTheme({});

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
