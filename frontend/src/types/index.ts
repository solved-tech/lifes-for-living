// Trip related types
export interface Trip {
  slug: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  priceGBP: number;
  spots: number;
  thumbnail: string;
  badges: string[];
  blurb: string;
  difficulty: "Chill" | "Active";
  popularity: number;
}

// Component prop types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  location?: string;
  avatar?: string;
}

export interface NewsletterFormProps {
  onSubmit: (email: string) => Promise<void>;
  className?: string;
}

// Filter types for trips page
export interface TripFilters {
  destination?: string;
  month?: string;
  priceRange?: [number, number];
  difficulty?: "Chill" | "Active" | "All";
}

export interface SortOption {
  value: string;
  label: string;
}

// Newsletter form state
export interface NewsletterState {
  email: string;
  status: "idle" | "loading" | "success" | "error";
  message?: string;
}

// Social media links
export interface SocialLink {
  platform: "instagram" | "youtube" | "tiktok";
  url: string;
  icon: React.ReactNode;
}

// Navigation items
export interface NavItem {
  label: string;
  href: string;
}
