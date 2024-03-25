import React from 'react';
import { Avatar, Text, Box } from '@mantine/core';

interface BasicProfileProps {
  photoUrl: string;
  userName: string;
}

const BasicProfile: React.FC<BasicProfileProps> = ({ photoUrl, userName }) => (
  <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Avatar src={photoUrl} alt={userName} radius="xl" size="lg" />
    <Text mt="md" size="md">
      {userName}
    </Text>
  </Box>
);

export default BasicProfile;
