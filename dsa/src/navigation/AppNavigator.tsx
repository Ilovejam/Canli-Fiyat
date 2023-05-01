import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsGeneral from '../screens/NewsGeneral';
import { createStackNavigator } from '@react-navigation/stack';
import MarketsScreen from '../screens/MarketsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image } from 'react-native';
import MarketPrivate from '../screens/MarketPrivate';
import NewsPrivate from '../screens/NewsPrivate';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NewsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsGeneral" component={NewsGeneral} />
      <Stack.Screen name="NewsPrivate" component={NewsPrivate} />
    </Stack.Navigator>
  );
};


const MarketsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MarketsScreen" component={MarketsScreen} />
      <Stack.Screen name="MarketPrivate" component={MarketPrivate} />
    </Stack.Navigator>
  );
};

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
      tabBarOptions={{
        backgroundColor: 'transparent',
      }}
    >
      <Tab.Screen
        name="Haberler"
        component={NewsStackNavigator}
      />
      <Tab.Screen
        name="Piyasalar"
        component={MarketsStackNavigator}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
