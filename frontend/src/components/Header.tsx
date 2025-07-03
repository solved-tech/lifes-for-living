import {
  Anchor,
  Text,
  Image,
  Container,
  Box,
  TextInput,
  Burger,
  Drawer,
  ScrollArea,
  Stack,
  Divider,
  Group,
  Center
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-1.png';

type HeaderProps = {
  navItems: string[];
};

export function Header({ navItems }: HeaderProps) {
  const [mobileMenuOpened, { open: openMobileMenu, close: closeMobileMenu }] = useDisclosure(false);
  const location = useLocation();

  // Helper function to get the appropriate href for navigation items
  const getNavHref = (item: string): string => {
    const itemLower = item.toLowerCase();
    if (itemLower === 'home') return '/';
    if (itemLower === 'contact') return '/contact';
    return `#${itemLower}`;
  };

  // Check if the current path matches the nav item
  const isActive = (item: string): boolean => {
    const itemLower = item.toLowerCase();
    if (itemLower === 'home') return location.pathname === '/';
    return location.pathname === `/${itemLower}`;
  };

  return (
    <>
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
                component={Link}
                to={getNavHref(item)}
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
      <div className="sticky-header">
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
                component={Link}
                to={getNavHref(item)}
                className={`nav-link ${isActive(item) ? 'active' : ''}`}
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
      </div>
    </>
  );
}
