'use client';

import { Container, Title, Text, Grid, Box, Stack } from '@mantine/core';

import HomeSectionCard from '@/components/HomeSectionCard';
import { homeSections } from '@/constants';

export default function HomePage() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="xl" align="center">
        <Box ta="center">
          <Title order={1} size="h2" fw={700} c="blue.7">
            Metoro English
          </Title>
          <Text mt="xs" c="dimmed" size="lg">
            英語学習を始めよう
          </Text>
        </Box>

        <Box w="100%">
          <Title order={2} size="h3" mb="md" ta="center" c="gray.8">
            セクションを選択
          </Title>

          <Grid gutter="md">
            {homeSections.map((section, index) => (
              <Grid.Col span={12} key={section.link}>
                <HomeSectionCard
                  title={section.title}
                  description={section.description}
                  link={section.link}
                  index={index}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
