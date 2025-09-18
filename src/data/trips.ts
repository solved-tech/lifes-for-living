import { Trip } from "@/types";

export const tripsData: Trip[] = [
  {
    slug: "azores-blue-lagoons-2025",
    title: "Azores: Blue Lagoons & Volcano Trails",
    destination: "Azores, Portugal",
    startDate: "2025-06-12",
    endDate: "2025-06-18",
    priceGBP: 1290,
    spots: 12,
    thumbnail: "/images/trips/azores.jpg",
    badges: ["Beginner-friendly", "Nature", "Women-led"],
    blurb: "Thermal pools, crater lakes, dolphin watch, sunrise hikes.",
    difficulty: "Chill",
    popularity: 93,
  },
  {
    slug: "morocco-sahara-stars-2025",
    title: "Morocco: Sahara Under the Stars",
    destination: "Morocco",
    startDate: "2025-10-02",
    endDate: "2025-10-08",
    priceGBP: 1150,
    spots: 14,
    thumbnail: "/images/trips/morocco.jpg",
    badges: ["Culture", "Desert", "Group Vibes"],
    blurb: "Medina wander, dunes at golden hour, campfire music.",
    difficulty: "Active",
    popularity: 88,
  },
  {
    slug: "iceland-northern-lights-2025",
    title: "Iceland: Northern Lights & Hot Springs",
    destination: "Iceland",
    startDate: "2025-03-15",
    endDate: "2025-03-22",
    priceGBP: 1450,
    spots: 10,
    thumbnail: "/images/trips/iceland.jpg",
    badges: ["Winter", "Aurora", "Photography"],
    blurb: "Ice caves, geysers, northern lights, cozy lodges.",
    difficulty: "Chill",
    popularity: 95,
  },
  {
    slug: "bali-yoga-retreat-2025",
    title: "Bali: Yoga & Wellness Retreat",
    destination: "Bali, Indonesia",
    startDate: "2025-08-10",
    endDate: "2025-08-17",
    priceGBP: 980,
    spots: 16,
    thumbnail: "/images/trips/bali.jpg",
    badges: ["Wellness", "Yoga", "Beginner-friendly"],
    blurb: "Daily yoga, temple visits, rice terraces, spa treatments.",
    difficulty: "Chill",
    popularity: 90,
  },
  {
    slug: "peru-machu-picchu-2025",
    title: "Peru: Machu Picchu & Sacred Valley",
    destination: "Peru",
    startDate: "2025-09-05",
    endDate: "2025-09-12",
    priceGBP: 1350,
    spots: 12,
    thumbnail: "/images/trips/peru.jpg",
    badges: ["Adventure", "Culture", "Hiking"],
    blurb: "Ancient ruins, llama encounters, mountain trails, local markets.",
    difficulty: "Active",
    popularity: 92,
  },
  {
    slug: "greece-island-hopping-2025",
    title: "Greece: Island Hopping Adventure",
    destination: "Greek Islands",
    startDate: "2025-07-20",
    endDate: "2025-07-27",
    priceGBP: 1200,
    spots: 14,
    thumbnail: "/images/trips/greece.jpg",
    badges: ["Islands", "Beach", "Culture"],
    blurb: "Santorini sunsets, Mykonos beaches, ancient history, local tavernas.",
    difficulty: "Chill",
    popularity: 89,
  },
];

// Helper functions for filtering and sorting
export const getDestinations = (): string[] => {
  const destinations = tripsData.map(trip => trip.destination);
  return Array.from(new Set(destinations)).sort();
};

export const getMonths = (): string[] => {
  const months = tripsData.map(trip => {
    const date = new Date(trip.startDate);
    return date.toLocaleDateString('en-US', { month: 'long' });
  });
  return Array.from(new Set(months)).sort();
};

export const getPriceRange = (): [number, number] => {
  const prices = tripsData.map(trip => trip.priceGBP);
  return [Math.min(...prices), Math.max(...prices)];
};

export const getAllBadges = (): string[] => {
  const badges = tripsData.flatMap(trip => trip.badges);
  return Array.from(new Set(badges)).sort();
};

// Get trip by slug
export const getTripBySlug = (slug: string): Trip | undefined => {
  return tripsData.find(trip => trip.slug === slug);
};

// Get featured trips (top 3 by popularity)
export const getFeaturedTrips = (): Trip[] => {
  return tripsData
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);
};
