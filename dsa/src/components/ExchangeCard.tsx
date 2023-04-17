import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box } from 'native-base';

type ExchangeCardProps = {
  name: string;
  percentageChange: number;
}

const ExchangeCard: React.FC<ExchangeCardProps> = ({ name, percentageChange }) => {
  return (
    <Box style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.percentageChange}>+{percentageChange}%</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    borderWidth: 1,
    marginRight: 10,
    width: 120,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  percentageChange: {
    fontSize: 16,
    color: '#00b300',
    fontWeight: 'bold',
  }
});

export default ExchangeCard;
