import { background } from "native-base/lib/typescript/theme/styled-system";
import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableWithoutFeedback } from "react-native";

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

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const handleCategoryPress = (category: string, index: number) => {
    console.log(`Selected category: ${category}`);
    setSelectedCategoryIndex(index);
  };
  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.catalogContainer}>
        <View style={styles.categoryContainer}>
          {["Genel Bakış", "Alarmlar", "İşlemler"].map((category, index) => (
            <TouchableWithoutFeedback key={category} onPress={() => { handleCategoryPress(category, index); }}>
              <View style={[styles.catalogItemContainer, index === 0 && styles.firstItemContainer, index === selectedCategoryIndex && styles.selectedItemContainer]}>
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
    height: 22,
    width: "140%",
    backgroundColor: "white",
    },
    categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // add this line
    flexGrow: 1, // add this line
    height: 22,
    width: "20%",
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
