import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

interface WinLoseCategoryProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  onCategoryPress: (category: string) => void;
}

export default function WinLoseCategory({ activeCategory, setActiveCategory, onCategoryPress }: WinLoseCategoryProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isClicked) {
      timeout = setTimeout(() => {
        setIsClicked(false);
      }, 10);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isClicked]);

  const getCategoryStyle = (category: string) => {
    if (category === activeCategory && !isClicked) {
      return {
        fontWeight: "bold",
        color: "#000000",
      };
    } else {
      return {
        fontWeight: "normal",
        color: "#6A6A6A",
      };
    }
  };

  const handleCategoryPress = (category: string) => {
    setIsClicked(true);
    setActiveCategory(category);
    onCategoryPress(category);
  };

  return (
    <View style={styles.catalogContainer}>
      <TouchableWithoutFeedback onPress={() => handleCategoryPress("Kazananlar")}>
        <Text style={[styles.catalogItem, getCategoryStyle("Kazananlar")]}>Kazananlar</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handleCategoryPress("Kaybedenler")}>
        <Text style={[styles.catalogItem, getCategoryStyle("Kaybedenler")]}>Kaybedenler</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handleCategoryPress("En Hacimliler")}>
        <Text style={[styles.catalogItem, getCategoryStyle("En Hacimliler")]}>En Hacimliler</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  catalogContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 22,
    width: "100%",
    marginLeft: 14,
    marginBottom: 10,
    marginTop: 70,
  },
  catalogItem: {
    fontSize: 16,
    marginRight: 20,
    paddingBottom: 5,
  },
});
