// Trip related types
export interface Trip {
  id: string;
  title: string;
  itinerary: string;
  imageUrl: string;
  bookingUrl: string;
  description?: string;
  location?: string;
  price?: string;
  duration?: string;
  galleryImages?: string[];
  highlights?: string[];
  included?: string[];
}

// Event related types
export interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  imageUrl?: string;
  location?: string;
  capacity?: string;
  isFree?: boolean;
  speakers?: Speaker[];
  materials?: string;
}

export interface Speaker {
  name: string;
  role: string;
  avatarUrl?: string;
  bio?: string;
}

// Instagram related types
export interface InstagramPost {
  id: string;
  thumbnailUrl: string;
  postUrl: string;
  caption?: string;
  mediaType: 'image' | 'video';
  likes?: number;
}
