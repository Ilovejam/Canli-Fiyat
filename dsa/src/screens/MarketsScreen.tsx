import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Box } from 'native-base';

import PortfolioCard from '../components/PortfolioCard';
import ExchangeCardsSlider from '../components/ExchangeCardSlider';
import CurrencyCardRenderer from '../components/CardRenderer';
import Header from '../components/Header';
import BackgroundCircles from '../components/BackgroundCircles';
import MarketCategories from '../components/MarketCategories';
import WinLoseCategory from '../components/WinLoseCategory';

export default function MarketsScreen() {
  const [activeCategory, setActiveCategory] = useState('Overview');

  const handleCategoryPress = (category: string) => {
    setActiveCategory(category);
    // Perform any other necessary actions here
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCircles />
      <Header title="Piyasalar" style={styles.header} />
      <MarketCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ScrollView>
        <Box style={styles.portfolioContainer}>
          <PortfolioCard />
        </Box>
        <Box style={styles.exchangeContainer}>
          <ExchangeCardsSlider />
        </Box>
        <WinLoseCategory
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onCategoryPress={handleCategoryPress}
        />
        <Box style={styles.currencyCardRenderer}>
          <CurrencyCardRenderer activeCategory={activeCategory} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    width: '100%',
  },
  header: {
    marginBottom: 10,
  },
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  portfolioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  exchangeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
    marginBottom: -40,
  },
  currencyCardRenderer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -8,
    marginBottom: 10,
  },
});
