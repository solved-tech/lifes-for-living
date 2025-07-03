import { AppShell } from '@mantine/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { navItems } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppShell
        padding={0}
        header={{ height: 200 }}
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
