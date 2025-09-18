import React from "react";
import { NewsletterForm } from "@/components/ui";

const NewsletterSection: React.FC = () => {
  const handleNewsletterSubmit = async (email: string) => {
    // Mock newsletter subscription - in a real app, this would call an API
    console.log("Newsletter subscription:", email);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Be the first to know about new trips, travel tips, and exclusive offers. 
              Join our community of adventurous souls.
            </p>
          </div>

          <div className="flex justify-center">
            <NewsletterForm
              onSubmit={handleNewsletterSubmit}
              className="w-full max-w-md"
            />
          </div>

          <p className="text-white/70 text-sm">
            No spam, just pure wanderlust. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
