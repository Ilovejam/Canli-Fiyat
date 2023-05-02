import React from 'react';
import { Box, VStack, Text } from 'native-base';

const PortfolioCard = () => {
  return (
    <Box
      style={{ backgroundColor: "linear-gradient(90deg, rgba(42,47,83,1) 0%, rgba(8,9,17,1) 100%)" }}
      borderRadius={10}
      marginBottom={0}
      padding={4}
      width="90%"
      minHeight={2}
    >
      <Text color="#fff" fontSize={11} fontWeight="bold" >
        ANA PORTFOLIO
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
          <Box flexDirection="row" alignItems="center" bg="#F1AFB0" paddingX={2} borderRadius={4}>
            
            <Text color="#FCC7D4" fontSize={14}>
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
          <Box flexDirection="row" alignItems="center" bg="#B8DEC3" paddingX={2} borderRadius={4}>
            
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
