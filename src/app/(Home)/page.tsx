import HeroFeaturedToggle from './_components/HeroFeaturedToggle';
import LookingFor from './_components/LookingFor';
import RecommendedCarousel from './_components/RecommendedCarousel';
import CtaSection from './_components/CtaSection';
import Footer from './_components/Footer';


export default function HomePage() {

  return (
    <div className="min-h-screen bg-primary-background">
      <HeroFeaturedToggle />
      <LookingFor />
      <RecommendedCarousel />
      <CtaSection />
      <Footer />
    </div>
  );
}