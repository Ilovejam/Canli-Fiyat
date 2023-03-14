import React from 'react';
import { SafeAreaView } from 'react-native';
import CoinStats from '../components/CoinStats';
import LogoHeader from '../components/LogoHeader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const CryptoStats: React.FC = () => {
  return (
    <SafeAreaView>
        <LogoHeader />
        <CoinStats />
    </SafeAreaView>
  );
};

export default CoinStats;
