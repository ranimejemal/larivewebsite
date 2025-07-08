
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-marron/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-playfair text-2xl font-bold text-white">
            La Rive d'Or
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-marron transition-colors font-poppins relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-marron transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-marron transition-colors font-poppins relative group"
            >
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-marron transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('shop')}
              className="text-white hover:text-marron transition-colors font-poppins relative group"
            >
              Buy Now
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-marron transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-marron transition-colors font-poppins relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-marron transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <Button className="bg-marron hover:bg-marron/80 text-white transition-colors">
            Order Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
