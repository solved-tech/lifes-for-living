"use client";

import React from "react";
import { TripFilters, SortOption } from "@/types";
import { getDestinations, getMonths, getPriceRange } from "@/data/trips";

interface FilterBarProps {
  filters: TripFilters;
  sortBy: string;
  onFiltersChange: (filters: TripFilters) => void;
  onSortChange: (sortBy: string) => void;
  resultsCount: number;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  sortBy,
  onFiltersChange,
  onSortChange,
  resultsCount,
}) => {
  const destinations = getDestinations();
  const months = getMonths();
  const [minPrice, maxPrice] = getPriceRange();

  const sortOptions: SortOption[] = [
    { value: "date", label: "Date (Soonest)" },
    { value: "price-low", label: "Price (Low to High)" },
    { value: "price-high", label: "Price (High to Low)" },
    { value: "popularity", label: "Popularity" },
  ];

  const handleFilterChange = (key: keyof TripFilters, value: string | [number, number] | undefined) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== undefined && value !== "All" && value !== ""
  );

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          {/* Results count and clear filters */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-heading font-bold text-deep-navy">
              {resultsCount} {resultsCount === 1 ? "Trip" : "Trips"} Available
            </h2>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-primary hover:text-primary/80 font-medium text-sm"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* Destination */}
            <div>
              <label className="block text-sm font-medium text-deep-navy mb-2">
                Destination
              </label>
              <select
                value={filters.destination || ""}
                onChange={(e) => handleFilterChange("destination", e.target.value || undefined)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Destinations</option>
                {destinations.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>
            </div>

            {/* Month */}
            <div>
              <label className="block text-sm font-medium text-deep-navy mb-2">
                Month
              </label>
              <select
                value={filters.month || ""}
                onChange={(e) => handleFilterChange("month", e.target.value || undefined)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Months</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-sm font-medium text-deep-navy mb-2">
                Difficulty
              </label>
              <select
                value={filters.difficulty || "All"}
                onChange={(e) => handleFilterChange("difficulty", e.target.value === "All" ? undefined : e.target.value as "Chill" | "Active")}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="All">All Levels</option>
                <option value="Chill">Chill</option>
                <option value="Active">Active</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-deep-navy mb-2">
                Max Price
              </label>
              <select
                value={filters.priceRange?.[1] || maxPrice}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value === maxPrice) {
                    handleFilterChange("priceRange", undefined);
                  } else {
                    handleFilterChange("priceRange", [minPrice, value]);
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value={maxPrice}>Any Price</option>
                <option value={1000}>Under £1,000</option>
                <option value={1200}>Under £1,200</option>
                <option value={1400}>Under £1,400</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-deep-navy mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
