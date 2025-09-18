import React from "react";
import Image from "next/image";
import { TestimonialProps } from "@/types";
import Card from "./Card";

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  location,
  avatar,
}) => {
  return (
    <Card className="p-6">
      <div className="flex flex-col space-y-4">
        <div className="text-primary text-2xl">"</div>
        <blockquote className="text-deep-navy text-lg italic leading-relaxed">
          {quote}
        </blockquote>
        <div className="flex items-center space-x-3 pt-2">
          {avatar && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={avatar}
                alt={`${author} avatar`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <div className="font-semibold text-deep-navy">{author}</div>
            {location && (
              <div className="text-sm text-gray-600">{location}</div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
