import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import Header from '../components/Header';
import PortfolioCard from '../components/PortfolioCard';
import SocketPriceCards from '../components/SocketPriceCards';
import ExchangeCardSlider from '../components/ExchangeCardSlider';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundCircles from '../components/BackgroundCircles';

const CATEGORIES = {
  'Döviz': ["AUDCAD", "GBPAUD", "GBPCAD", "GBPCHF", "GBPJPY", "GBPUSD", "AUDCHF", "AUDJPY", "AUDNZD", "AUDUSD", "CHFJPY", "CADJPY", "CADCHF", "EURAUD", "EURCAD", "EURCHF", "EURGBP", "EURJPY"],
  'Kripto Para': ["AVALANCHE", "BINANCE", "COINBASE", "POLKADOT", "STELLAR", "BITCOIN", "BITCOINCASH", "CARDANO", "CHAINLINK", "EOS", "ETHEREUM", "LITECOIN", "NEO", "RIPPLE", "SOLANA", "IOTA"],
  'Emtia': ["GAGEUR", "GAGUSD", "GAUEUR", "GAUTRY", "GAUUSD", "NATGAS_Cash", "XAGEUR", "XAGUSD", "XAUEUR", "XAUUSD", "XPDUSD", "XPTUSD", "GOLDft"],
  'Borsa Endeksleri': ["APPLE", "AT-T", "ATLANTIA", "AVIVA", "BAYER", "BERKSHIRE", "BEYOND", "INTESA", "JNJ", "JPMORGAN", "LMT", "LVMH", "MARRIOTT", "MARVELL", "MCDONALDS", "MICROSOFT", "MODERNA", "NVIDIA"],
  "Kıymetli Madenler": ["EEM", "EXS1", "EXW1", "GDX", "QQQ", "SPY", "TLT", "GLD", "USO", "FTNG", "UWT", "VXX"],
};

// const CATEGORIES = {
//   'Döviz': ["AUDCAD", "GBPAUD", "GBPCAD", "GBPCHF", "GBPJPY", "GBPUSD", "AUDCHF", "AUDJPY", "AUDNZD", "AUDUSD", "CHFJPY", "CADJPY", "CADCHF", "EURAUD", "EURCAD", "EURCHF", "EURGBP", "EURJPY"],
//   'Kripto Para': ["AVALANCHE", "BINANCE", "COINBASE", "POLKADOT", "STELLAR", "BITCOIN", "BITCOINCASH", "BTCAED", "CARDANO", "CHAINLINK", "EOS", "ETHEREUM", "LITECOIN", "NEO", "RIPPLE", "SOLANA", "IOTA"],
//   'Emtia': ["GAGEUR", "GAGUSD", "GAUEUR", "GAUTRY", "GAUUSD", "NATGAS_Cash", "XAGEUR", "XAGUSD", "XAUEUR", "XAUUSD", "XPDUSD", "XPTUSD", "USOIL#", "GOLDft", "GOLDft#", "NATGAS#"],
//   'Borsa Endeksleri': ["APPLE", "AT-T", "ATLANTIA", "AVIVA", "BAYER", "BERKSHIRE", "BEYOND", "INTESA", "JNJ", "JPMORGAN", "LMT", "LVMH", "MARRIOTT", "MARVELL", "MCDONALDS", "MICROSOFT", "MODERNA", "NVIDIA"],
//   "Kıymetli Madenler": ["EEM", "EXS1", "EXW1", "GDX", "QQQ", "SPY", "TLT", "GLD", "USO", "FTNG", "UWT", "VXX"],
// };

const PricesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Döviz');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Hepsi');
  const categoryScrollViewRef = useRef(null);
  const [redLinePosition, setRedLinePosition] = useState({ left: 0, width: 0 });


  useEffect(() => {
    if (selectedCategory && categoryScrollViewRef.current) {
      categoryScrollViewRef.current.measure((x, y, width, height, pageX) => {
        const categoryButtonWidth = width / Object.keys(CATEGORIES).length;
        const selectedCategoryIndex = Object.keys(CATEGORIES).indexOf(selectedCategory);
        const left = (selectedCategoryIndex * categoryButtonWidth) + (categoryButtonWidth / 2);
        const lineWidth = categoryButtonWidth * 0.8; // Adjust the line width as needed
        setRedLinePosition({ left: left - (lineWidth / 2), width: lineWidth });
      });
    }
  }, [selectedCategory]);
  

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const categoryContainerWidth = Object.keys(CATEGORIES).length * 120; // Assuming each category button has a width of 120
    const categoryButtonWidth = 120; // Assuming each category button has a width of 120
    const scrollWidth = categoryContainerWidth - categoryButtonWidth;
    const selectedCategoryIndex = Object.keys(CATEGORIES).indexOf(category);
    const scrollPosition = Math.max(0, (selectedCategoryIndex - 10) * categoryButtonWidth - scrollWidth);

    // Scroll to the new position
    categoryScrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });
  };

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    setIsMenuVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.market}>
        <Header title="Piyasalar" style={styles.header} />
        <BackgroundCircles />
        <View style={styles.categoryContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={categoryScrollViewRef}
          >
            {Object.keys(CATEGORIES).map((category) => (
              <TouchableOpacity
                key={category}
                style={styles.categoryButton}
                onPress={() => handleCategoryChange(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.selectedCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.selectedCategoryLine} />
          {selectedCategory && (
            <View
              style={[
                styles.selectedCategoryLine,
                styles.redLine(selectedCategory, redLinePosition),
              ]}
            />
          )}
        </View>
        <ScrollView>
          <View style={styles.portfolioCard}>
            <PortfolioCard />
          </View>
          <View style={styles.exchangeContainer}>
            <ExchangeCardSlider />
          </View>
          <View style={styles.filtersContainer}>
            <View style={styles.filtersButtonContainer}>
              <TouchableOpacity style={styles.filtersButton} onPress={toggleMenu}>
                <Text style={styles.filtersButtonText}>Filtreler</Text>
              </TouchableOpacity>
              {isMenuVisible && (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={isMenuVisible}
                  onRequestClose={() => setIsMenuVisible(false)}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={() => handleFilterSelection('Hepsi')}
                      >
                        <Text style={styles.modalOptionText}>Hepsi</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={() => handleFilterSelection('Kazananlar')}
                      >
                        <Text style={styles.modalOptionText}>Kazananlar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={() => handleFilterSelection('Kaybedenler')}
                      >
                        <Text style={styles.modalOptionText}>Kaybedenler</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              )}
            </View>
            <Text style={styles.priceText}>{selectedFilter}</Text>
          </View>
          <ScrollView style={styles.priceRowContainer}>
            <SocketPriceCards
              initialCategory={selectedCategory}
              categories={CATEGORIES}
              selectedFilter={selectedFilter}
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
  categoryText: {
    fontSize: 16,
    marginTop: 10,
    color: '#898B99',
    fontWeight: 'normal',
  },
  selectedCategoryText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  selectedCategoryLine: {
    height: 2,
    backgroundColor: '#DEE4F1',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  redLine: (selectedCategory, redLinePosition) => ({
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: redLinePosition.left,
    width: redLinePosition.width,
  }),
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
    marginTop: 70,
    position: 'relative', // Add relative positioning
    zIndex: 0,
  },
  exchangeContainer: {
    marginBottom: 10,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  filtersButtonContainer: {
    marginRight: 10,
  },
  filtersButton: {
    backgroundColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  filtersButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  priceRowContainer: {
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalOption: {
    marginBottom: 10,
  },
  modalOptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PricesScreen;
