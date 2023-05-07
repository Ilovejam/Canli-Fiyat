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
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};


const NewsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NewsGeneral" component={NewsGeneral} />
      <Stack.Screen name="NewsPrivate" component={NewsPrivate} />
    </Stack.Navigator>
  );
};

const GeneralSettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="GeneralSettingsScreen" component={GeneralSettingsScreen} />
    </Stack.Navigator>
  );
};

const NotificationsSettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="NotificationsSettingsScreen" component={NotificationsSettingsScreen} />
    </Stack.Navigator>
  );
};

const SecuritySettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="SecuritySettingsScreen" component={SecuritySettingsScreen} />
    </Stack.Navigator>
  );
};

const SupportSettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="SupportSettingsScreen" component={SupportSettingsScreen} />
    </Stack.Navigator>
  );
};

const ContactInformationSettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="ContactInformationSettings" component={ContactInformationSettings} />
    </Stack.Navigator>
  );
};



const MarketsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MarketsScreen" component={MarketsScreen} />
      <Stack.Screen name="MarketPrivate" component={MarketPrivate} />
    </Stack.Navigator>
  );
};



const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginStackNavigator" component={LoginStackNavigator} />
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="GeneralSettingsScreen" component={GeneralSettingsScreen} />
      <Stack.Screen name="NotificationsSettingsScreen" component={NotificationsSettingsScreen} />
      <Stack.Screen name="SecuritySettingsScreen" component={SecuritySettingsScreen} />
      <Stack.Screen name="SupportSettingsScreen" component={SupportSettingsScreen} />
      <Stack.Screen name="ContactInformationSettings" component={ContactInformationSettings} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Haberler') {
            return <FontAwesomeIcon icon={faGlobe} />;
          } else if (route.name === 'Piyasalar') {
            return <FontAwesomeIcon icon={faChartLine} />;
          } else if (route.name === 'Profile') {
            return <FontAwesomeIcon icon={faUser} />;
          } else if (route.name === 'SettingsScreen') {
            return <FontAwesomeIcon icon={faUser} />;
          }
        },
      })}
      tabBarOptions={{
        backgroundColor: 'transparent',
      }}>
      <Tab.Screen name="Haberler" component={NewsStackNavigator} />
      <Tab.Screen name="Piyasalar" component={MarketsStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
