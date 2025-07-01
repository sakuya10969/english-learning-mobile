'use client';

import { Card, Button, Stack, Box, Title, Text } from '@mantine/core';
import Link from 'next/link';

import { HomeSectionCardProps } from '@/types';

const HomeSectionCard = ({ title, description, link }: HomeSectionCardProps) => {
  return (
    <Card 
      shadow="md" 
      padding="lg" 
      radius="lg" 
      withBorder
      style={{
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <Stack gap="sm">
        <Box>
          <Title order={3} size="h4" fw={600} c="gray.8">
            {title}
          </Title>
        </Box>
        
        <Text size="sm" c="dimmed" lineClamp={2}>
          {description}
        </Text>
        
        <Button
          component={Link}
          href={link}
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan' }}
          fullWidth
          radius="md"
          size="md"
          fw={500}
        >
          学習を始める
        </Button>
      </Stack>
    </Card>
  );
}

export default HomeSectionCard;
