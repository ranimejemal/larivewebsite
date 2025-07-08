
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const menuImages = [
  {
    id: 1,
    src: '/lovable-uploads/a4164f3a-fb79-46c4-a530-6d2ec30043dc.png',
    alt: 'La Rive d\'Or Menu Page 1'
  },
  {
    id: 2,
    src: '/lovable-uploads/23a84b74-6900-4e3c-a366-9f06b2edb661.png',
    alt: 'La Rive d\'Or Menu Page 2'
  }
];

const MenuPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('menu');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const openImage = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="menu" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
              Our Creations
            </h2>
            <p className="font-poppins text-lg text-white/80 max-w-2xl mx-auto">
              Explore our complete menu of carefully crafted beverages and delicious treats, 
              each designed to provide you with an unforgettable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {menuImages.map((image, index) => (
              <Card 
                key={image.id} 
                className={`bg-black border border-marron/30 hover:border-marron transition-all duration-500 transform hover:scale-105 cursor-pointer group ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openImage(image.src)}
              >
                <CardContent className="p-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-poppins text-lg font-semibold">
                        Click to view full menu
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-full max-h-full">
            <img 
              src={selectedImage} 
              alt="Full menu view"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white bg-marron hover:bg-marron/80 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuPreview;
