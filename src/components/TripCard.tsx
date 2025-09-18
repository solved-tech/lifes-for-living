import React from "react";
import Image from "next/image";
import { Card, Badge, Button } from "@/components/ui";
import { Trip } from "@/types";

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = formatDate(startDate);
    const end = formatDate(endDate);
    return `${start} - ${end}`;
  };

  const spotsLeft = trip.spots;
  const isLowAvailability = spotsLeft <= 3;

  return (
    <Card hover className="overflow-hidden">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="text-4xl mb-2">🏞️</div>
            <p className="text-sm font-medium">{trip.destination}</p>
          </div>
        </div>
        {/* Uncomment when you have actual images */}
        {/* <Image
          src={trip.thumbnail}
          alt={trip.title}
          fill
          className="object-cover"
        /> */}
        
        {/* Difficulty badge */}
        <div className="absolute top-3 left-3">
          <Badge variant={trip.difficulty === "Chill" ? "secondary" : "primary"}>
            {trip.difficulty}
          </Badge>
        </div>
        
        {/* Spots left indicator */}
        {isLowAvailability && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-red-100 text-red-700">
              Only {spotsLeft} left!
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and destination */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-deep-navy mb-1">
            {trip.title}
          </h3>
          <p className="text-deep-navy/70 text-sm">{trip.destination}</p>
        </div>

        {/* Blurb */}
        <p className="text-deep-navy/80 text-sm leading-relaxed">
          {trip.blurb}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {trip.badges.slice(0, 3).map((badge, index) => (
            <Badge key={index} variant="default" className="text-xs">
              {badge}
            </Badge>
          ))}
          {trip.badges.length > 3 && (
            <Badge variant="default" className="text-xs">
              +{trip.badges.length - 3} more
            </Badge>
          )}
        </div>

        {/* Date and price */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div>
            <p className="text-sm text-deep-navy/70">
              {formatDateRange(trip.startDate, trip.endDate)}
            </p>
            <p className="text-lg font-semibold text-deep-navy">
              £{trip.priceGBP.toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-deep-navy/70">
              {spotsLeft} spots left
            </p>
          </div>
        </div>

        {/* CTA */}
        <Button 
          href={`/trips/${trip.slug}`} 
          variant="outline" 
          className="w-full"
        >
          See Details
        </Button>
      </div>
    </Card>
  );
};

export default TripCard;
