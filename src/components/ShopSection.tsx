
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = ['All', 'Coffee', 'Croissants', 'Cakes'];

const featuredItems = [
  {
    id: 1,
    name: 'Premium Coffee Blend',
    price: '$24.99',
    category: 'Coffee',
    description: 'Our signature blend of premium arabica beans'
  },
  {
    id: 2,
    name: 'Artisan Croissant Box',
    price: '$18.50',
    category: 'Croissants',
    description: 'Freshly baked croissants, box of 6'
  },
  {
    id: 3,
    name: 'Chocolate Cake',
    price: '$32.00',
    category: 'Cakes',
    description: 'Rich chocolate cake with premium cocoa'
  },
  {
    id: 4,
    name: 'Espresso Collection',
    price: '$45.99',
    category: 'Coffee',
    description: 'Complete espresso experience kit'
  }
];

const ShopSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('shop');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? featuredItems 
    : featuredItems.filter(item => item.category === activeCategory);

  return (
    <section id="shop" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Shop Our Finest
          </h2>
          <p className="font-poppins text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Take home the La Rive d'Or experience with our carefully curated selection 
            of premium products and artisanal treats.
          </p>

          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`font-poppins transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-marron hover:bg-marron/80 text-white' 
                    : 'border-marron text-marron hover:bg-marron hover:text-white bg-transparent'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className={`bg-black border border-marron/30 hover:border-marron transition-all duration-500 transform hover:scale-105 group ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <h3 className="font-playfair text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="font-poppins text-white/70 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-white text-xl font-semibold">
                    {item.price}
                  </span>
                  <Button className="bg-marron hover:bg-marron/80 text-white transition-colors">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
