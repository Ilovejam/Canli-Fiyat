import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface WinLoseCategoryProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  onCategoryPress: (category: string) => void;
}

export default function WinLoseCategory({ activeCategory, setActiveCategory, onCategoryPress }: WinLoseCategoryProps) {
  const getCategoryStyle = (category: string) => {
    if (category === activeCategory) {
      return { fontWeight: "bold", borderBottomColor: "#1A202C", color: "#000000", borderBottomWidth: 2, borderColor: "green" };
    } else {
      return { borderBottomColor: "#D1D5DB", color: "#6A6A6A",  borderBottomWidth: 0 };
    }
  };

  return (
    <View style={styles.catalogContainer}>
      <Text style={[styles.catalogItem, getCategoryStyle("Kazananlar")]} onPress={() => { setActiveCategory("Kazananlar"); onCategoryPress("Kazanan"); }}>Kazananlar</Text>
      <Text style={[styles.catalogItem, getCategoryStyle("Kaybedenler")]} onPress={() => { setActiveCategory("Kaybedenler"); onCategoryPress("Kaybeden"); }}>Kaybedenler</Text>
      <Text style={[styles.catalogItem, getCategoryStyle("En Hacimliler")]} onPress={() => setActiveCategory("En Hacimliler")}>En Hacimliler</Text>
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
  },
  catalogItem: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6A6A6A",
    marginRight: 20,
    paddingBottom: 5,
  },
});
