
import { useState, useEffect } from 'react';
import { Coffee } from 'lucide-react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

const OpeningAnimation = ({ onComplete }: OpeningAnimationProps) => {
  const [showCup, setShowCup] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show cup after 500ms
    const cupTimer = setTimeout(() => {
      setShowCup(true);
    }, 500);

    // Show logo after 2 seconds
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 2000);

    // Complete animation after 4 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(cupTimer);
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Coffee Cup */}
      <div className={`absolute transition-all duration-2000 ease-out ${
        showCup ? 'animate-cup-slide' : 'translate-y-full opacity-0'
      }`}>
        <Coffee size={120} className="text-marron" />
        {/* Steam effect */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div className="w-2 h-8 bg-white opacity-30 rounded-full animate-pulse"></div>
          <div className="w-2 h-6 bg-white opacity-20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-8 bg-white opacity-25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Logo */}
      <div className={`absolute transition-all duration-1000 ease-out ${
        showLogo ? 'animate-fade-in animate-glow' : 'opacity-0'
      }`}>
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gold text-center mt-32">
          La Rive d'Or
        </h1>
        <p className="text-beige text-center mt-4 text-lg font-poppins tracking-wider">
          Where Elegance Meets Aroma
        </p>
      </div>
    </div>
  );
};

export default OpeningAnimation;
