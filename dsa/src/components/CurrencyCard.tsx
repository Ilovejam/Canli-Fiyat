import React from 'react';
import { View, Text } from 'native-base';

const CurrencyCard = () => {
  return (
    <View style={{ backgroundColor: 'red', borderRadius: 10, padding: 16, alignItems: 'center', width: '90%', alignSelf: 'center', marginBottom: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Card</Text>
    </View>
  );
};

export default CurrencyCard;
