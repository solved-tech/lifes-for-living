import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Box, Image, Card, SimpleGrid, Loader, Center } from '@mantine/core';
import { IconMapPin, IconCalendar } from '@tabler/icons-react';
import type { Trip } from '../types/api';
import styles from './TravelPage.module.css';
import { Link } from 'react-router-dom';

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
      <Container size="xl" py={80} px="xl">
        <Box mb={60} className={styles.headerSection}>
          <Title order={1} c="primary" className={styles.title}>
            My Upcoming Adventures
          </Title>
          <Text size="xl" c="dark.6" fw={300} className={styles.subtitle}>
            Join me on these incredible journeys around the world
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {trips.map((trip) => (
            <Card key={trip.id} className={styles.tripCard} shadow="md" radius="lg" p={0}>
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
                
                <Button
                  component={Link}
                  to={`/travel/${trip.id}`}
                  fullWidth
                  variant="filled"
                  color="primary"
                  className={styles.viewButton}
                >
                  View Details
                </Button>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
