import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MarketPrivate = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>MarketsScreen</Text>
      <Text style={styles.backButton} onPress={handleBackPress}>
        Go Back
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default MarketPrivate;
