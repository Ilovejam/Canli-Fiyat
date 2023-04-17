import React from 'react';
import { View, StyleSheet } from 'react-native';

interface BackgroundCirclesProps {}

const BackgroundCircles = ({}: BackgroundCirclesProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />
      <View style={[styles.circle, styles.circle3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    borderRadius: 999,
  },
  circle1: {
    width: 43,
    height: 43,
    left: 251,
    top: 436,
    backgroundColor: 'rgba(114, 4, 123, 1)',
  },
  circle2: {
    width: 136,
    height: 136,
    left: -71,
    top: 446,
    backgroundColor: 'rgba(23, 179, 169, 1)',
  },
  circle3: {
    width: 144,
    height: 144,
    left: 300,
    top: 540,
    backgroundColor: 'rgba(231, 206, 74, 1)',
    transform: [{ scaleX: -1 }],
  },
});

export default BackgroundCircles;
