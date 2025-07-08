
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gold mb-6">
              Our Story
            </h2>
            
            <div className="space-y-6 font-poppins text-beige text-lg leading-relaxed">
              <p>
                Nestled in the heart of elegance, <span className="text-gold font-semibold">La Rive d'Or</span> 
                represents more than just a café—it's a sanctuary where time slows down and every moment 
                becomes precious as gold.
              </p>
              
              <p>
                Our journey began with a simple vision: to create an oasis of luxury where the finest 
                coffee meets artisanal craftsmanship. Every cup we serve tells a story of passion, 
                precision, and the pursuit of perfection.
              </p>
              
              <p>
                From our carefully sourced beans to our handcrafted pastries, each creation is infused 
                with the golden touch that makes La Rive d'Or an experience unlike any other. We believe 
                that luxury isn't just about what you taste—it's about how it makes you feel.
              </p>
              
              <p className="text-gold font-medium">
                Welcome to your golden moment. Welcome to La Rive d'Or.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 border border-marron/30 rounded-lg">
                <div className="font-playfair text-3xl font-bold text-gold mb-2">150+</div>
                <div className="font-poppins text-beige text-sm">Premium Blends</div>
              </div>
              <div className="text-center p-4 border border-marron/30 rounded-lg">
                <div className="font-playfair text-3xl font-bold text-gold mb-2">5★</div>
                <div className="font-poppins text-beige text-sm">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="La Rive d'Or interior"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-playfair text-xl font-bold">Experience Luxury</p>
                <p className="font-poppins text-sm">Every Visit, Every Sip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
