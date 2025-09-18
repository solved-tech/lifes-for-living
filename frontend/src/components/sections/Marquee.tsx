import React from "react";
import { inspirationalWords } from "@/data/content";

const Marquee: React.FC = () => {
  // Duplicate words for seamless loop
  const duplicatedWords = [...inspirationalWords, ...inspirationalWords];

  return (
    <section className="py-8 bg-gradient-to-r from-accent-pink via-soft-purple to-lavender overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedWords.map((word, index) => (
            <span
              key={index}
              className="text-white text-2xl sm:text-3xl font-heading font-semibold mx-8 inline-block drop-shadow-sm"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
