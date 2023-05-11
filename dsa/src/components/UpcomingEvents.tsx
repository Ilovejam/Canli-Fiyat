import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../images/upcomingbackground.png';
import titlebackground from '../images/titlebackground.png';
import axios from 'axios';
import { Linking } from 'react-native';


const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      date: '11 Mar',
      title: 'Çin - Tüketici Fiyat Endeksi (TÜFE)',
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
            <ImageBackground
              source={backgroundImage}
              style={styles.dateBackgroundImage}
              imageStyle={styles.dateBackgroundImageStyle}
            >
              <Text style={styles.dateDay}>{event.date.substring(0, 2)}</Text>
              <Text style={styles.dateMonth}>{event.date.substring(3)}</Text>
            </ImageBackground>
          </View>
          <View style={styles.titleContainer}>
            <ImageBackground
              source={titlebackground}
              style={styles.titleBackgroundImage}
              imageStyle={styles.titleBackgroundImageStyle}
            >
              <Text style={styles.titleText}>{event.title}</Text>
            </ImageBackground>
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
    marginBottom: 10,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 15,
    marginBottom: -15,
    borderTopRightRadius: 100,
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
    borderRadius: 15, // Add this line
  },
  dateBackgroundImage: {
    flex: 1,
    width: '120%',
    height: '120%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  dateBackgroundImageStyle: {
    borderRadius: 5,
  },
  dateMonth: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
    marginLeft: 10,
    fontWeight: '400',
  },
  dateDay: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    borderRadius: 2,
    paddingHorizontal: 2,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left', // add this line

  },
  
  titleBackgroundImage: {
    width: 290,
    height: 70,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBackgroundImageStyle: {
    borderRadius: 2,
  },
  titleText: {
    fontSize: 16,
    fontWeight:'bold',
    color: '#222222',
    paddingVertical: 10,
    paddingRight: 5,
  },
});

export default UpcomingEvents;
