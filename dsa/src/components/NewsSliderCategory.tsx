import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableWithoutFeedback } from "react-native";

interface NewsSliderCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const NewsSliderCategories = ({ activeCategory, setActiveCategory }: NewsSliderCategoriesProps) => {
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
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.catalogContainer}>
        <View style={styles.categoryContainer}>
          {["Ekonomi", "Şirket", "Döviz", "KAP", "Kripto", "Ürün"].map((category, index) => (
            <TouchableWithoutFeedback key={category} onPress={() => { handleCategoryPress(category); }}>
              <View style={[styles.catalogItemContainer, index === 0 && styles.firstItemContainer]}>
                <Text style={[styles.catalogItem, getCategoryStyle(category)]}>{category}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
        <View style={styles.catalogLine} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  catalogContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 22,
    position: "relative",
  },
  catalogItemContainer: {
    marginRight: 20,
    paddingBottom: 5,
  },
  firstItemContainer: {
    marginLeft: 20,
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

export default NewsSliderCategories;
