import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import NewsGeneral from '../screens/NewsGeneral';
import MarketsScreen from '../screens/MarketsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewsPrivate from '../screens/NewsPrivate';
import MarketPrivate from '../screens/MarketsPrivate';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const NewsStack = createStackNavigator();
const MarketStack = createStackNavigator();

const NewsStackNavigator = () => (
  <NewsStack.Navigator screenOptions={{ headerShown: false }}>
    <NewsStack.Screen name="NewsGeneral" component={NewsGeneral} />
    <NewsStack.Screen name="NewsPrivate" component={NewsPrivate} />
  </NewsStack.Navigator>
);

const MarketStackNavigator = () => (
  <MarketStack.Navigator screenOptions={{ headerShown: false }}>
    <MarketStack.Screen name="MarketsScreen" component={MarketsScreen} />
    <MarketStack.Screen name="MarketPrivate" component={MarketPrivate} />
  </MarketStack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Haberler') {
            iconName = 'https://www.vhv.rs/dpng/d/244-2448537_spartan-png-world-wide-web-icon-png-transparent.png';
          } else if (route.name === 'Piyasalar') {
            iconName = 'https://www.vhv.rs/dpng/d/539-5395361_transparent-graph-icon-png-business-graph-icon-png.png';
          } else if (route.name === 'Profile') {
            iconName = 'https://www.vhv.rs/dpng/d/532-5323185_person-icon-clipart-hd-png-download.png';
          }

          return <Image source={{ uri: iconName }} style={{ width: size, height: size }} />;
        },
      })}
    >
      <Tab.Screen name="Piyasalar" component={MarketStackNavigator} />
      <Tab.Screen name="Haberler" component={NewsStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
