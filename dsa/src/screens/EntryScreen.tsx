import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const EntryScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.logocontainer}>
        <Image style={styles.logoimage} source={require('../../assets/images/entry-page/canlifiyat.png')} resizeMode = 'contain' />
        <Image style={styles.logoimage} source={require('../../assets/images/entry-page/albyatirim.png')} resizeMode = 'contain' />
    </View>
    <Image style={styles.leftImage} source={require('../../assets/images/entry-page/left-image.png')} resizeMode = 'contain'/>
    <Image style={styles.rightImage} source={require('../../assets/images/entry-page/right-image.png')} resizeMode = 'contain' />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logocontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,

    },
    leftImage: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50%',
        bottom: 0,
        height: '100%',
    },
    logoimage: {
        resizeMode: 'contain',
    },
    rightImage: {
        position: 'absolute',
        right: 0,
        top: 100,
        width: '50%',
        bottom: 0,
        height: '100%',
    },
});

export default EntryScreen;