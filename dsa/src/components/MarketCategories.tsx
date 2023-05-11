import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableWithoutFeedback } from "react-native";

interface MarketCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function MarketCategories({ activeCategory, setActiveCategory }: MarketCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isClicked) {
      timeout = setTimeout(() => {
        setIsClicked(false);
      }, 100);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isClicked]);

  const getCategoryStyle = (category: string) => {
    if (category === activeCategory) {
      return {
        fontWeight: "bold",
        borderBottomColor: "#1A202C",
        color: "#000000",
        borderBottomWidth: 2,
        borderColor: "green",
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
    setIsClicked(true);
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.catalogContainer}>
        <View style={styles.categoryContainer}>
          {["Döviz", "Emtialar", "Borsa Endeksleri", "Kripto", "Kıymetli Madenler"].map((category, index) => (
            <TouchableWithoutFeedback key={category} onPress={() => handleCategoryPress(category)}>
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
}

const styles = StyleSheet.create({
  catalogContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 22
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 22
  },
  catalogItemContainer: {
    marginRight: 20,
    paddingBottom: 5,
  },
  firstItemContainer: {
    marginLeft: 20,
  },
  selectedItemContainer: {
    borderBottomColor: "#67BBF9",
    borderBottomWidth: 2,
  },
  catalogItem: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6A6A6A",
    height: 22,
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
