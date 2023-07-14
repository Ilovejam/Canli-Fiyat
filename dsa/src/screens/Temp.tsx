import React from 'react';
import { View } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Temp = () => {
  return (
    <View>
      <SvgUri
        width="200"
        height="200"
        uri="https://alb.com/assets/main/img/app-symbols/btc.svg"
      />
    </View>
  );
};

export default Temp;
