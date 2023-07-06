import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const RandomScreen = () => {
  useEffect(() => {
    const postData = async () => {
      try {
        const url = 'https://gateway.albforex.com.tr/api/v1/gateway/createleadmobile';

        const data = {
          PhoneNumber: '5071910915',
          firstname: 'test',
          lastname: 'test',
          country: 'Turkey',
          language: 'tr',
        };

        try {
          const response = await axios.post(url, data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    };

    postData();
  }, []);

  return (
    <View>
      <Text>This is the Random Screen</Text>
    </View>
  );
};

export default RandomScreen;
