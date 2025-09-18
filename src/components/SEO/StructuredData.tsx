import React from "react";
import { Trip } from "@/types";

interface StructuredDataProps {
  type: "website" | "trip";
  trip?: Trip;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, trip }) => {
  const getWebsiteStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Life's For Living",
    "description": "Adventures that change how you see the world. Join Georgie on trips that are equal parts joy, courage and community.",
    "url": "https://lifesforliving.com",
    "logo": "https://lifesforliving.com/images/logo.png",
    "sameAs": [
      "https://instagram.com/lifesforliving",
      "https://youtube.com/@lifesforliving",
      "https://tiktok.com/@lifesforliving"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@lifesforliving.com"
    },
    "founder": {
      "@type": "Person",
      "name": "Georgie",
      "description": "Adventure creator and travel guide"
    }
  });

  const getTripStructuredData = (tripData: Trip) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tripData.title,
    "description": tripData.blurb,
    "image": `https://lifesforliving.com${tripData.thumbnail}`,
    "touristType": tripData.difficulty === "Chill" ? "Leisure" : "Adventure",
    "itinerary": {
      "@type": "ItemList",
      "name": `${tripData.title} Itinerary`,
      "description": tripData.blurb
    },
    "offers": {
      "@type": "Offer",
      "price": tripData.priceGBP,
      "priceCurrency": "GBP",
      "availability": tripData.spots > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "validFrom": new Date().toISOString(),
      "validThrough": tripData.startDate
    },
    "startDate": tripData.startDate,
    "endDate": tripData.endDate,
    "location": {
      "@type": "Place",
      "name": tripData.destination
    },
    "organizer": {
      "@type": "Organization",
      "name": "Life's For Living",
      "url": "https://lifesforliving.com"
    }
  });

  const structuredData = type === "website" 
    ? getWebsiteStructuredData() 
    : trip 
    ? getTripStructuredData(trip)
    : null;

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;
