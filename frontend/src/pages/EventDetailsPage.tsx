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
  Paper,
  SimpleGrid,
  Avatar,
  List,
  ThemeIcon
} from '@mantine/core';
import { 
  IconArrowLeft, 
  IconCalendar, 
  IconMapPin, 
  IconClock, 
  IconUsers,
  IconCheck
} from '@tabler/icons-react';
import type { Event } from '../types/api';
import styles from './EventDetailsPage.module.css';

export default function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  // Extended mock data for the details page
  const eventImages = [
    'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&h=500&fit=crop',
  ];

  const eventSpeakers = [
    {
      name: "Sarah Johnson",
      role: "Wellness Coach",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      bio: "Sarah is a certified wellness coach with over 10 years of experience helping people transform their lives."
    },
    {
      name: "Michael Chen",
      role: "Nutritionist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      bio: "Michael specializes in plant-based nutrition and has helped hundreds of clients achieve their health goals."
    }
  ];

  const eventDetails = {
    location: "The Wellness Center, 123 Main Street",
    capacity: "Limited to 20 participants",
    materials: "Yoga mat, comfortable clothing, and a journal",
    prerequisites: "No prior experience needed, all levels welcome"
  };

  const eventExpectations = [
    "Learn practical self-care techniques",
    "Connect with a supportive community",
    "Receive personalized guidance",
    "Take home resources for continued practice",
    "Enjoy healthy refreshments"
  ];

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        const selectedEvent = data.find((e: Event) => e.id === eventId);
        setEvent(selectedEvent || null);
      } catch (error) {
        console.error('Failed to fetch event details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const formatDate = (dateString: string) => {
    if (!dateString) return { date: "", time: "" };
    
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      }),
      time: date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    };
  };

  if (loading) {
    return (
      <Center h="50vh">
        <Loader size="lg" c="primary" />
      </Center>
    );
  }

  if (!event) {
    return (
      <Container size="md" py={80}>
        <Box ta="center">
          <Title order={2} mb="xl" c="primary" className={styles.title}>
            Event not found
          </Title>
          <Button 
            component={Link} 
            to="/events" 
            variant="subtle" 
            color="dark"
            leftSection={<IconArrowLeft size={16} stroke={1.5} />}
          >
            Back to all events
          </Button>
        </Box>
      </Container>
    );
  }

  const { date: formattedDate, time: formattedTime } = formatDate(event.date);

  return (
    <Box className={styles.container}>
      <Container size="xl" py={80}>
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Button 
              component={Link} 
              to="/events" 
              variant="subtle" 
              color="dark"
              leftSection={<IconArrowLeft size={16} stroke={1.5} />}
              mb="xl"
              className={styles.backButton}
            >
              Back to all events
            </Button>

            <Box className={styles.eventHeader}>
              <Title className={styles.eventTitle}>{event.name}</Title>
              <Group gap="md" className={styles.eventMeta}>
                <Text className={styles.metaItem}>
                  <IconCalendar size={18} stroke={1.5} style={{ verticalAlign: 'middle' }} /> {formattedDate}
                </Text>
                <Text className={styles.metaItem}>
                  <IconClock size={18} stroke={1.5} style={{ verticalAlign: 'middle' }} /> {formattedTime}
                </Text>
                <Text className={styles.metaItem}>
                  <IconMapPin size={18} stroke={1.5} style={{ verticalAlign: 'middle' }} /> {eventDetails.location}
                </Text>
              </Group>
            </Box>

            <Box className={styles.eventImages}>
              <Image
                src={event.imageUrl || eventImages[0]} 
                radius="md"
                className={styles.mainImage}
                height={400}
              />
            </Box>

            <Box className={styles.eventDescription}>
              <Title order={3} mb="md" className={styles.sectionTitle}>About This Event</Title>
              <Text className={styles.descriptionText}>
                {event.description}
              </Text>
              <Text className={styles.descriptionText} mt="md">
                Join us for an inspiring and transformative event designed to help you connect with yourself
                and others on a deeper level. This interactive workshop combines practical techniques,
                evidence-based approaches, and supportive community to create a truly unique experience.
              </Text>
            </Box>

            <Box className={styles.speakersSection}>
              <Title order={3} mb="xl" className={styles.sectionTitle}>Your Hosts</Title>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                {eventSpeakers.map((speaker, i) => (
                  <Paper key={i} withBorder p="md" radius="md" className={styles.speakerCard}>
                    <Group>
                      <Avatar src={speaker.avatar} size="lg" radius="xl" />
                      <Box>
                        <Text fw={500} size="lg" className={styles.speakerName}>{speaker.name}</Text>
                        <Text size="sm" c="dimmed" className={styles.speakerRole}>{speaker.role}</Text>
                      </Box>
                    </Group>
                    <Text size="sm" mt="md" className={styles.speakerBio}>{speaker.bio}</Text>
                  </Paper>
                ))}
              </SimpleGrid>
            </Box>

            <Box className={styles.expectationsSection}>
              <Title order={3} mb="md" className={styles.sectionTitle}>What You'll Get</Title>
              <List
                spacing="sm"
                size="lg"
                center
                icon={
                  <ThemeIcon color="primary" size={24} radius="xl">
                    <IconCheck size={14} stroke={2} />
                  </ThemeIcon>
                }
              >
                {eventExpectations.map((item, i) => (
                  <List.Item key={i} className={styles.expectationItem}>{item}</List.Item>
                ))}
              </List>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Paper shadow="sm" radius="lg" p="xl" withBorder className={styles.registrationCard}>
              <Title order={3} mb="xl" className={styles.cardTitle}>Event Details</Title>
              
              <Box mb="xl" className={styles.detailsSection}>
                <Group mb="md">
                  <IconCalendar size={20} stroke={1.5} className={styles.detailIcon} />
                  <Box>
                    <Text fw={600} size="sm">Date & Time</Text>
                    <Text size="sm">{formattedDate}, {formattedTime}</Text>
                  </Box>
                </Group>
                
                <Group mb="md">
                  <IconMapPin size={20} stroke={1.5} className={styles.detailIcon} />
                  <Box>
                    <Text fw={600} size="sm">Location</Text>
                    <Text size="sm">{eventDetails.location}</Text>
                  </Box>
                </Group>
                
                <Group mb="md">
                  <IconUsers size={20} stroke={1.5} className={styles.detailIcon} />
                  <Box>
                    <Text fw={600} size="sm">Capacity</Text>
                    <Text size="sm">{eventDetails.capacity}</Text>
                  </Box>
                </Group>
                
                <Group>
                  <IconCheck size={20} stroke={1.5} className={styles.detailIcon} />
                  <Box>
                    <Text fw={600} size="sm">What to Bring</Text>
                    <Text size="sm">{eventDetails.materials}</Text>
                  </Box>
                </Group>
              </Box>

              <Button 
                fullWidth
                size="lg"
                color="primary"
                className={styles.registerButton}
              >
                Register Now
              </Button>
              
              <Text size="xs" ta="center" mt="sm" c="dimmed" className={styles.disclaimer}>
                This is a free community event. Limited spots available.
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
