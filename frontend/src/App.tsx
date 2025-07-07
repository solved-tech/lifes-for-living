import { AppShell } from '@mantine/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { navItems } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import TravelPage from './pages/TravelPage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppShell
        padding={0}
        header={{ height: 80 }}
        footer={{ height: 120 }}
      >
        {/* HEADER */}
        <AppShell.Header className="sticky-header">
          <Header navItems={navItems} />
        </AppShell.Header>

        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<EventDetailsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppShell.Main>

        <AppShell.Footer className="elegant-footer">
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </BrowserRouter>
  );
}
