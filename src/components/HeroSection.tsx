
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Content */}
      <div className={`text-center px-6 transition-all duration-1000 ${
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
      }`}>
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Where Elegance<br />
          <span className="text-white">Meets Aroma</span>
        </h1>
        
        <p className="font-poppins text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          La Rive d'Or — your golden moment awaits.
        </p>

        <Button 
          onClick={scrollToMenu}
          className="bg-marron hover:bg-marron/80 text-white px-8 py-3 text-lg font-poppins transition-all duration-300 transform hover:scale-105"
        >
          Explore the Menu
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
