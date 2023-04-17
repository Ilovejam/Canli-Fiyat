import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
            <Text style={styles.dateMonth}>{event.date.substring(3)}</Text>
            <Text style={styles.dateDay}>{event.date.substring(0, 2)}</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{event.title}</Text>
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
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginBottom: 5,
  },
  dateContainer: {
    flexDirection: 'column',
    backgroundColor: 'rgba(145, 255, 128, 0.76)',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
    marginRight: 12, // add margin to the right
  },  
  dateMonth: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: -4,
  },
  dateDay: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    flex: 1,
    backgroundColor:'linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
    paddingVertical: 10,
    paddingRight: 5,
  },
});

export default UpcomingEvents;
