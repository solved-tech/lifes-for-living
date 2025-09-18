import React from "react";
import { Button } from "@/components/ui";
import TripCard from "@/components/TripCard";
import { getFeaturedTrips } from "@/data/trips";

const FeaturedTrips: React.FC = () => {
  const featuredTrips = getFeaturedTrips();

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-deep-navy">
            Transformational Adventures ✈️
          </h2>
          <p className="text-xl font-subheading text-deep-navy/70 max-w-3xl mx-auto">
            These aren't just trips — they're carefully crafted experiences designed to help you step outside your comfort zone,
            connect with incredible women, and return home as the most confident version of yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTrips.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>

        <div className="text-center">
          <Button href="/experiences" size="lg">
            Explore All Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
