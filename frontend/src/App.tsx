import {
  AppShell,
  Anchor,
  Text,
  Image,
  Container,
  Card,
  Title,
  Group,
  Button,
  Box,
  SimpleGrid,
  rem,
  Center,
  Stack,
  Grid,
  TextInput,
  Space,
  Burger,
  Drawer,
  ScrollArea,
  Divider
} from '@mantine/core';
import { IconBrandInstagram, IconBrandTiktok, IconSearch } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { useDisclosure } from '@mantine/hooks';
import logo from './assets/logo-1.png';
import './index.css';

export default function App() {
  const [mobileMenuOpened, { open: openMobileMenu, close: closeMobileMenu }] = useDisclosure(false);

  const carouselSlides = [
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      title: "Explore the World",
      description: "Discover breathtaking destinations"
    },
    {
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      title: "Find Adventure",
      description: "Create memories that last forever"
    },
    {
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80",
      title: "Connect with Culture",
      description: "Immerse in authentic experiences"
    }
  ];

  const gridImages = [
    { src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80", caption: "Mountain Adventures" },
    { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", caption: "Ocean Views" },
    { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80", caption: "City Escapes" },
    { src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80", caption: "Cultural Journeys" }
  ];

  const navItems = ['Home', 'About', 'Contact'];

  return (
    <AppShell
      padding={0}
      header={{ height: 200 }}
      footer={{ height: 120 }}
    >
      {/* Mobile Menu Drawer */}
      <Drawer
        opened={mobileMenuOpened}
        onClose={closeMobileMenu}
        size="xs"
        padding="xl"
        title={<Text fw={300} fz="xl" style={{ letterSpacing: '0.05em' }}>Menu</Text>}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <ScrollArea h="calc(100% - 60px)" type="never">
          <Stack gap="xl" py="md">
            {navItems.map((item) => (
              <Anchor
                key={item}
                href={`#${item.toLowerCase()}`}
                fw={400}
                fz="lg"
                c="dark.8"
                className="mobile-nav-link"
                style={{ letterSpacing: '0.05em' }}
                onClick={closeMobileMenu}
              >
                {item}
              </Anchor>
            ))}
            <Divider my="md" />
            <Text fw={300} fz="md" c="dark.6" mb="xs">Search</Text>
            <TextInput
              placeholder="Search..."
              rightSection={<IconSearch size={16} />}
              radius="md"
              variant="filled"
            />
          </Stack>
        </ScrollArea>
      </Drawer>

      {/* STICKY HEADER */}
      <AppShell.Header className="sticky-header">
        <Container size="xl" h="100%" px="xl" style={{ position: 'relative' }}>
          {/* Mobile Menu Button - only visible on small screens */}
          <Box className="mobile-menu-button" style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', display: 'none' }}>
            <Burger opened={mobileMenuOpened} onClick={openMobileMenu} aria-label="Toggle menu" />
          </Box>

          {/* Left: Navigation - hidden on small screens */}
          <Group gap="lg" className="left-nav" style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
            {navItems.map((item) => (
              <Anchor
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                fw={400}
                fz="md"
                c="dark.8"
                style={{ 
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.5rem 0'
                }}
              >
                {item}
              </Anchor>
            ))}
          </Group>

          {/* Center: Logo */}
          <Center style={{ height: '100%' }} className="logo-container">
            <div className="logo-wrapper" style={{ 
              height: 180, 
              display: 'flex', 
              alignItems: 'center',
              margin: '15px 0'
            }}>
              <Image 
                src={logo} 
                alt="Life's For Living" 
                style={{ maxHeight: '100%', width: 'auto', maxWidth: '100%' }}
                fit="contain" 
              />
            </div>
          </Center>

          {/* Right: Search - hidden on small screens */}
          <Box className="right-search" style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
            <TextInput
              placeholder="Search..."
              rightSection={<IconSearch size={16} />}
              w={200}
              radius="md"
              variant="filled"
            />
          </Box>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        {/* HERO SECTION - Split Layout */}
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

        <Space h={60} />

        {/* CAROUSEL SECTION */}
        <Container size="xl" px="xl">
          <Carousel
            withIndicators
            height={400}
            slideSize="100%"
            slideGap="md"
            className="elegant-carousel"
          >
            {carouselSlides.map((slide, index) => (
              <Carousel.Slide key={index}>
                <Box
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: rem(8)
                  }}
                >
                  <Stack align="center" gap="xs">
                    <Title order={2} c="white" ta="center" fw={300} style={{ letterSpacing: '0.03em' }}>
                      {slide.title}
                    </Title>
                    <Text size="lg" c="white" ta="center" fw={300} style={{ letterSpacing: '0.02em' }}>
                      {slide.description}
                    </Text>
                  </Stack>
                </Box>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Container>

        <Space h={80} />

        {/* INTRO CARD */}
        <Container size="xl" px="xl">
          <Card shadow="sm" radius="md" p="xl" bg="gray.0">
            <Grid gutter="xl" align="center">
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Stack gap="md">
                  <Title order={3} c="dark.8" fw={300} style={{ letterSpacing: '0.02em' }}>
                    Welcome to Life's For Living
                  </Title>
                  <Text size="lg" c="dark.6" fw={300} style={{ 
                    letterSpacing: '0.02em', 
                    lineHeight: 1.7 
                  }}>
                    We believe that every journey begins with a single step. Our mission is to inspire 
                    you to explore the world, connect with diverse cultures, and create unforgettable memories 
                    that will last a lifetime.
                  </Text>
                  <Text size="md" c="dark.5" fw={300} style={{ 
                    letterSpacing: '0.02em', 
                    lineHeight: 1.6,
                    fontStyle: 'italic'
                  }}>
                    "Traveling – it leaves you speechless, then turns you into a storyteller." – Ibn Battuta
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80"
                  alt="Travel inspiration"
                  radius="md"
                  style={{ width: '100%' }}
                />
              </Grid.Col>
            </Grid>
          </Card>
        </Container>

        <Space h={80} />

        {/* MAIN CONTENT GRID */}
        <Container size="xl" px="xl" pb={80}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            {gridImages.map((item, index) => (
              <Card key={index} shadow="sm" radius="md" p={0} className="grid-card">
                <Image
                  src={item.src}
                  alt={item.caption}
                  h={300}
                  style={{ objectFit: 'cover' }}
                />
                <Box p="md">
                  <Text size="sm" c="dark.6" fw={300} ta="center" style={{ letterSpacing: '0.05em' }}>
                    {item.caption}
                  </Text>
                </Box>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </AppShell.Main>

      {/* FOOTER */}
      <AppShell.Footer className="elegant-footer">
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
      </AppShell.Footer>
    </AppShell>
  );
}
