import React from "react";
import { Card } from "@/components/ui";
import { highlights } from "@/data/content";

const Highlights: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-off-white to-soft-purple/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-deep-navy">
            Why Choose Life's For Living? 💖
          </h2>
          <p className="text-xl font-subheading text-deep-navy/70 max-w-2xl mx-auto">
            Every detail is thoughtfully planned to create unforgettable experiences ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} hover className="p-8 text-center h-full">
              <div className="space-y-6">
                <div className="text-5xl">{highlight.icon}</div>
                <h3 className="text-2xl font-heading font-semibold text-deep-navy">
                  {highlight.title}
                </h3>
                <p className="text-deep-navy/70 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
