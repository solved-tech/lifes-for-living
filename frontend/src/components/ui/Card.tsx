"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardProps } from "@/types";

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
}) => {
  const baseClasses = "bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-soft-purple/20 overflow-hidden";
  const combinedClasses = `${baseClasses} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={combinedClasses}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;
