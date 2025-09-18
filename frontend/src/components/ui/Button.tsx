"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  disabled = false,
  type = "button",
}) => {
  const baseClasses = "font-body font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-block text-center";

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-lavender text-white shadow-lg",
    secondary: "bg-gradient-to-r from-soft-purple to-accent-pink text-deep-navy shadow-md",
    outline: "border-2 border-primary text-primary bg-white/80 backdrop-blur-sm shadow-sm",
  };

  const hoverClasses = {
    primary: "hover:from-primary/90 hover:to-lavender/90 hover:shadow-xl",
    secondary: "hover:from-soft-purple/90 hover:to-accent-pink/90 hover:shadow-lg",
    outline: "hover:bg-primary hover:text-white hover:shadow-md",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="block"
    >
      {children}
    </motion.span>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
