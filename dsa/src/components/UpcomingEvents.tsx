import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UpcomingEventProps {
  date: string;
  title: string;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({ date, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateBox}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dateBox: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleBox: {
    flex: 1,
    marginLeft: 10,
    padding: 4,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default UpcomingEvent;
