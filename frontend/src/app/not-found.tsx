import React from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-20 bg-off-white min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="text-8xl">🗺️</div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-deep-navy">
              Oops! You've wandered off the path
            </h1>
            <p className="text-xl text-deep-navy/70 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. But don't worry - there are plenty of amazing adventures waiting for you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/" size="lg">
                Go Home
              </Button>
              <Button href="/trips" variant="outline" size="lg">
                Explore Trips
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
