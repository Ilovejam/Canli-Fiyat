import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackgroundCircles from '../components/BackgroundCircles';
import PortfolioCard from '../components/PortfolioCard';
import SocketPriceCards from '../components/SocketPriceCards';
import ExchangeCardSlider from '../components/ExchangeCardSlider';
import WinLoseCategory from '../components/WinLoseCategory';
import { SafeAreaView } from 'react-native-safe-area-context';

const CATEGORIES = {
  'Döviz': ["AUDCAD", "GBPAUD", "GBPCAD", "GBPCHF", "GBPJPY", "GBPUSD", "AUDCHF", "AUDJPY", "AUDNZD", "AUDUSD", "CHFJPY", "CADJPY", "CADCHF", "EURAUD", "EURCAD", "EURCHF", "EURGBP", "EURJPY"],
  'Kripto Para': ["AVALANCHE", "BINANCE", "COINBASE", "POLKADOT", "STELLAR", "BITCOIN", "BITCOINCASH", "BTCAED", "CARDANO", "CHAINLINK", "EOS", "ETHEREUM", "LITECOIN", "NEO", "RIPPLE", "SOLANA", "IOTA"],
  'Emtia': ["GAGEUR", "GAGUSD", "GAUEUR", "GAUTRY", "GAUUSD", "NATGAS_Cash", "SOYBEAN", "UKOIL", "XAGEUR", "XAGUSD", "XAUEUR", "XAUUSD", "XPDUSD", "XPTUSD", "USOIL#", "GOLDft", "GOLDft#", "NATGAS#"],
  'Borsa Endeksleri': ["APPLE", "AT-T", "ATLANTIA", "AVIVA", "BAYER", "BERKSHIRE", "BEYOND", "INTESA", "JNJ", "JPMORGAN", "LMT", "LVMH", "MARRIOTT", "MARVELL", "MCDONALDS", "MICROSOFT", "MODERNA", "NVIDIA"],
  "Kıymetli Madenler": ["EEM", "EXS1", "EXW1", "GDX", "QQQ", "SPY", "TLT", "GLD", "USO", "FTNG", "UWT", "VXX"],
};

const PricesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Döviz');
  const [activeCategory, setActiveCategory] = useState('Kazananlar'); // Set initial activeCategory

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCategoryPress = (category) => {
    setActiveCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.market}>
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
          />
          <ScrollView style={styles.priceRowContainer}>
            <SocketPriceCards
              initialCategory={selectedCategory}
              categories={CATEGORIES}
              activeCategory={activeCategory}
            />
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
