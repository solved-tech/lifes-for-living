import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutContent } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-off-white via-white to-soft-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-heading font-black text-deep-navy leading-tight">
                {aboutContent.title}
              </h2>
              <p className="text-xl font-subheading text-primary font-medium">
                {aboutContent.subtitle}
              </p>
              <p className="text-lg font-body text-deep-navy/80 leading-relaxed">
                {aboutContent.description}
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {aboutContent.values.map((value, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="text-4xl">{value.icon}</div>
                  <h3 className="font-heading font-semibold text-deep-navy text-lg">
                    {value.title}
                  </h3>
                  <p className="text-deep-navy/70 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={0.2} className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-teal/20 z-10"></div>
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg font-medium">Georgie's Photo</p>
                  <p className="text-sm">Adventure Creator</p>
                </div>
              </div>
              {/* Uncomment when you have the actual image */}
              {/* <Image
                src={aboutContent.image}
                alt="Georgie - Adventure Creator"
                fill
                className="object-cover"
              /> */}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-teal rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-10"></div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
