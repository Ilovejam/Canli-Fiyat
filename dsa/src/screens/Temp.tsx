import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const Temp = () => {
  const symbols = ["AUDCAD", "GBPAUD", "GBPCAD", "GBPCHF", "GBPJPY", "GBPUSD", "AUDCHF", "AUDJPY"];
  const [symbolIcons, setSymbolIcons] = useState({});

  useEffect(() => {
    const fetchSymbolIcons = async () => {
      try {
        const symbol = "AUDCAD"; // The symbol for which we want to fetch the icon
        const response = await axios.get(`https://alb.com/assets/main/img/app-symbols/${symbol}.svg`, {
          responseType: 'arraybuffer',
        });

        const iconData = Buffer.from(response.data, 'binary').toString('base64');
        const icon = `data:image/svg+xml;base64,${iconData}`;

        setSymbolIcons({ [symbol]: icon });
      } catch (error) {
        console.log('Error fetching symbol icon:', error);
      }
    };

    fetchSymbolIcons();
  }, []);

  return (
    <View>
      {symbols.map((symbol) => (
        <View style={styles.dsa} key={symbol}>
          <Text>{symbol}</Text>
          {symbolIcons[symbol] && <Image source={{ uri: symbolIcons[symbol] }} style={{ width: 20, height: 20 }} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dsa: {
    marginLeft: 20,
    marginTop: 20,
  },
});

export default Temp;
