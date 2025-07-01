'use client';

import { Container, Title, Text, Grid, Card, Button, Stack } from '@mantine/core';
import Link from 'next/link';

const sections = [
  { title: 'Vocabulary', description: '語彙力を高める練習問題', link: '/vocabulary' },
  { title: 'Grammar', description: '英文法を体系的にマスター', link: '/grammar' },
  { title: 'Listening', description: '英語の音を聞き分ける力を鍛える', link: '/listening' },
  { title: 'Speaking', description: '英語で話す力を向上させる練習', link: '/speaking' },
];

export default function HomePage() {
  return (
    <Container size="xs" py="xl">
      <Stack gap="lg" align="center">
        <Title order={1} ta="center">Metoro English Learning</Title>
        <Text ta="center" c="dimmed" size="sm">
          セクションを選んで英語学習を始めよう
        </Text>
      </Stack>

      <Grid mt="lg">
        {sections.map((section) => (
          <Grid.Col span={12} key={section.link}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="xs">
                <Title order={3}>{section.title}</Title>
                <Text size="sm" c="dimmed">{section.description}</Text>
                <Button
                  component={Link}
                  href={section.link}
                  variant="light"
                  fullWidth
                >
                  開く
                </Button>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
