import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChartLine, faGlobe, faUser} from '@fortawesome/free-solid-svg-icons';
import NewsGeneral from '../screens/NewsGeneral';
import MarketsScreen from '../screens/MarketsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewsPrivate from '../screens/NewsPrivate';
import MarketPrivate from '../screens/MarketPrivate';
import SettingsScreen from '../screens/SettingsScreen';
import HamburgerMenu from '../components/HamburgerMenu';
import GeneralSettingsScreen from '../screens/GeneralSettingsScreen';
import NotificationsSettingsScreen from '../screens/NotificationsSettingsScreen';
import SecuritySettingsScreen from '../screens/SecuritySettingsScreen';
import SupportSettingsScreen from '../screens/SupportSettingsScreen';
import ContactInformationSettings from '../screens/ContactInformationSettings';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VerifyUserScreen from '../screens/VerifyUserScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();




const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};


const LoginNavigator = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginStackNavigator" component={LoginStackNavigator} />
        </Stack.Navigator>
    );
};

export default LoginNavigator;
