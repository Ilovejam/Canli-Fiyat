import React from "react";
import { View, StyleSheet } from "react-native";

import PortfolioCard from "../components/PortfolioCard";
import ExchangeCardsSlider from "../components/ExchangeCardSlider";
import CurrencyCard from "../components/CurrencyCard";
import CurrencyCardRenderer from "../components/CardRenderer";

const data = [
  { icon: "bitcoin", name: "Bitcoin", symbol: "btc", price: 40000, change: -3.5 },
  { icon: "ethereum", name: "Ethereum", symbol: "eth", price: 2000, change: 1.2 },
  { icon: "litecoin", name: "Litecoin", symbol: "ltc", price: 150, change: -2.1 },
  { icon: "monero", name: "Monero", symbol: "xmr", price: 250, change: 0.5 },
  { icon: "cardano", name: "Cardano", symbol: "ada", price: 2.5, change: 5.0 },
];

export default function MarketsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.portfolioContainer}>
        <PortfolioCard />
      </View>
      <View style={styles.exchangeContainer}>
        <ExchangeCardsSlider />
      </View>
      <CurrencyCardRenderer data={data} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  portfolioContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  exchangeContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  currencyCardRenderer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
