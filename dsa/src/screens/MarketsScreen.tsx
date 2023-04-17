import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import PortfolioCard from "../components/PortfolioCard";
import ExchangeCardsSlider from "../components/ExchangeCardSlider";
import CurrencyCard from "../components/CurrencyCard";
import CurrencyCardRenderer from "../components/CardRenderer";
import Header from "../components/Header";
import BackgroundCircles from "../components/BackgroundCircles";

export default function MarketsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCircles circleColor1="#F3C2C2" circleColor2="#F3D0C2" circleColor3="#F3E7C2" />
      <Header title="Piyasalar" />
        <View style={styles.portfolioContainer}>
          <PortfolioCard />
        </View>
        <View style={styles.exchangeContainer}>
          <ExchangeCardsSlider />
        </View>
        <View style={styles.currencyCardRenderer}>
          <CurrencyCardRenderer />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    width: "100%",
  },
  portfolioContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -180,
  },
  exchangeContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -120,
  },
  currencyCardRenderer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 10,
  },
  
});
