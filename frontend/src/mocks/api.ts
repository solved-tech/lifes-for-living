import type { Trip, Event, InstagramPost } from '../types/api';

// Mock data
const mockTrips: Trip[] = [
  {
    id: '1',
    title: 'Bali Adventure',
    itinerary: '7 days exploring temples, beaches, and rice terraces',
    imageUrl: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
    bookingUrl: 'https://example.com/book/bali'
  },
  {
    id: '2',
    title: 'Iceland Northern Lights',
    itinerary: '5 days chasing aurora, hot springs, and glaciers',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    bookingUrl: 'https://example.com/book/iceland'
  },
  {
    id: '3',
    title: 'Morocco Desert Safari',
    itinerary: '6 days through Marrakech, Atlas Mountains, and Sahara',
    imageUrl: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop',
    bookingUrl: 'https://example.com/book/morocco'
  },
  {
    id: '4',
    title: 'Japan Cherry Blossom',
    itinerary: '10 days Tokyo to Kyoto during sakura season',
    imageUrl: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=300&fit=crop',
    bookingUrl: 'https://example.com/book/japan'
  }
];

const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Body Confidence Workshop',
    date: '2024-02-15T18:00:00Z',
    description: 'Join me for an empowering evening about self-love and body acceptance'
  },
  {
    id: '2',
    name: 'Travel Photography Masterclass',
    date: '2024-02-22T14:00:00Z',
    description: 'Learn my secrets for capturing stunning travel moments'
  },
  {
    id: '3',
    name: 'Cancer Survivor Support Group',
    date: '2024-03-01T19:00:00Z',
    description: 'A safe space to share experiences and support each other'
  },
  {
    id: '4',
    name: 'Adventure Planning Session',
    date: '2024-03-08T16:00:00Z',
    description: 'Plan your next adventure with tips from my travels'
  }
];

const mockInstagram: InstagramPost[] = [
  {
    id: '1',
    mediaType: 'photo',
    thumbnailUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
    postUrl: 'https://instagram.com/p/example1'
  },
  {
    id: '2',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    postUrl: 'https://instagram.com/p/example2'
  },
  {
    id: '3',
    mediaType: 'photo',
    thumbnailUrl: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=300&fit=crop',
    postUrl: 'https://instagram.com/p/example3'
  },
  {
    id: '4',
    mediaType: 'photo',
    thumbnailUrl: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300&h=300&fit=crop',
    postUrl: 'https://instagram.com/p/example4'
  },
  {
    id: '5',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=300&h=300&fit=crop',
    postUrl: 'https://instagram.com/p/example5'
  },
  {
    id: '6',
    mediaType: 'photo',
    thumbnailUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&h=300&fit=crop',
    postUrl: 'https://instagram.com/p/example6'
  }
];

// Mock API functions
export const mockApi = {
  async getTrips(): Promise<Trip[]> {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return mockTrips;
  },

  async getEvents(): Promise<Event[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockEvents;
  },

  async getInstagramPosts(): Promise<InstagramPost[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockInstagram;
  }
};

// Intercept fetch calls
const originalFetch = window.fetch;
window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof input === 'string' ? input : input.toString();
  
  if (url.includes('/api/trips')) {
    return new Response(JSON.stringify(await mockApi.getTrips()), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  if (url.includes('/api/events')) {
    return new Response(JSON.stringify(await mockApi.getEvents()), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  if (url.includes('/api/instagram')) {
    return new Response(JSON.stringify(await mockApi.getInstagramPosts()), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  return originalFetch(input, init);
};
