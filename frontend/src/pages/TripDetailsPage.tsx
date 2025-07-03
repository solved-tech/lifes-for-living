import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Box, 
  Image, 
  Grid, 
  Loader, 
  Center, 
  Group, 
  Badge,
  SimpleGrid,
  Paper
} from '@mantine/core';
import { IconMapPin, IconCalendar, IconClock, IconArrowLeft } from '@tabler/icons-react';
import type { Trip } from '../types/api';
import styles from './TripDetailsPage.module.css';

export default function TripDetailsPage() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);

  // Extended mock data just for the details page
  const tripGallery = [
    '/images/trip-detail-1.jpg',
    '/images/trip-detail-2.jpg',
    '/images/trip-detail-3.jpg',
    '/images/trip-detail-4.jpg'
  ];
  
  const tripHighlights = [
    "Exclusive local experiences",
    "Small intimate group",
    "Wellness focus",
    "Expert local guides",
    "Transportation included",
    "Accommodation at boutique hotels"
  ];
  
  const tripItineraryDetails = [
    {
      day: "Day 1",
      title: "Arrival & Welcome",
      description: "Check into our boutique hotel, welcome drinks, and an orientation walk around the neighborhood."
    },
    {
      day: "Day 2",
      title: "Cultural Immersion",
      description: "Guided tour of historical sites, followed by a cooking class with local ingredients."
    },
    {
      day: "Day 3",
      title: "Nature & Wellness",
      description: "Morning yoga, followed by a hike in the nearby countryside and picnic lunch."
    },
    {
      day: "Day 4",
      title: "Free Exploration",
      description: "A day to explore at your own pace, with optional activities and recommendations."
    },
    {
      day: "Day 5",
      title: "Farewell & Departure",
      description: "Final group breakfast, exchange contacts, and transfer to the airport."
    }
  ];

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await fetch('/api/trips');
        const data = await response.json();
        const selectedTrip = data.find((t: Trip) => t.id === tripId);
        setTrip(selectedTrip || null);
      } catch (error) {
        console.error('Failed to fetch trip details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTripDetails();
  }, [tripId]);

  if (loading) {
    return (
      <Center h="50vh">
        <Loader size="lg" c="primary" />
      </Center>
    );
  }

  if (!trip) {
    return (
      <Container size="md" py={80}>
        <Box ta="center">
          <Title order={2} mb="xl" c="primary" className={styles.title}>
            Trip not found
          </Title>
          <Button 
            component={Link} 
            to="/travel" 
            variant="subtle" 
            color="dark"
            leftSection={<IconArrowLeft size={16} stroke={1.5} />}
          >
            Back to all trips
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.heroSection} style={{ backgroundImage: `url(${trip.imageUrl})` }}>
        <Container size="xl">
          <Box className={styles.heroContent}>
            <Badge size="lg" color="primary" variant="filled" className={styles.tripBadge}>
              Featured Trip
            </Badge>
            <Title className={styles.heroTitle}>{trip.title}</Title>
            <Group gap="md" className={styles.tripMeta}>
              <Text className={styles.metaItem}>
                <IconCalendar size={18} stroke={1.5} style={{ verticalAlign: 'middle' }} /> {trip.itinerary}
              </Text>
              <Text className={styles.metaItem}>
                <IconMapPin size={18} stroke={1.5} style={{ verticalAlign: 'middle' }} /> {trip.title.split(' to ')[1] || "Various Locations"}
              </Text>
            </Group>
          </Box>
        </Container>
      </Box>

      <Container size="xl" py={60}>
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Text className={styles.intro}>
              Join us on an unforgettable journey to {trip.title.split(' to ')[1] || "this amazing destination"}, where we'll 
              explore breathtaking landscapes, immerse in local culture, and create lifelong memories together.
              This trip is designed for those seeking authentic experiences and meaningful connections.
            </Text>

            <Box mt={50} mb={40}>
              <Title order={2} mb="xl" className={styles.sectionTitle}>Trip Gallery</Title>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                {tripGallery.map((img, i) => (
                  <Image
                    key={i}
                    src={trip.imageUrl} // Fallback to the main image since these are mock
                    radius="md"
                    className={styles.galleryImage}
                  />
                ))}
              </SimpleGrid>
            </Box>

            <Box mt={50} mb={40}>
              <Title order={2} mb="xl" className={styles.sectionTitle}>Itinerary</Title>
              <Box className={styles.itineraryTimeline}>
                {tripItineraryDetails.map((item, i) => (
                  <Box key={i} className={styles.timelineItem}>
                    <Box className={styles.timelineBullet}>
                      <IconClock size={20} stroke={1.5} />
                    </Box>
                    <Box className={styles.timelineContent}>
                      <Text className={styles.timelineDay}>{item.day}</Text>
                      <Title order={4} className={styles.timelineTitle}>{item.title}</Title>
                      <Text className={styles.timelineDescription}>{item.description}</Text>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Paper shadow="sm" radius="lg" p="xl" withBorder className={styles.bookingCard}>
              <Title order={3} mb="md" className={styles.cardTitle}>Reserve Your Spot</Title>
              
              <Box mb="xl">
                <Text fw={700} size="xl" c="primary" mb={5}>€2,499</Text>
                <Text size="sm" c="dimmed">per person, includes accommodation</Text>
              </Box>

              <Box mb="xl">
                <Text fw={600} mb={10} className={styles.highlightsTitle}>Trip Highlights:</Text>
                <Box className={styles.highlightsList}>
                  {tripHighlights.map((highlight, i) => (
                    <Text key={i} className={styles.highlightItem}>• {highlight}</Text>
                  ))}
                </Box>
              </Box>

              <Button 
                component="a"
                href={trip.bookingUrl}
                target="_blank"
                fullWidth
                size="lg"
                color="primary"
                className={styles.bookButton}
              >
                Book Now
              </Button>
              
              <Text size="xs" ta="center" mt="sm" c="dimmed" className={styles.disclaimer}>
                Limited spots available. Deposit of €500 required.
              </Text>
            </Paper>

            <Button 
              component={Link} 
              to="/travel" 
              variant="subtle" 
              color="dark"
              mt="xl"
              leftSection={<IconArrowLeft size={16} stroke={1.5} />}
              className={styles.backButton}
            >
              Back to all trips
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
