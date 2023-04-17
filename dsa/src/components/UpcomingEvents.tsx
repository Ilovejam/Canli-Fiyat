import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      date: '22 Feb',
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      date: '26 Feb',
      title: 'Consectetur adipiscing elit',
    },
    {
      id: 3,
      date: '2 Mar',
      title: 'Sed do eiusmod tempor',
    },
  ]);

  const renderEvents = () => {
    return events.map((event) => {
      return (
        <TouchableOpacity style={styles.eventContainer} key={event.id}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{event.date}</Text>
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
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginBottom: 10,
  },
  dateContainer: {
    backgroundColor: '#06bcee',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  dateText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
    paddingVertical: 10,
    paddingRight: 10,
  },
});

export default UpcomingEvents;
