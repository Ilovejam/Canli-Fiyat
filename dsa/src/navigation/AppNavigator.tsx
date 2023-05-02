import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsGeneral from '../screens/NewsGeneral';
import MarketsScreen from '../screens/MarketsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChartLine, faGlobe, faUser} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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
          }
        },
      })}
      tabBarOptions={{
        backgroundColor: 'transparent',
      }}>
      <Tab.Screen name="Haberler" component={NewsGeneral} />
      <Tab.Screen name="Piyasalar" component={MarketsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
