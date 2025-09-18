import React from "react";
import { BadgeProps } from "@/types";

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium";
  
  const variantClasses = {
    default: "bg-off-white text-deep-navy border border-gray-200",
    primary: "bg-primary text-white",
    secondary: "bg-accent-teal text-white",
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <span className={combinedClasses}>
      {children}
    </span>
  );
};

export default Badge;
