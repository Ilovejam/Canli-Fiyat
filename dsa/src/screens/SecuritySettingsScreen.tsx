import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Switch } from 'native-base';
import SettingsHeader from '../components/SettingsHeader';

const SecuritySettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <View style={styles.container}>
      <SettingsHeader title="Güvenlik" style = {styles.header} />
      <View style={styles.toggles}>
        <View style={styles.toggleContainer}>
            <Text style={styles.toggleText}>Şifre Koruması</Text>
            <Switch
            onValueChange={handleToggleNotifications}
            value={notificationsEnabled}
            trackColor={{ true: '#603AF5' }}
            thumbColor={notificationsEnabled ? '#603AF5' : '#F8F9FB'}
            />
        </View>
        <View style={styles.toggleContainer}>
            <Text style={styles.toggleText}>Face ID</Text>
            <Switch
            onValueChange={handleToggleNotifications}
            value={notificationsEnabled}
            trackColor={{ true: '#603AF5' }}
            thumbColor={notificationsEnabled ? '#603AF5' : '#F8F9FB'}
            />
        </View>
        
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -480,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 20,
  },
  toggleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
    toggles: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default SecuritySettingsScreen;
