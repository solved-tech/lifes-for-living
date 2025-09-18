import React from "react";
import { Layout } from "@/components/layout";
import {
  Hero,
  Marquee,
  About,
  ExperiencesSection,
  FeaturedTrips,
  TestimonialsSection,
  InstagramSection,
  NewsletterSection,
} from "@/components/sections";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <About />
      <ExperiencesSection />
      <FeaturedTrips />
      <InstagramSection />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
}
