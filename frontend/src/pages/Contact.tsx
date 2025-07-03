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
  Anchor
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
    <Container size="xl" py={80} px="xl">
      {/* Welcome Section */}
      <Stack gap="lg" align="center" mb={60}>
        <Title order={1} c="dark.8" style={{ letterSpacing: '0.02em' }} ta="center">
          Get In Touch
        </Title>
        <Text size="xl" c="dark.6" fw={300} style={{ 
          letterSpacing: '0.03em', 
          lineHeight: 1.6,
          textAlign: 'center',
          maxWidth: 600
        }}>
          We'd love to hear from you. Whether you have a question, feedback, or just want to say hello.
        </Text>
      </Stack>

      {/* Contact Options */}
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb={60}>
        {/* Business Inquiries */}
        <Card shadow="sm" radius="md" p="xl" withBorder>
          <Stack gap="md">
            <Group>
              <IconMail size={24} stroke={1.5} />
              <Title order={3} fw={300} style={{ letterSpacing: '0.02em' }}>
                Business Inquiries
              </Title>
            </Group>
            <Text size="lg" c="dark.6" fw={300} style={{ letterSpacing: '0.02em', lineHeight: 1.6 }}>
              For partnerships, collaborations, and business opportunities.
            </Text>
            <Anchor 
              href="mailto:business@example.com" 
              size="lg"
              fw={400} 
              style={{ letterSpacing: '0.05em' }}
            >
              business@example.com
            </Anchor>
          </Stack>
        </Card>

        {/* Personal Inquiries */}
        <Card shadow="sm" radius="md" p="xl" withBorder>
          <Stack gap="md">
            <Group>
              <IconMail size={24} stroke={1.5} />
              <Title order={3} fw={300} style={{ letterSpacing: '0.02em' }}>
                Personal Messages
              </Title>
            </Group>
            <Text size="lg" c="dark.6" fw={300} style={{ letterSpacing: '0.02em', lineHeight: 1.6 }}>
              For personal correspondence and direct communication.
            </Text>
            <Anchor 
              href="mailto:me@example.com" 
              size="lg"
              fw={400}
              style={{ letterSpacing: '0.05em' }}
            >
              me@example.com
            </Anchor>
          </Stack>
        </Card>
      </SimpleGrid>

      {/* Social Media */}
      <Card shadow="sm" radius="md" p="xl" withBorder mb={60}>
        <Stack gap="lg" align="center">
          <Title order={3} fw={300} style={{ letterSpacing: '0.02em' }} ta="center">
            Connect With Us
          </Title>
          <Group justify="center" gap="xl">
            <Anchor href="https://twitter.com/example" target="_blank" aria-label="Twitter">
              <IconBrandTwitter size={32} stroke={1.5} />
            </Anchor>
            <Anchor href="https://linkedin.com/company/example" target="_blank" aria-label="LinkedIn">
              <IconBrandLinkedin size={32} stroke={1.5} />
            </Anchor>
            <Anchor href="https://instagram.com/example" target="_blank" aria-label="Instagram">
              <IconBrandInstagram size={32} stroke={1.5} />
            </Anchor>
          </Group>
        </Stack>
      </Card>

      {/* Newsletter */}
      <Card shadow="sm" radius="md" p="xl" withBorder>
        <Stack gap="md" align="center">
          <Title order={3} fw={300} style={{ letterSpacing: '0.02em' }} ta="center">
            Join Our Newsletter
          </Title>
          <Text size="lg" c="dark.6" fw={300} style={{ letterSpacing: '0.02em', lineHeight: 1.6, textAlign: 'center' }}>
            Stay updated with our latest journeys, tips, and exclusive offers.
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
              />
              
              <Button 
                type="submit"
                loading={loading}
                size="md" 
                variant="outline" 
                color="dark" 
                radius="md"
                fw={400}
                style={{ letterSpacing: '0.05em' }}
                fullWidth
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
  );
}
