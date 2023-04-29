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
        color: "#000000",
      };
    } else {
      return {
        color: "#6A6A6A",
      };
    }
  };

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const handleCategoryPress = (category: string, index: number) => {
    console.log(`Selected category: ${category}`);
    setActiveCategory(category);
    setSelectedCategoryIndex(index);
  };

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.catalogContainer}>
        <View style={styles.categoryContainer}>
          {["Ekonomi", "Şirket", "Döviz", "KAP", "Kripto", "Ürün"].map((category, index) => (
            <TouchableWithoutFeedback key={category} onPress={() => { handleCategoryPress(category, index); }}>
              <View style={[styles.catalogItemContainer, index === 0 && styles.firstItemContainer, index === selectedCategoryIndex && styles.selectedItemContainer]}>
                <Text style={[styles.catalogItem, getCategoryStyle(category)]}>{category}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
        <View style={styles.redLine} />
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
  selectedItemContainer: {
    borderBottomColor: "#67BBF9",
    borderBottomWidth: 2,
  },
  catalogItem: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6A6A6A",
  },
  redLine: {
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
