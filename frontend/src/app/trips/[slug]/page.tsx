import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Layout } from "@/components/layout";
import { Button, Badge } from "@/components/ui";
import StructuredData from "@/components/SEO/StructuredData";
import { getTripBySlug, tripsData } from "@/data/trips";

interface TripPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all trips
export async function generateStaticParams() {
  return tripsData.map((trip) => ({
    slug: trip.slug,
  }));
}

// Generate metadata for each trip
export async function generateMetadata({ params }: TripPageProps): Promise<Metadata> {
  const trip = getTripBySlug(params.slug);

  if (!trip) {
    return {
      title: "Trip Not Found | Life's For Living",
    };
  }

  return {
    title: `${trip.title} | Life's For Living`,
    description: trip.blurb,
    openGraph: {
      title: trip.title,
      description: trip.blurb,
      images: [
        {
          url: trip.thumbnail,
          width: 1200,
          height: 630,
          alt: trip.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: trip.title,
      description: trip.blurb,
      images: [trip.thumbnail],
    },
  };
}

const TripPage: React.FC<TripPageProps> = ({ params }) => {
  const trip = getTripBySlug(params.slug);

  if (!trip) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = formatDate(startDate);
    const end = formatDate(endDate);
    return `${start} - ${end}`;
  };

  return (
    <Layout>
      <StructuredData type="trip" trip={trip} />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-200 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-10"></div>
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            {trip.title}
          </h1>
          <p className="text-xl sm:text-2xl mb-6">{trip.destination}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {trip.badges.map((badge, index) => (
              <Badge key={index} variant="default" className="bg-white/20 text-white border-white/30">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
        {/* Placeholder for trip image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="text-6xl mb-4">🏞️</div>
            <p className="text-lg font-medium">{trip.destination}</p>
          </div>
        </div>
      </section>

      {/* Trip Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-deep-navy mb-4">
                  About This Trip
                </h2>
                <p className="text-lg text-deep-navy/80 leading-relaxed">
                  {trip.blurb}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-4">
                  What's Included
                </h3>
                <ul className="space-y-2 text-deep-navy/80">
                  <li>• Accommodation for the duration of the trip</li>
                  <li>• All planned activities and experiences</li>
                  <li>• Local guide and group leader</li>
                  <li>• Some meals (breakfast daily, selected lunches and dinners)</li>
                  <li>• Transportation during the trip</li>
                  <li>• Small group experience (max 16 people)</li>
                </ul>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-off-white rounded-2xl p-6 sticky top-24">
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-deep-navy">
                      £{trip.priceGBP.toLocaleString()}
                    </div>
                    <div className="text-deep-navy/70">per person</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-deep-navy/70">Dates:</span>
                      <span className="font-medium text-deep-navy">
                        {formatDateRange(trip.startDate, trip.endDate)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-deep-navy/70">Duration:</span>
                      <span className="font-medium text-deep-navy">7 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-deep-navy/70">Difficulty:</span>
                      <Badge variant={trip.difficulty === "Chill" ? "secondary" : "primary"}>
                        {trip.difficulty}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-deep-navy/70">Spots left:</span>
                      <span className="font-medium text-deep-navy">{trip.spots}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Book This Trip
                  </Button>

                  <p className="text-sm text-deep-navy/60 text-center">
                    Secure booking • Full refund if cancelled 30+ days before departure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TripPage;
