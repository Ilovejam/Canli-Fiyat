import React from 'react';
import { Box, VStack, Text } from 'native-base';

const PortfolioCard = () => {
  return (
    <Box
      style={{ 
        backgroundColor: '#2A2F53',
        bgGradient: {
          colors: ['#2A2F53', '#161A39'],
          start: { x: 0, y: 0 },
          end: { x: 0, y: 1 },
        },
        borderRadius:10,
        marginBottom:0,
        padding:14,
        width:"95%",
        minHeight:2,
        shadowColor: 'rgba(23, 27, 58, 0.44)',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.7,
        shadowRadius: 7,
      }}

    >
      <Text color="#fff" fontFamily={"Worksans-Black"} fontSize={11} fontWeight="700" >
        ANA PORTFOLYO
      </Text>
      <VStack alignItems="flex-start">
      <Text style={{ color: "#67BBF9", fontSize: 32, fontWeight:900, marginBottom: 2, marginTop: 3, lineHeight:40 }}>
        $1234
      </Text>

        <Box flexDirection="row" alignItems="center" justifyContent="space-between" width="100%">
          <Text color="#fff" fontSize={14} marginRight={12}>
          Güncel günlük kar
          </Text>
          <Text color="#FCC7D4" fontSize={14} marginLeft={19}>
            -1.481,72
            </Text>
          <Box flexDirection="row" alignItems="center" bg="rgba(252, 199, 212, 1)" paddingX={2} borderRadius={4}>
            
            <Text color="rgba(174, 63, 90, 1)" fontSize={14}>
              -1.23%
            </Text>
          </Box>
        </Box>

        <Box flexDirection="row" alignItems="center" marginTop={2} justifyContent="space-between" width="100%">
          <Text color="#fff" fontSize={14} marginRight={20}>
          Genel kar  
          </Text>
          <Text color="#C7F6E5" fontSize={14} marginLeft={10}>
              41.481,72
            </Text>
          <Box flexDirection="row" alignItems="center" bg="#C7F6E5" paddingX={2} borderRadius={4}>
            
            <Text color="#4EAD68" fontSize={14}>
              +1,19%
            </Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default PortfolioCard;
