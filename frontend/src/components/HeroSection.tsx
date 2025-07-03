import { Container, Grid, Stack, Title, Text, Button, Center, Image } from '@mantine/core';

export function HeroSection() {
  return (
    <Container size="xl" py={80} px="xl">
      <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
          <Stack gap="xl" align="center" style={{ maxWidth: '90%' }}>
            <Title order={1} c="dark.8" style={{ letterSpacing: '0.02em' }} ta="center">
              Life's For Living
            </Title>
            <Text size="xl" c="dark.6" fw={300} style={{ 
              letterSpacing: '0.03em', 
              lineHeight: 1.6,
              textAlign: 'center'
            }}>
              Inspiring journeys that connect you with the world's most beautiful destinations and authentic cultural experiences.
            </Text>
            <Button 
              size="lg" 
              variant="outline" 
              color="dark" 
              radius="md"
              fw={400}
              style={{ letterSpacing: '0.05em', width: 'fit-content' }}
            >
              Begin Your Journey
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Center>
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Portrait"
              radius="md"
              style={{ 
                aspectRatio: '1/1',
                objectFit: 'cover',
                maxWidth: 400,
                width: '100%'
              }}
            />
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
