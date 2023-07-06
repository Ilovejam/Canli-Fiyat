import React from 'react';
import { Box, VStack, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const PortfolioCard = () => {
  return (
    <Box
      style={{
        borderRadius: 10,
        marginBottom: 10,
        width: '95%',
        minHeight: 120,
        shadowColor: 'rgba(23, 27, 58, 0.44)',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.7,
        shadowRadius: 7,
        marginTop: 0,
        marginLeft: 10,
      }}
    >
      <LinearGradient
        colors={['#2A2F53', '#161A39']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderRadius: 10,
          flex: 1,
          padding: 10,
        }}
      >
        <VStack alignItems="flex-start" space={1}>
          <Text
            color="#fff"
            fontFamily="Worksans-Black"
            fontSize={14}
            fontWeight="700"
          >
            ANA PORTFOLYO
          </Text>
          <Text
            color="#67BBF9"
            fontSize={30}
            fontWeight="900"
            lineHeight={30}
          >
            $123.456
          </Text>
          <Box flexDirection="row" alignItems="center" justifyContent="space-between" width="100%">
            <Text color="#fff" fontSize={13} marginRight={6}>
              Güncel günlük kar
            </Text>
            <Text color="#FCC7D4" fontSize={10} marginRight={-108}>
              -1.481,72
            </Text>
            <Box
              flexDirection="row"
              alignItems="center"
              backgroundColor="rgba(252, 199, 212, 1)"
              p={1.5}
              borderRadius={4}
            >
              <Text color="rgba(174, 63, 90, 1)" fontSize={10}>
                -1.23%
              </Text>
            </Box>
          </Box>
          <Box flexDirection="row" alignItems="center" justifyContent="space-between" width="100%">
            <Text color="#fff" fontSize={13} marginRight={8}>
              Genel kar
            </Text>
            <Text color="#C7F6E5" fontSize={10} marginRight={-140}>
              41.481,72
            </Text>
            <Box flexDirection="row" alignItems="center" backgroundColor="#C7F6E5" p={1.5} borderRadius={4}>
              <Text color="#4EAD68" fontSize={10}>
                +1,19%
              </Text>
            </Box>
          </Box>
        </VStack>
      </LinearGradient>
    </Box>
  );
};

export default PortfolioCard;
