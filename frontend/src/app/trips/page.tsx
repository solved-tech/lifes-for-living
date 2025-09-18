"use client";

import React, { useState, useMemo } from "react";
import { Layout } from "@/components/layout";
import FilterBar from "@/components/FilterBar";
import TripCard from "@/components/TripCard";
import { tripsData } from "@/data/trips";
import { TripFilters, Trip } from "@/types";

const TripsPage: React.FC = () => {
  const [filters, setFilters] = useState<TripFilters>({});
  const [sortBy, setSortBy] = useState("date");

  // Filter and sort trips
  const filteredAndSortedTrips = useMemo(() => {
    const filtered = tripsData.filter((trip) => {
      // Destination filter
      if (filters.destination && trip.destination !== filters.destination) {
        return false;
      }

      // Month filter
      if (filters.month) {
        const tripMonth = new Date(trip.startDate).toLocaleDateString('en-US', { month: 'long' });
        if (tripMonth !== filters.month) {
          return false;
        }
      }

      // Difficulty filter
      if (filters.difficulty && trip.difficulty !== filters.difficulty) {
        return false;
      }

      // Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (trip.priceGBP < min || trip.priceGBP > max) {
          return false;
        }
      }

      return true;
    });

    // Sort trips
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        case "price-low":
          return a.priceGBP - b.priceGBP;
        case "price-high":
          return b.priceGBP - a.priceGBP;
        case "popularity":
          return b.popularity - a.popularity;
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters, sortBy]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Your Next Adventure Awaits
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Discover carefully curated trips that blend adventure, community, and personal growth. 
            Each journey is designed to create lasting memories and meaningful connections.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar
        filters={filters}
        sortBy={sortBy}
        onFiltersChange={setFilters}
        onSortChange={setSortBy}
        resultsCount={filteredAndSortedTrips.length}
      />

      {/* Trips Grid */}
      <section className="py-12 bg-off-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedTrips.map((trip) => (
                <TripCard key={trip.slug} trip={trip} />
              ))}
            </div>
          ) : (
            <EmptyState onClearFilters={() => setFilters({})} />
          )}
        </div>
      </section>
    </Layout>
  );
};

// Empty State Component
const EmptyState: React.FC<{ onClearFilters: () => void }> = ({ onClearFilters }) => {
  return (
    <div className="text-center py-20">
      <div className="max-w-md mx-auto">
        <div className="text-6xl mb-6">🗺️</div>
        <h3 className="text-2xl font-heading font-bold text-deep-navy mb-4">
          No trips found
        </h3>
        <p className="text-deep-navy/70 mb-8">
          We couldn't find any trips matching your criteria. Try adjusting your filters or explore all our amazing destinations.
        </p>
        <button
          onClick={onClearFilters}
          className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-600 transition-colors"
        >
          Show All Trips
        </button>
      </div>
    </div>
  );
};

export default TripsPage;
