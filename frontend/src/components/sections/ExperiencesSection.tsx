import React from "react";
import { Card, Button } from "@/components/ui";
import { experiences } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ExperiencesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-off-white to-soft-gray/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-deep-navy">
            Ways to Connect & Grow
          </h2>
          <p className="text-xl font-subheading text-deep-navy/70 max-w-3xl mx-auto">
            From healing retreats to adventure trips, online workshops to local meetups — 
            there are so many ways to step into your most authentic self alongside an incredible community.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {experiences.map((experience, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card hover className="p-8 text-center h-full">
                <div className="space-y-6">
                  <div className="text-5xl">{experience.icon}</div>
                  <h3 className="text-xl font-subheading font-semibold text-deep-navy">
                    {experience.title}
                  </h3>
                  <p className="text-deep-navy/70 leading-relaxed font-body">
                    {experience.description}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-deep-navy mb-4">
              Ready to Transform Your Life? ✨
            </h3>
            <p className="text-deep-navy/70 mb-6 font-body">
              Join thousands of women who've chosen courage over comfort and are living their most authentic lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Join Our Community
              </Button>
              <Button variant="outline" size="lg">
                Explore Experiences
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperiencesSection;
