import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

interface MarketPrivateCategoryProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function MarketPrivateCategory({ activeCategory, setActiveCategory }: MarketPrivateCategoryProps) {
  const getCategoryStyle = (category: string) => {
    if (category === activeCategory) {
      return {
        fontWeight: "bold",
        borderBottomColor: "#1A202C",
        color: "#000000",
        borderBottomWidth: 2,
      };
    } else {
      return {
        borderBottomColor: "#D1D5DB",
        color: "#6A6A6A",
        borderBottomWidth: 0,
      };
    }
  };

  const handleCategoryPress = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.catalogContainer}>
        <View style={styles.categoryContainer}>
          {["Genel Bakış", "s Pariteleri", "Emtialar", "Borsa Endeksleri", "Kripto", "Kıymetli Madenler"].map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => handleCategoryPress(category)}
              style={[styles.catalogItemContainer, activeCategory === category && styles.selectedItemContainer]}
            >
              <Text style={[styles.catalogItem, getCategoryStyle(category)]}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.catalogLine} />
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
    width: "100%",
    backgroundColor: "transparent",
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
    height: 22,
    width: "100%",
    fontFamily:"WorkSans-Black"
  },
  catalogItemContainer: {
    marginRight: 20,
    paddingBottom: 5,
  },
  selectedItemContainer: {
    borderBottomColor: "#67BBF9",
    borderBottomWidth: 2,
  },
  catalogItem: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6A6A6A",
  },
  catalogLine: {
    height: 2,
    backgroundColor: "#DEE4F1",
    position: "absolute",
    top: 18,
    bottom: 0,
    left: 20,
    right: 20,
  },
});
