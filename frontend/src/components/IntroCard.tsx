import { Card, Grid, Stack, Title, Text, Image, Container, Space } from '@mantine/core';

export function IntroCard() {
  return (
    <>
      <Space h={{ base: 60, sm: 60, md: 80 }} />
      <Container size="xl" px="xl">
        <Card shadow="sm" radius="md" p="xl" bg="gray.0">
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack gap="md">
                <Title order={3} c="dark.8" fw={300} style={{ letterSpacing: '0.02em' }}>
                  Welcome
                </Title>
                <Text size="lg" c="dark.6" fw={300} style={{ 
                  letterSpacing: '0.02em', 
                  lineHeight: 1.7 
                }}>
                  We believe that every journey begins with a single step. Our mission is to inspire 
                  you to explore the world, connect with diverse cultures, and create unforgettable memories 
                  that will last a lifetime.
                </Text>
                <Text size="md" c="dark.5" fw={300} style={{ 
                  letterSpacing: '0.02em', 
                  lineHeight: 1.6,
                  fontStyle: 'italic'
                }}>
                  "Traveling – it leaves you speechless, then turns you into a storyteller." – Ibn Battuta
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Image
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80"
                alt="Travel inspiration"
                radius="md"
                style={{ width: '100%' }}
              />
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
