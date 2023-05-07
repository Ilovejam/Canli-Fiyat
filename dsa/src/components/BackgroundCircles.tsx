import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

interface BackgroundCirclesProps {}

const BackgroundCircles = ({}: BackgroundCirclesProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/circle1.png')} style={[styles.circle, styles.circle1]}>
        {/* Add any child components here, if needed */}
      </ImageBackground>
      <ImageBackground source={require('../images/circle2.png')} style={[styles.circle, styles.circle2]}>
        {/* Add any child components here, if needed */}
      </ImageBackground>
      <ImageBackground source={require('../images/circle3.png')} style={[styles.circle, styles.circle3]}>
        {/* Add any child components here, if needed */}
      </ImageBackground>    
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
    position: 'absolute',
    width: 47,
    height: 47,
    left: 130,
    top: 350,
    borderRadius: 68,
    overflow: 'hidden',
  },
  circle2: {
    width: 136,
    height: 136,
    left: -71,
    top: 446,
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  circle3: {
    width: 144,
    height: 144,
    left: 300,
    top: 410,
    backgroundColor: 'red',
    transform: [{ scaleX: -1 }],
    overflow: 'hidden',
  },
});

export default BackgroundCircles;
