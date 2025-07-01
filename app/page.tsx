'use client';

import { Container, Title, Text, Grid, Card, Button, Stack, Box, Badge } from '@mantine/core';
import Link from 'next/link';

import { grammarSections } from '@/constants';

export default function HomePage() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="xl" align="center">
        <Box ta="center">
          <Title order={1} size="h2" fw={700} c="blue.7">
            Metoro English Learning
          </Title>
          <Text mt="xs" c="dimmed" size="lg">
            英文法をマスターしよう
          </Text>
        </Box>

        <Box w="100%">
          <Title order={2} size="h3" mb="md" ta="center" c="gray.8">
            文法セクション一覧
          </Title>
          
          <Grid gutter="md">
            {grammarSections.map((section, index) => (
              <Grid.Col span={12} key={section.link}>
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
                      <Badge 
                        variant="light" 
                        color="blue" 
                        size="sm" 
                        mb="xs"
                      >
                        第{index + 1}章
                      </Badge>
                      <Title order={3} size="h4" fw={600} c="gray.8">
                        {section.title}
                      </Title>
                    </Box>
                    
                    <Text size="sm" c="dimmed" lineClamp={2}>
                      {section.description}
                    </Text>
                    
                    <Button
                      component={Link}
                      href={section.link}
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
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
