import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import backgroundImage from '../images/eventdatebg.png';
import { BlurView } from '@react-native-community/blur';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    { id: 3, date: '01 Tem', title: 'Istanbul Chamber of Industry Manufacturing PMI JUL' },
    { id: 4, date: '03 Tem', title: '6-Month BTF Auction' },
    { id: 4, date: '03 Tem', title: 'NAB Business Confidence' },
    { id: 5, date: '05 Tem', title: 'Inflation Rate YoY JUN' },
    { id: 5, date: '05 Tem', title: 'Inflation Rate MoM JUN' },
    { id: 5, date: '05 Tem', title: 'PPI MoM JUN' },
    { id: 5, date: '05 Tem', title: 'PPI YoY JUN' },
    { id: 5, date: '05 Tem', title: 'CPI JUN' },
    { id: 5, date: '05 Tem', title: 'Foreign Exchange Reserves JUN/30' },
    { id: 5, date: '05 Tem', title: 'Global Supply Chain Pressure Index JUN' },
    { id: 6, date: '06 Tem', title: 'Treasury Cash Balance JUN' },
    { id: 7, date: '07 Tem', title: 'FAO Food Price Index JUN' },
    { id: 7, date: '07 Tem', title: 'Treasury Cash Balance JUN' },
    { id: 8, date: '10 Tem', title: 'Unemployment Rate MAY' },
    { id: 8, date: '10 Tem', title: 'Participation Rate MAY' },
    { id: 9, date: '11 Tem', title: 'Current Account MAY' },
    { id: 10, date: '12 Tem', title: 'Industrial Production YoY MAY' },
    { id: 10, date: '12 Tem', title: 'Industrial Production MoM MAY' },
    { id: 11, date: '13 Tem', title: 'Retail Sales MoM MAY' },
    { id: 11, date: '13 Tem', title: 'Retail Sales YoY MAY' },
    { id: 12, date: '14 Tem', title: 'Auto Production YoY JUN' },
    { id: 13, date: '15 Tem', title: 'Balance of Trade Final MAY' },
    { id: 13, date: '15 Tem', title: 'Economic Confidence Index JUN' },
    { id: 13, date: '15 Tem', title: 'Exports Final MAY' },
    { id: 13, date: '15 Tem', title: 'Imports Final MAY' },
    { id: 13, date: '15 Tem', title: 'Tourist Arrivals YoY MAY' },
    { id: 14, date: '16 Tem', title: '2-Year Bond Auction' },
    { id: 14, date: '16 Tem', title: '10-Year Bond Auction' },
    { id: 15, date: '19 Tem', title: 'Central Government Debt MAY' },
    { id: 16, date: '20 Tem', title: 'New Car Registrations YoY JUN' },
    { id: 16, date: '20 Tem', title: 'Business Confidence JUN' },
    { id: 16, date: '20 Tem', title: 'Capacity Utilization JUN' },
    { id: 16, date: '20 Tem', title: '3-Month Bill Auction' },
    { id: 16, date: '20 Tem', title: '6-Month Bill Auction' },
    { id: 17, date: '21 Tem', title: 'TCMB Interest Rate Decision' },
    { id: 17, date: '21 Tem', title: 'Overnight Lending Rate JUL' },
    { id: 17, date: '21 Tem', title: 'Overnight Borrowing Rate JUL' },
    { id: 17, date: '21 Tem', title: 'Foreign Exchange Reserves JUN/16' },
    { id: 18, date: '22 Tem', title: 'Balance of Trade Final MAY' },
    { id: 18, date: '22 Tem', title: 'Economic Confidence Index JUN' },
    { id: 18, date: '22 Tem', title: 'Exports Final MAY' },
    { id: 18, date: '22 Tem', title: 'Imports Final MAY' },
    { id: 18, date: '22 Tem', title: 'Tourist Arrivals YoY MAY' },
    { id: 19, date: '23 Tem', title: '2-Year Bond Auction' },
    { id: 19, date: '23 Tem', title: '10-Year Bond Auction' },
    { id: 20, date: '26 Tem', title: 'Central Government Debt MAY' },
    { id: 21, date: '27 Tem', title: 'Business Confidence JUN' },
    { id: 21, date: '27 Tem', title: 'Capacity Utilization JUN' },
    { id: 21, date: '27 Tem', title: 'TCMB Interest Rate Decision' },
    { id: 21, date: '27 Tem', title: 'Overnight Lending Rate JUL' },
    { id: 21, date: '27 Tem', title: 'Overnight Borrowing Rate JUL' },
    { id: 21, date: '27 Tem', title: 'Foreign Exchange Reserves JUN/23' },
    { id: 21, date: '27 Tem', title: 'Global Supply Chain Pressure Index JUN' },
    { id: 22, date: '28 Tem', title: 'FAO Food Price Index JUN' },
    { id: 22, date: '28 Tem', title: 'Treasury Cash Balance JUN' },
    { id: 23, date: '31 Tem', title: 'Balance of Trade Final JUN' },
    { id: 23, date: '31 Tem', title: 'Economic Confidence Index JUL' },
    { id: 23, date: '31 Tem', title: 'Exports Final JUN' },
    { id: 23, date: '31 Tem', title: 'Imports Final JUN' },
    { id: 23, date: '31 Tem', title: 'Tourism Revenues Q2' },
    { id: 23, date: '31 Tem', title: 'Tourist Arrivals YoY JUN' },
    { id: 24, date: '01 Ağu', title: 'Istanbul Chamber of Industry Manufacturing PMI JUL' },
  ]);

  const handleEventPress = (eventName) => {
    const baseUrl = 'https://tr.investing.com/economic-calendar/';
    const eventSlug = eventName.toLowerCase().replace(/ /g, '-');
    const url = `${baseUrl}${eventSlug}`;
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

        return sortedEvents.slice(0, 2);
      });
    }, 1000 * 60 * 60 * 24); // Update events every 24 hours

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderEvents = () => {
    const firstTwoEvents = events.slice(0, 2);
    return firstTwoEvents.map((event, index) => (
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
