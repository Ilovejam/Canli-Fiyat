import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../images/upcomingbackground.png';
import titlebackground from '../images/titlebackground.png';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      date: '22 Şub',
      title: 'Ticaret Hadleri - İthalat Açıklaması',
    },
    {
      id: 2,
      date: '30 Şub',
      title: 'Ticaret Hadleri - İthalat Açıklaması',
    }
  ]);

  const renderEvents = () => {
    return events.map((event) => {
      return (
        <TouchableOpacity style={styles.eventContainer} key={event.id}>
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
    borderRadius: 5,
    marginBottom: -15,
  },
  dateContainer: {
    flexDirection: 'column',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginRight: 12,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain',
  },
  dateBackgroundImage: {
    flex: 1,
    width: '120%',
    height: '120%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateBackgroundImageStyle: {
    borderRadius: 5,
  },
  dateMonth: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginLeft: 10,
  },
  dateDay: {
    color: 'black',
    fontSize: 20,
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
