import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/Header';
import PortfolioCard from '../components/PortfolioCard';
import SocketPriceCards from '../components/SocketPriceCards';
import ExchangeCardSlider from '../components/ExchangeCardSlider';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundCircles from '../components/BackgroundCircles';


// const CATEGORIES = {
//   'Döviz': ["AUDCAD", "GBPAUD", "GBPCAD", ],
//   'Kripto Para': ["AVALANCHE", "BINANCE", ],
//   'Emtia': ["GAGEUR", "GAGUSD", "GAUEUR", ],
//   'Borsa Endeksleri': ["APPLE", "AT-T", ],
//   "Kıymetli Madenler": ["EEM", "EXS1", ],
// };

const CATEGORIES = {
  'Döviz': ["AUDCAD", "GBPAUD", "GBPCAD", "GBPCHF", "GBPJPY", "GBPUSD", "AUDCHF", "AUDJPY", "AUDNZD", "AUDUSD", "CHFJPY", "CADJPY", "EURGBP", "EURJPY"],
  'Kripto Para': ["AVALANCHE", "BINANCE", "POLKADOT", "STELLAR", "BITCOIN", "BITCOINCASH", "CARDANO", "ETHEREUM", "LITECOIN", "NEO", "RIPPLE", "SOLANA", "IOTA"],
  'Emtia': ["GAGEUR", "GAGUSD", "GAUEUR", "GAUTRY", "GAUUSD", "NATGAS_Cash", "SOYBEAN", "UKOIL", "USOIL", "COCOA", "COPPER", "CORN", "COTTON", "SUGAR", "WHEAT"],
  'Borsa Endeksleri': ["APPLE", "INTESA", "JNJ", "JPMORGAN", "LMT","NVIDIA"],
  "Kıymetli Madenler": ["EEM", "EXS1", "EXW1", "GDX", "QQQ",  "UWT", "VXX"],
};

const FILTER_OPTIONS = ['Hepsi', 'Kazananlar', 'Kaybedenler'];
const screenHeight = Dimensions.get('window').height;


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
  const handleBackdropPress = () => {
    setIsMenuVisible(false);
    
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.market}>
        <BackgroundCircles />
        <Header title="Piyasalar" 
         showBackIcon={selectedCategory !== null}
         style={styles.header}
         onBackPress={() => setSelectedCategory(null)}
         
          />
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
          <TouchableOpacity style={styles.filtersButton} onPress={() => setIsMenuVisible(true)}>
            <Text style={styles.filtersButtonText}>{selectedFilter}</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isMenuVisible}
          onRequestClose={() => setIsMenuVisible(false)}
        >
          <TouchableWithoutFeedback onPress={handleBackdropPress}>
            <View style={styles.modalContainer}>
              {/* Render the filter options as a FlatList */}
              <FlatList
                data={FILTER_OPTIONS}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => handleFilterSelection(item)}
                  >
                    <Text style={styles.modalOptionText}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
           <Text style={styles.priceText}>Filtreler</Text>
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
    position: 'absolute',
    bottom: -200,
    width: '100%',
    height: screenHeight / 2, // Half of the screen height
    backgroundColor: 'white',
  },
  modalContent: {
    padding: 16,
    borderRadius: 8,
  },
  modalOption: {
    paddingVertical: 8,
    alignItems: 'center',
  },

  modalOptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PricesScreen;
