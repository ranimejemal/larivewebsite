
import { useState, useEffect } from 'react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

const OpeningAnimation = ({ onComplete }: OpeningAnimationProps) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show logo after 500ms
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    // Show text after 2 seconds
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    // Complete animation after 4 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center flex-col">
      {/* Logo Image */}
      <div className={`transition-all duration-2000 ease-out ${
        showLogo ? 'animate-cup-slide' : 'translate-y-full opacity-0'
      }`}>
        <img 
          src="/lovable-uploads/a1d7b4bf-c4c5-4edf-b952-c1678a48c68e.png" 
          alt="La Rive d'Or Logo" 
          className="w-32 h-32 md:w-40 md:h-40 object-contain"
        />
      </div>

      {/* Text - positioned closer to logo */}
      <div className={`transition-all duration-1000 ease-out ${
        showText ? 'animate-fade-in' : 'opacity-0'
      }`}>
        <div className="mt-6">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white text-center">
            La Rive d'Or
          </h1>
          <p className="text-white text-center mt-4 text-lg font-poppins tracking-wider">
            Where Elegance Meets Aroma
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningAnimation;
