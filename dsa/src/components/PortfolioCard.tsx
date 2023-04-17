import React from 'react';
import { Box, VStack, Text } from 'native-base';

const PortfolioCard = () => {
  return (
    <Box
      bg="#1D1E2C"
      borderRadius={10}
      marginBottom={6}
      padding={4}
      width="100%"
      minHeight={132}
    >
      <Text color="#fff" fontSize={16} fontWeight="bold" marginBottom={2}>
        Ana Portfolio
      </Text>
      <VStack alignItems="flex-start">
        <Text color="#fff" fontSize={24} fontWeight="bold" marginBottom={2}>
          $1234
        </Text>
        <Text color="#fff" fontSize={14}>
          24h Değişim
        </Text>
        <Text color="#fff" fontSize={16} fontWeight="bold">
          %5,6
        </Text>
      </VStack>
    </Box>
  );
};

export default PortfolioCard;
