import { useState, useEffect } from 'react';
import { Container, Title, Text, Box, Card, Stack, Loader, Center, Badge } from '@mantine/core';
import { IconCalendar, IconUsers, IconHeart } from '@tabler/icons-react';
import type { Event } from '../types/api';
import styles from './EventsPage.module.css';
import { Link } from 'react-router-dom';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      time: date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    };
  };

  const getEventIcon = (name: string) => {
    if (name.toLowerCase().includes('workshop') || name.toLowerCase().includes('confidence')) {
      return <IconHeart size={20} stroke={1.5} />;
    }
    if (name.toLowerCase().includes('support') || name.toLowerCase().includes('group')) {
      return <IconUsers size={20} stroke={1.5} />;
    }
    return <IconCalendar size={20} stroke={1.5} />;
  };

  if (loading) {
    return (
      <Center h="50vh">
        <Loader size="lg" c="primary" />
      </Center>
    );
  }

  return (
    <Box className={styles.container}>
      <Container size="md" py={40} px="xl">
        <Box mb={60} className={styles.headerSection}>
          <Title order={1} c="primary" style={{ letterSpacing: '0.02em', textAlign: 'center' }}>
            Community Events
          </Title>
          <Text size="xl" c="dark.6" fw={300} style={{ 
            letterSpacing: '0.03em', 
            lineHeight: 1.6,
            textAlign: 'center',
            maxWidth: 600,
            margin: '0 auto'
          }}>
            Join me for workshops, support groups, and inspiring gatherings
          </Text>
        </Box>

        <Stack gap="xl">
          {events.map((event) => {
            const dateInfo = formatDate(event.date);
            return (
              <Card 
                key={event.id} 
                className={styles.eventCard} 
                shadow="sm" 
                radius="lg" 
                p="xl"
                component={Link}
                to={`/events/${event.id}`}
              >
                <Box className={styles.cardContent}>
                  <Box className={styles.dateSection}>
                    <Box className={styles.dateBox}>
                      <Text className={styles.day}>{dateInfo.day}</Text>
                      <Text className={styles.month}>{dateInfo.month}</Text>
                    </Box>
                    <Text className={styles.time}>{dateInfo.time}</Text>
                  </Box>
                  
                  <Box className={styles.eventInfo}>
                    <Box className={styles.eventHeader}>
                      <Box className={styles.iconWrapper}>
                        {getEventIcon(event.name)}
                      </Box>
                      <Title order={3} c="primary" className={styles.eventName}>
                        {event.name}
                      </Title>
                    </Box>
                    
                    <Text c="dark.6" className={styles.description}>
                      {event.description}
                    </Text>
                    
                    <Badge 
                      variant="light" 
                      color="violet" 
                      className={styles.badge}
                    >
                      View Details
                    </Badge>
                  </Box>
                </Box>
              </Card>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
