// Home page containing the original landing page content
import { HeroSection } from '../components/HeroSection';
import { CarouselSection } from '../components/CarouselSection';
import { IntroCard } from '../components/IntroCard';
import { ImageGrid } from '../components/ImageGrid';
import { carouselSlides, gridImages } from '../data/mockData';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />
      
      {/* CAROUSEL SECTION */}
      <CarouselSection slides={carouselSlides} />
      
      {/* INTRO CARD */}
      <IntroCard />
      
      {/* MAIN CONTENT GRID */}
      <ImageGrid images={gridImages} />
    </>
  );
}
