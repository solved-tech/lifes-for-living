import { useState, useEffect } from 'react';
import { Container, Title, Text, Box, Image, SimpleGrid, Loader, Center, Overlay } from '@mantine/core';
import { IconBrandInstagram, IconPlayerPlay } from '@tabler/icons-react';
import type { InstagramPost } from '../types/api';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch Instagram posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
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
      <Container size="xl" py={60} px="xl">
        <Box mb={50} ta="center">
          <Box className={styles.headerIcon}>
            <IconBrandInstagram size={40} stroke={1.5} />
          </Box>
          <Title order={1} c="primary" className={styles.title}>
            Life Through My Lens
          </Title>
          <Text size="xl" c="dark.6" fw={300} className={styles.subtitle}>
            Follow my adventures, body positivity journey, and daily inspiration
          </Text>
        </Box>

        <SimpleGrid 
          cols={{ base: 2, sm: 3, lg: 4 }} 
          spacing="md"
          className={styles.gallery}
        >
          {posts.map((post) => (
            <Box
              key={post.id}
              className={styles.postContainer}
              onClick={() => window.open(post.postUrl, '_blank')}
            >
              <Box className={styles.imageWrapper}>
                <Image
                  src={post.thumbnailUrl}
                  alt={`Instagram post ${post.id}`}
                  className={styles.postImage}
                />
                
                <Overlay 
                  className={styles.overlay}
                  opacity={0}
                  color="#000"
                >
                  <Box className={styles.overlayContent}>
                    {post.mediaType === 'video' ? (
                      <IconPlayerPlay size={30} stroke={1.5} />
                    ) : (
                      <IconBrandInstagram size={30} stroke={1.5} />
                    )}
                  </Box>
                </Overlay>
                
                {post.mediaType === 'video' && (
                  <Box className={styles.videoIndicator}>
                    <IconPlayerPlay size={16} stroke={1.5} />
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <Box ta="center" mt={40}>
          <Text c="dark.6" size="sm" className={styles.followText}>
            Follow{' '}
            <Text 
              component="a" 
              href="https://instagram.com/georgieswallow" 
              target="_blank"
              className={styles.instagramLink}
            >
              @georgieswallow
            </Text>
            {' '}for daily inspiration
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
