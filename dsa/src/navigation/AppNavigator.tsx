import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MarketsScreen from '../screens/MarketsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewsGeneral from '../screens/NewsGeneral';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Market" component={MarketsScreen} />
      <Tab.Screen name="Haberler" component={NewsGeneral} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    );
  
};

export default AppNavigator;
