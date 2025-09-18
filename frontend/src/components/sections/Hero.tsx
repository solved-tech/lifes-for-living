"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { heroContent } from "@/data/content";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-off-white via-white to-soft-purple/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-soft-purple rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-lavender/60 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-20 w-20 h-20 bg-primary/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-soft-purple/60 rounded-full blur-2xl"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-4xl opacity-30 animate-bounce">🌸</div>
        <div className="absolute top-1/3 right-1/4 text-3xl opacity-40 animate-pulse">✨</div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl opacity-30 animate-bounce" style={{animationDelay: '1s'}}>🦋</div>
        <div className="absolute bottom-1/3 right-1/3 text-4xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}>💕</div>
        <div className="absolute top-1/2 left-1/6 text-2xl opacity-30 animate-bounce" style={{animationDelay: '0.5s'}}>🌺</div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main headline */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-deep-navy leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-primary via-lavender to-soft-purple bg-clip-text text-transparent">
              {heroContent.headline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl font-subheading text-deep-navy/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {heroContent.subheadline} ✨
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              href="/trips"
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroContent.primaryCTA}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="w-full sm:w-auto"
            >
              {heroContent.secondaryCTA}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-deep-navy/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-deep-navy/30 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
