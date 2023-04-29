import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

interface MarketCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function MarketCategories({ activeCategory, setActiveCategory }: MarketCategoriesProps) {
  const getCategoryStyle = (category: string) => {
    if (category === activeCategory) {
      return {
        fontWeight: "bold",
        borderBottomColor: "#1A202C",
        color: "#000000",
        transitionDuration: "100ms",
        borderBottomWidth: 2,
        borderColor: "green",
      };
    } else {
      return {
        borderBottomColor: "#D1D5DB",
        color: "#6A6A6A",
        transitionDuration: "100ms",
        borderBottomWidth: 0,
      };
    }
  };

  const handleCategoryPress = (category: string) => {
    console.log(`Selected category: ${category}`);
    setActiveCategory(category);
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      scrollEventThrottle={16}
    >
      <View style={styles.catalogContainer}>
        <Text
          style={[styles.catalogItem, getCategoryStyle("Overview")]}
          onPress={() => handleCategoryPress("Overview")}
        >
          Genel Bakış
        </Text>
        <Text
          style={[styles.catalogItem, getCategoryStyle("Currency Pairs")]}
          onPress={() => handleCategoryPress("Currency Pairs")}
        >
          Döviz Pariteleri
        </Text>
        <Text
          style={[styles.catalogItem, getCategoryStyle("Commodities")]}
          onPress={() => handleCategoryPress("Commodities")}
        >
          Emtialar
        </Text>
        <Text
          style={[styles.catalogItem, getCategoryStyle("Stock Indices")]}
          onPress={() => handleCategoryPress("Stock Indices")}
        >
          Borsa Endeksleri
        </Text>
        <Text
          style={[styles.catalogItem, getCategoryStyle("Crypto")]}
          onPress={() => handleCategoryPress("Crypto")}
        >
          Kripto
        </Text>
        <Text
          style={[styles.catalogItem, getCategoryStyle("Precious Metals")]}
          onPress={() => handleCategoryPress("Precious Metals")}
        >
          Precious Metals
        </Text>
      </View>
      <View style={styles.catalogLineContainer}>
        <View
          style={[
            styles.catalogLine,
            { backgroundColor: getCategoryStyle(activeCategory).borderBottomColor },
          ]}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  catalogContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 22,
  },
  catalogItem: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6A6A6A",
    marginRight: 20,
    paddingBottom: 5,
  },
  catalogLineContainer: {
    height: 3,
    width: "100%",
  },
  catalogLine: {
    flex: 1,
    backgroundColor: "red",
  },
});
