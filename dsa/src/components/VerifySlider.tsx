import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box } from 'native-base';

const VerifySlider = () => {
  return (
    <Box
      bg="#F9F9F9"
      borderRadius={16}
      padding={4}
      width="100%"
      maxWidth="358px"
      height="177px"
      marginVertical={4}
    >
      <View style={styles.container}>
        <View style={[styles.card, styles.cardLeft]}>
          <Text style={styles.cardTitle}>Telefonunu Doğrula</Text>
          <Text style={styles.cardText}>
            Hesabın ve para işlemlerin daha güvende olsun
          </Text>
        </View>
        <View style={[styles.card, styles.cardRight]}>
          <Text style={styles.cardTitle}>E-Postanı Doğrula</Text>
          <Text style={styles.cardText}>
            Yeni fırsatları kaçırma, kampanyalardan haberdar ol
          </Text>
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    padding: 12,
  },
  cardLeft: {
    backgroundColor: '#59CD90',
    marginRight: 8,
  },
  cardRight: {
    backgroundColor: '#FF7685',
    marginLeft: 8,
  },
  cardTitle: {
    fontFamily: 'Work Sans',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  cardText: {
    fontFamily: 'Work Sans',
    fontWeight: '400',
    fontSize: 12,
    color: '#fff',
  },
});

export default VerifySlider;
