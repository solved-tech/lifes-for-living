import React from "react";
import { Testimonial } from "@/components/ui";
import { testimonials } from "@/data/content";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-deep-navy">
            Stories of Transformation 💫
          </h2>
          <p className="text-xl font-subheading text-deep-navy/70 max-w-2xl mx-auto">
            Real women sharing how saying YES changed everything
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
