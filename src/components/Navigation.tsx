
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
        ? 'bg-black/80 backdrop-blur-md border-b border-gold/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-playfair text-2xl font-bold text-gold">
            La Rive d'Or
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-gold transition-colors font-poppins"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-gold transition-colors font-poppins"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('shop')}
              className="text-white hover:text-gold transition-colors font-poppins"
            >
              Buy Now
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gold transition-colors font-poppins"
            >
              About Us
            </button>
          </div>

          <Button className="bg-marron hover:bg-gold text-white transition-colors">
            Order Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
