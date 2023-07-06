import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartLine, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
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
import PricesScreen from '../screens/Prices';
import VerifyUser from '../screens/VerifyUser';

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
      <Stack.Screen name="VerifyUser" component={VerifyUser} />
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
      }}
    >
      <Stack.Screen name="PricesScreen" component={PricesScreen} />
      <Stack.Screen name="MarketPrivate" component={MarketPrivate} />
    </Stack.Navigator>
  );
};

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <AuthStack.Screen name="VerifyUser" component={VerifyUser} />

      
    </AuthStack.Navigator>
  );
};


const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="GeneralSettingsScreen" component={GeneralSettingsScreen} />
      <Stack.Screen name="NotificationsSettingsScreen" component={NotificationsSettingsScreen} />
      <Stack.Screen name="SecuritySettingsScreen" component={SecuritySettingsScreen} />
      <Stack.Screen name="SupportSettingsScreen" component={SupportSettingsScreen} />
      <Stack.Screen name="ContactInformationSettings" component={ContactInformationSettings} />
      <Stack.Screen name="NewsStackNavigator" component={NewsStackNavigator} /> 
      <Stack.Screen name="MarketsStackNavigator" component={MarketsStackNavigator} />

    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconSize = focused ? 22 : 18; // 'focused' propuna bağlı olarak simge boyutunu değiştirin

          if (route.name === 'Piyasalar') {
            return <FontAwesomeIcon icon={faChartLine} color={color} size={iconSize} />;
          } else if (route.name === 'Haberler') {
            return <FontAwesomeIcon icon={faGlobe} color={color} size={iconSize} />;
          } else if (route.name === 'Profile') {
            return <FontAwesomeIcon icon={faUser} color={color} size={iconSize} />;
          } else if (route.name === 'NewsGeneral') {
            return <FontAwesomeIcon icon={faGlobe} color={color} size={iconSize} />; 
          } else if (route.name === 'PricesScreen') {
            return <FontAwesomeIcon icon={faChartLine} color={color} size={iconSize} />; 
          }
        },
      })}
    >
      <Tab.Screen name="Piyasalar" component={MarketsStackNavigator} />
      <Tab.Screen name="Haberler" component={NewsStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* <Tab.Screen name="NewsGeneral" component={NewsGeneral} /> 
      <Tab.Screen name="PricesScreen" component={PricesScreen} />  */}
    </Tab.Navigator>
  );
};


export default AppNavigator;
