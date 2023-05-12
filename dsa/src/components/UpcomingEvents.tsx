import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import titlebackground from '../images/titlebackground.png';
import backgroundImage from '../images/eventdatebg.png';
import axios from 'axios';
import { BlurView } from '@react-native-community/blur';
import { Linking } from 'react-native';


const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      date: '11 Mar',
      title: 'Çin - Tüketici Fiyat Endeksi (TÜFE)     ',
      url: 'https://tr.investing.com/economic-calendar/chinese-cpi-459',
    },
    {
      id: 2,
      date: '10 May',
      title: 'Yeni Zelanda - Yiyecek Fiyat Endeksi',
      url: 'https://tr.investing.com/economic-calendar/fpi-110',
    },
  ]);

  const handleEventPress = (eventName) => {
    const baseUrl = 'https://tr.investing.com/economic-calendar/';
    const eventSlug = eventName.toLowerCase().replace(/ /g, '-');
    const url = `${baseUrl}${eventSlug}`;
    Linking.openURL(url);
  };
  
  
  const renderEvents = () => {
    return events.map((event) => {
      return (
        <TouchableOpacity style={styles.eventContainer} key={event.id} onPress={() => handleEventPress(event.url)}>
          <View style={styles.dateContainer}>
          <BlurView style={styles.dateBlur} blurType="light" blurAmount={10}>
                <Text style={styles.dateDay}>{event.date.substring(0, 2)}</Text>
                <Text style={styles.dateMonth}>{event.date.substring(3)}</Text>
              </BlurView>
          </View>
          <View style={[styles.titleContainer, { borderRadius: 10 }]}>
            <BlurView style={styles.titleBlur} blurType="light" blurAmount={10}>
              <Text style={styles.titleText}>{event.title}</Text>
            </BlurView>
          </View>

        </TouchableOpacity>
      );
    });
  };

  return <View style={styles.container}>{renderEvents()}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 35,
    marginTop:-15,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    marginBottom: -15,
    borderTopRightRadius: 100,
    marginTop: 10,
  },
  dateContainer: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginRight: 12,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
    borderRadius: 10,
  },
  dateBlur: {
    flex: 1,
    width: '120%',
    height: '120%',
    right: '-10%',
    top: '10%',
    borderRadius: 10,
    backgroundColor: 'rgba(15, 255, 128, 0.4)',
    borderWidth: 0.4,
    borderColor: '#E5E5E5',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  titleBlur: {
    flex: 1,
    width: '110%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.4,
    borderColor: '#E5E5E5',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    marginTop: 5,
  },
  dateMonth: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
    marginLeft: 0,
    fontWeight: '400',
  },
  dateDay: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 0,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
    paddingVertical: 10,
    marginTop: 2,
    paddingRight: 5,
    borderRadius: 10,
  },
});

export default UpcomingEvents;
