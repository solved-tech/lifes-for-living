import { Container, Anchor, Text, Group, Stack } from '@mantine/core';
import { IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react';

export function Footer() {
  return (
    <div className="elegant-footer">
      <Container size="xl" h="100%" px="xl">
        <Stack align="center" justify="center" h="100%" gap="md">
          <Group gap="xl">
            <Anchor href="#privacy" c="dark.6" fw={300} style={{ letterSpacing: '0.05em' }}>Privacy</Anchor>
            <Anchor href="#terms" c="dark.6" fw={300} style={{ letterSpacing: '0.05em' }}>Terms</Anchor>
            <Anchor href="#contact" c="dark.6" fw={300} style={{ letterSpacing: '0.05em' }}>Contact</Anchor>
          </Group>
          <Group gap="md">
            <Anchor href="#instagram" aria-label="Instagram" className="social-link">
              <IconBrandInstagram size={24} stroke={1.5} />
            </Anchor>
            <Anchor href="#tiktok" aria-label="TikTok" className="social-link">
              <IconBrandTiktok size={24} stroke={1.5} />
            </Anchor>
          </Group>
          <Text size="sm" c="dark.5" fw={300} style={{ letterSpacing: '0.03em' }}>
            {new Date().getFullYear()} Life's For Living. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}
