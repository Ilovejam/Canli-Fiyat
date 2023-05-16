import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackgroundCircles from '../components/BackgroundCircles';
import PortfolioCard from '../components/PortfolioCard';
import SocketPriceCards from '../components/SocketPriceCards';
import SocketSliders from '../components/SocketSliders';
import ExchangeCardSlider from '../components/ExchangeCardSlider';
import WinLoseCategory from '../components/WinLoseCategory';
import { SafeAreaView } from 'react-native-safe-area-context';

const CATEGORIES = {
  'Döviz': ['EURTRY', 'USDTRY', 'GBPTRY', 'AUDTRY', 'AUDCAD','CHFTRY', 'BTCUSD','CADTRY','CNYTRY','RUBTRY','JPYTRY'],
  'Kripto Para': ['BNBUSD', 'ETHTRY', 'XRPUTRY', 'LTCTRY','ADAUSD','AVAXUSD','BTCTRY','BTCUSD','BUSDUSD','CRODUSD','LUNAUSD', 'SHIBUSD','XMRUSD'],
  'Emtia': ['GAUTRY', 'XAGTRY', 'XAGUSD', 'WHEAT','BRENTUSD', 'XPDEUR', 'XPDUSD', 'XPTEUR', 'WTIUSD'],
  'Borsa Endeksleri': ['GER30_Cash', 'DOW30_Cash', 'NAS100_Cash', 'NAS100#','XGIDA','XILTM','XTRZM', 'XU^='],
  "Kıymetli Madenler": ['EURGLD','SCUM','SG22BIL','SGATA','SGBESLI','SGCEYREK','SGLD', 'SGYARIM', 'SGZIYNET','XAUTRY'],
};

const PricesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Döviz');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const [activeCategory, setActiveCategory] = useState('Overview');
  const handleCategoryPress = (category) => {
    setActiveCategory(category);
    // Perform any other necessary actions here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.market}>
        <BackgroundCircles />
        <Header title="Piyasalar" style={styles.header} />
        <View style={styles.categoryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Object.keys(CATEGORIES).map((category) => (
              <TouchableOpacity
                key={category}
                style={styles.categoryButton}
                onPress={() => handleCategoryChange(category)}
              >
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 10,
                    color: selectedCategory === category ? '#000000' : '#898B99',
                    fontWeight: selectedCategory === category ? 'bold' : 'normal',
                  }}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <ScrollView>
          <View style={styles.portfolioCard}>
            <PortfolioCard />
          </View>
          <View style={styles.exchangeContainer}>
            <ExchangeCardSlider />
          </View>
          <WinLoseCategory
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            onCategoryPress={handleCategoryPress}
          />
          <ScrollView style={styles.priceRowContainer}>
            <SocketPriceCards selectedCategory={selectedCategory} categories={CATEGORIES} />
          </ScrollView>
       </ScrollView>
      </View>
    </SafeAreaView>
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    marginTop: -50,
  },
  market: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    marginBottom: -40,
    marginTop: 0,
  },
  categoryContainer: {
    marginBottom: -50,
    marginTop: -20,
    zIndex: 1, // Ensure the category section stays on top
    backgroundColor: '#fff',
    height: 50,
  },
  categoryButton: {
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 10,
  },
  portfolioCard: {
    marginBottom: 10,
    marginTop: 60,
    position: 'relative', // Add relative positioning
    zIndex: 0,
  },
  exchangeContainer: {
    marginBottom: -50,
    height: 100,

  },
});


export default PricesScreen;
