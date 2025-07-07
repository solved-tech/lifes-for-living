import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Box, Image, Card, SimpleGrid, Loader, Center } from '@mantine/core';
import { IconMapPin, IconCalendar } from '@tabler/icons-react';
import type { Trip } from '../types/api';
import styles from './TravelPage.module.css';

export default function TravelPage() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch('/api/trips');
        const data = await response.json();
        setTrips(data);
      } catch (error) {
        console.error('Failed to fetch trips:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  if (loading) {
    return (
      <Center h="50vh">
        <Loader size="lg" c="primary" />
      </Center>
    );
  }

  return (
    <Box className={styles.container}>
      <Container size="xl" py={40} px="xl">
        <Box mb={60} className={styles.headerSection}>
          <Title order={1} c="primary" style={{ letterSpacing: '0.02em', textAlign: 'center' }}>
            My Upcoming Adventures
          </Title>
          <Text size="xl" c="dark.6" fw={300} style={{ 
            letterSpacing: '0.03em', 
            lineHeight: 1.6,
            textAlign: 'center',
            maxWidth: 600,
            margin: '0 auto'
          }}>
            Join me on these incredible journeys around the world
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {trips.map((trip) => (
            <Card key={trip.id} className={styles.tripCard} shadow="md" radius="lg" p={0} h="100%">
              <Box className={styles.imageContainer}>
                <Image
                  src={trip.imageUrl}
                  alt={trip.title}
                  h={250}
                  className={styles.tripImage}
                />
                <Box className={styles.overlay}>
                  <IconMapPin size={20} stroke={1.5} />
                </Box>
              </Box>
              
              <Box p="lg" className={styles.cardContent}>
                <Title order={3} c="primary" mb="xs" className={styles.tripTitle}>
                  {trip.title}
                </Title>
                
                <Text c="dark.6" size="sm" mb="md" className={styles.itinerary}>
                  <IconCalendar size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} stroke={1.5} />
                  {trip.itinerary}
                </Text>
                
                <Box mt="auto">
                  <Button
                    component="a"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    fullWidth
                    variant="filled"
                    color="accent"
                    className={styles.viewButton}
                    style={{ opacity: 1, visibility: 'visible' }}
                  >
                    View Details
                  </Button>
                </Box>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
