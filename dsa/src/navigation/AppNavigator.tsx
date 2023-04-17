import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsGeneral from '../screens/NewsGeneral';
import MarketsScreen from '../screens/MarketsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

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
      <Tab.Screen
        name="Haberler"
        component={NewsGeneral}
      />
      <Tab.Screen
        name="Piyasalar"
        component={MarketsScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
