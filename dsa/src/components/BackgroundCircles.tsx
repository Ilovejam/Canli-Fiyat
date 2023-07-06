import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface BackgroundCirclesProps {}

const BackgroundCircles = ({}: BackgroundCirclesProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(241, 243, 247, 0.7)', 'rgba(245, 247, 250, 0.7)']} style={styles.gradient} />
      <ImageBackground source={require('../images/circle1.png')} style={[styles.circle, styles.circle1]} />
      <ImageBackground source={require('../images/circle2.png')} style={[styles.circle, styles.circle2]} />
      <ImageBackground source={require('../images/circle3.png')} style={[styles.circle, styles.circle3]} />
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
  gradient: {
    position: 'absolute',
    top: 121,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
  },
  circle: {
    position: 'absolute',
    borderRadius: 999,
  },
  circle1: {
    width: 47,
    height: 47,
    left: 130,
    top: 350,
    overflow: 'hidden',
  },
  circle2: {
    width: 136,
    height: 136,
    left: -71,
    top: 446,
    overflow: 'hidden',
  },
  circle3: {
    width: 144,
    height: 144,
    left: 300,
    top: 410,
    transform: [{ scaleX: -1 }],
    overflow: 'hidden',
  },
});

export default BackgroundCircles;
