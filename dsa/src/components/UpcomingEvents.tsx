import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import backgroundImage from '../images/eventdatebg.png';
import { BlurView } from '@react-native-community/blur';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    { id: 15, date: '08 Aug', title: 'Balance of Trade' },
    { id: 16, date: '08 Aug', title: 'Redbook YoY' },
    { id: 17, date: '09 Aug', title: 'MBA Purchase index' },
    { id: 18, date: '09 Aug', title: 'EIA Distillate Stocks Change' },
    { id: 19, date: '10 Aug', title: 'Foregin Exchange Reserves' },
    { id: 20, date: '10 Aug', title: 'Core Inflation Rate MoM' },
    { id: 21, date: '11 Aug', title: 'Balance of Trade' },
    { id: 22, date: '11 Aug', title: 'GPD YoY' },
   
    ]);

  const handleEventPress = (eventName) => {
    const baseUrl = 'https://www.tradingview.com/economic-calendar/';
    const eventSlug = eventName.toLowerCase().replace(/ /g, '-');
    const url = `${baseUrl}`;
    Linking.openURL(url);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setEvents((prevEvents) => {
        const now = new Date();
        const next24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        const filteredEvents = prevEvents.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate >= now && eventDate <= next24Hours;
        });

        const sortedEvents = filteredEvents.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA - dateB;
        });

        return sortedEvents;
      });
    }, 1000 * 60 * 60 * 24); // Update events every 24 hours

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderEvents = () => {
    const timeSlots = {};
    const MAX_EVENTS_PER_SLOT = 2;

    events.forEach((event) => {
      const eventTime = event.date;
      if (!timeSlots[eventTime]) {
        timeSlots[eventTime] = [];
      }

      if (timeSlots[eventTime].length < MAX_EVENTS_PER_SLOT) {
        timeSlots[eventTime].push(event);
      }
    });

    const renderedEvents = events.slice(0, 2).map((event, index) => (
      <TouchableOpacity
        style={styles.eventContainer}
        key={event.id + '-' + index}
        onPress={() => handleEventPress(event.title)}
      >
        <View style={styles.dateContainer}>
          <BlurView style={styles.dateBlur} blurType="light" blurAmount={10}>
            <Text style={styles.dateDay}>{event.date.substring(0, 2)}</Text>
            <Text style={styles.dateMonth}>{event.date.substring(3)}</Text>
          </BlurView>
        </View>
        <View style={styles.titleContainer}>
          <BlurView style={styles.titleBlur} blurType="light" blurAmount={20}>
            <Text style={styles.titleText}>
              {event.title.length > 30 ? event.title.substring(0, 30) + '...' : event.title}
            </Text>
          </BlurView>
        </View>
      </TouchableOpacity>
    ));
  

    return renderedEvents;
  };

  return <View style={styles.container}>{renderEvents()}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 35,
    marginTop: -15,
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
    width: '100%',
    height: '100%',
    borderRadius: 10,
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

    
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left', // Align the text to the left
    color: '#222222',
    paddingVertical: 10,
    marginTop: 2,
    marginLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
    overflow: 'hidden',

  }

});

export default UpcomingEvents;
