// Implemented Contact page with TypeScript types and improved structure
import { useState } from 'react';
import { 
  Container, 
  Title, 
  Text, 
  Stack, 
  Group, 
  TextInput, 
  Button, 
  Card, 
  SimpleGrid,
  Anchor,
  Box
} from '@mantine/core';
import { 
  IconBrandTwitter, 
  IconBrandLinkedin, 
  IconBrandInstagram, 
  IconMail 
} from '@tabler/icons-react';
import { subscribeNewsletter } from '../utils/api';

interface SubscriptionResponse {
  success: boolean;
  message: string;
}

export default function Contact() {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setLoading(true);
    try {
      const response: SubscriptionResponse = await subscribeNewsletter(email);
      setMessage(response.message);
      setEmail('');
    } catch (error) {
      setMessage('Subscription failed. Please try again.');
      console.error('Newsletter subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      style={{
        background: `linear-gradient(135deg, var(--color-background) 0%, rgba(219, 192, 240, 0.1) 100%)`,
        padding: '40px 0'
      }}
    >
      <Container size="xl" py={40} px="xl">
        {/* Welcome Section */}
        <Stack gap="lg" align="center" mb={60}>
          <Title order={1} c="primary" style={{ letterSpacing: '0.02em' }} ta="center">
            Let's Connect
          </Title>
          <Text size="xl" c="dark.6" fw={300} style={{ 
            letterSpacing: '0.03em', 
            lineHeight: 1.6,
            textAlign: 'center',
            maxWidth: 600
          }}>
            I'd love to hear from you! Whether you have questions about my journey, want to collaborate, or just want to say hello.
          </Text>
        </Stack>

        {/* Contact Options */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb={60}>
          {/* Business Inquiries */}
          <Card 
            shadow="sm" 
            radius="md" 
            p="xl" 
            style={{
              border: '1px solid var(--color-secondary)',
              background: 'var(--color-background)',
              boxShadow: '0 10px 30px rgba(138, 102, 224, 0.1)'
            }}
          >
            <Stack gap="md">
              <Group>
                <Box 
                  style={{
                    background: 'var(--color-primary)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <IconMail size={24} stroke={1.5} color="white" />
                </Box>
                <Title order={3} c="primary" fw={400} style={{ letterSpacing: '0.02em' }}>
                  Work With Me
                </Title>
              </Group>
              <Text size="lg" c="dark.6" fw={300} style={{ letterSpacing: '0.02em', lineHeight: 1.6 }}>
                For brand partnerships, speaking engagements, and collaboration opportunities.
              </Text>
              <Anchor 
                href="mailto:business@example.com" 
                size="lg"
                fw={400} 
                style={{ letterSpacing: '0.05em', color: 'var(--color-accent)' }}
              >
                business@example.com
              </Anchor>
            </Stack>
          </Card>

          {/* Personal Inquiries */}
          <Card 
            shadow="sm" 
            radius="md" 
            p="xl" 
            style={{
              border: '1px solid var(--color-secondary)',
              background: 'var(--color-background)',
              boxShadow: '0 10px 30px rgba(138, 102, 224, 0.1)'
            }}
          >
            <Stack gap="md">
              <Group>
                <Box 
                  style={{
                    background: 'var(--color-accent)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <IconMail size={24} stroke={1.5} color="white" />
                </Box>
                <Title order={3} c="accent" fw={400} style={{ letterSpacing: '0.02em' }}>
                  Say Hello
                </Title>
              </Group>
              <Text size="lg" c="dark.6" fw={300} style={{ letterSpacing: '0.02em', lineHeight: 1.6 }}>
                For personal messages, support, or just to share your own story with me.
              </Text>
              <Anchor 
                href="mailto:georgie@example.com" 
                size="lg"
                fw={400}
                style={{ letterSpacing: '0.05em', color: 'var(--color-primary)' }}
              >
                georgie@example.com
              </Anchor>
            </Stack>
          </Card>
        </SimpleGrid>

        {/* Social Media */}
        <Card 
          shadow="sm" 
          radius="md" 
          p="xl" 
          mb={60}
          style={{
            border: '1px solid var(--color-secondary)',
            boxShadow: '0 10px 30px rgba(138, 102, 224, 0.1)'
          }}
        >
          <Box
            style={{
              background: 'linear-gradient(to right, rgba(219, 192, 240, 0.1), var(--color-background), rgba(219, 192, 240, 0.1))',
              padding: '20px'
            }}
          >
            <Stack gap="lg" align="center">
              <Title order={3} c="primary" fw={400} style={{ letterSpacing: '0.02em', borderBottom: '1px solid var(--color-secondary)', paddingBottom: '10px' }} ta="center">
                Follow My Journey
              </Title>
              <Group justify="center" gap="xl">
                <Anchor href="https://twitter.com/georgieswallow" target="_blank" aria-label="Twitter" 
                  style={{
                    color: 'var(--color-primary)',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      color: 'var(--color-accent)'
                    }
                  }}
                >
                  <IconBrandTwitter size={32} stroke={1.5} />
                </Anchor>
                <Anchor href="https://linkedin.com/in/georgieswallow" target="_blank" aria-label="LinkedIn"
                  style={{
                    color: 'var(--color-primary)',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      color: 'var(--color-accent)'
                    }
                  }}
                >
                  <IconBrandLinkedin size={32} stroke={1.5} />
                </Anchor>
                <Anchor href="https://instagram.com/georgieswallow" target="_blank" aria-label="Instagram"
                  style={{
                    color: 'var(--color-primary)',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      color: 'var(--color-accent)'
                    }
                  }}
                >
                  <IconBrandInstagram size={32} stroke={1.5} />
                </Anchor>
              </Group>
            </Stack>
          </Box>
        </Card>

        {/* Newsletter */}
        <Card 
          shadow="sm" 
          radius="md" 
          p="xl"
          style={{
            border: '1px solid var(--color-secondary)',
            background: 'linear-gradient(45deg, rgba(57, 72, 175, 0.05), rgba(138, 102, 224, 0.1))',
            boxShadow: '0 10px 30px rgba(138, 102, 224, 0.15)'
          }}
        >
          <Stack gap="md" align="center">
            <Title order={3} c="accent" fw={400} style={{ letterSpacing: '0.02em' }} ta="center">
              Join My Newsletter
            </Title>
            <Text size="lg" c="dark.6" fw={300} style={{ letterSpacing: '0.02em', lineHeight: 1.6, textAlign: 'center' }}>
              Subscribe for uplifting stories, travel adventures, and body confidence tips from my personal journey.
            </Text>
            
            <form onSubmit={handleSubscribe} style={{ width: '100%', maxWidth: 500 }}>
              <Stack gap="md">
                <TextInput
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  radius="md"
                  size="md"
                  required
                  type="email"
                  style={{ width: '100%' }}
                  aria-label="Email for newsletter"
                  styles={{
                    input: {
                      border: '1px solid var(--color-secondary)',
                      '&:focus': {
                        borderColor: 'var(--color-accent)'
                      }
                    }
                  }}
                />
                
                <Button 
                  type="submit"
                  loading={loading}
                  size="md" 
                  variant="outline" 
                  color="primary" 
                  radius="md"
                  fw={400}
                  style={{ letterSpacing: '0.05em' }}
                  fullWidth
                  styles={{
                    root: {
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)',
                      '&:hover': {
                        backgroundColor: 'var(--color-primary)',
                        color: 'white'
                      }
                    }
                  }}
                >
                  Subscribe
                </Button>
                
                {message && (
                  <Text c={message.includes('fail') ? 'red' : 'green'} ta="center" fw={300}>
                    {message}
                  </Text>
                )}
              </Stack>
            </form>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}
