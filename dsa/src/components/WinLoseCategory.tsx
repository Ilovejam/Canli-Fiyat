import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

interface WinLoseCategoryProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function WinLoseCategory({ activeCategory, setActiveCategory }: WinLoseCategoryProps) {
  const getCategoryStyle = (category: string) => {
    if (category === activeCategory) {
      return {
        fontWeight: "bold",
        borderBottomColor: "#1A202C",
        color: "#000000",
        borderBottomWidth: 0,
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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCategoryPress("Kazananlar")} style={styles.category}>
        <Text style={[styles.categoryText, getCategoryStyle("Kazananlar")]}>Kazananlar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCategoryPress("Kaybedenler")} style={styles.category}>
        <Text style={[styles.categoryText, getCategoryStyle("Kaybedenler")]}>Kaybedenler</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCategoryPress("Hacimli")} style={styles.category}>
        <Text style={[styles.categoryText, getCategoryStyle("Hacimli")]}>Hacimli</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width:"100%",
    marginLeft:30,
    paddingHorizontal: 10,
    height: 22,
    backgroundColor: "transparent",
    marginTop: 80,
    marginBottom: 10
  },
  category: {
    flex: 1,
    marginRight: 10,
    paddingBottom: 5,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6A6A6A",
  },
});
