import type { Metadata } from "next";
import StructuredData from "@/components/SEO/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: "Life's For Living | Say Yes to Life",
  description: "Adventures that change how you see the world. Join Georgie on trips that are equal parts joy, courage and community.",
  keywords: "travel, adventure, group trips, women-led travel, life experiences, wanderlust",
  authors: [{ name: "Life's For Living" }],
  openGraph: {
    title: "Life's For Living | Say Yes to Life",
    description: "Adventures that change how you see the world. Join Georgie on trips that are equal parts joy, courage and community.",
    url: "https://lifesforliving.com",
    siteName: "Life's For Living",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Life's For Living - Adventure Travel",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life's For Living | Say Yes to Life",
    description: "Adventures that change how you see the world.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="website" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
