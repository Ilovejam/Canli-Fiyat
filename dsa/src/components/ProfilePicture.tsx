import React from 'react';
import { Image, Box } from 'native-base';

interface ProfilePictureProps {
  imageUrl: string;
  size: number;
}

const ProfilePicture = ({ imageUrl, size }: ProfilePictureProps) => {
  return (
    <Box
      bg="#F9F9F9"
      width={size}
      height={size}
      borderRadius={size / 2}
      borderWidth={3}
      borderColor="#FFFFFF"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        source={{ uri: imageUrl }}
        alt="profile picture"
        width={size - 6}
        height={size - 6}
        resizeMode="cover"
        borderRadius={size / 2}
      />
    </Box>
  );
};

export default ProfilePicture;
