
import { useState } from 'react';
import OpeningAnimation from '@/components/OpeningAnimation';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MenuPreview from '@/components/MenuPreview';
import ShopSection from '@/components/ShopSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  if (showAnimation) {
    return <OpeningAnimation onComplete={handleAnimationComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <MenuPreview />
      <ShopSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
