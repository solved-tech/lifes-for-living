import {
  Anchor,
  Text,
  Image,
  Box,
  TextInput,
  Burger,
  Drawer,
  ScrollArea,
  Stack,
  Divider
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
    if (itemLower === 'travel') return '/travel';
    if (itemLower === 'events') return '/events';
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
        title="Menu"
        padding="md"
        size="sm"
        position="left"
      >
        <ScrollArea style={{ height: 'calc(100vh - 60px)' }}>
          <Stack gap="md">
            {navItems.map((item) => (
              <Anchor
                key={item}
                component={Link}
                to={getNavHref(item)}
                onClick={closeMobileMenu}
                fw={400}
                fz="md"
                c="dark.8"
                style={{ textDecoration: 'none' }}
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

      {/* MAIN HEADER */}
      <header className="main-header">
        <div className="header-container">
          {/* Mobile Menu Button */}
          <Box className="mobile-burger">
            <Burger opened={mobileMenuOpened} onClick={openMobileMenu} aria-label="Toggle menu" />
          </Box>

          {/* Left section with Logo and Navigation */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo */}
            <div className="header-logo-section">
              <Link to="/">
                <Image 
                  src={logo} 
                  alt="Life's For Living" 
                  className="header-logo-img"
                  fit="contain" 
                />
              </Link>
            </div>
            
            {/* Navigation Menu */}
            <nav className="header-nav">
              {navItems.map((item) => (
                <Anchor
                  key={item}
                  component={Link}
                  to={getNavHref(item)}
                  className={`header-nav-link ${isActive(item) ? 'active' : ''}`}
                >
                  {item}
                </Anchor>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="header-search">
            <TextInput
              placeholder="Search..."
              rightSection={<IconSearch size={16} />}
              radius="md"
              variant="filled"
              className="header-search-input"
            />
          </div>
        </div>
      </header>
    </>
  );
}
