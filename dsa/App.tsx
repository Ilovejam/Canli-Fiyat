/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import LoginScreen from './src/screens/LoginScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import SigUpScreen from './src/screens/SignUpScreen';
//import DasboardScreen from './src/screens/DasboardScreen';
import EntryScreen from './src/screens/EntryScreen';
import NewsGeneral from './src/screens/NewsGeneral';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    //<LoginScreen />
    //<SigUpScreen />
    //<DasboardScreen/>
    //<EntryScreen />
    <NewsGeneral />

  );
  
}

const styles = StyleSheet.create({
  root : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    fontFamily: 'Poppins-Regular',
  }
});

export default App;
