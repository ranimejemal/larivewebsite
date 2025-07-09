
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = ['All', 'Coffee', 'Croissants', 'Snacks'];

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
    name: 'Brown Cookie',
    price: '6.00 DT',
    category: 'Snacks',
    image: '/lovable-uploads/4512f6b0-4b23-48f7-a09c-0f77fc84c610.png',
    description: 'Delicious chocolate chip cookie'
  },
  {
    id: 4,
    name: 'Cookie',
    price: '6.00 DT',
    category: 'Snacks',
    image: '/lovable-uploads/f8a32f5b-4790-4f6c-96e2-e68f0f7d1628.png',
    description: 'Rich red velvet cookie'
  },
  {
    id: 5,
    name: 'Cookie',
    price: '6.00 DT',
    category: 'Snacks',
    image: '/lovable-uploads/4b2b5c9d-a3a9-4dc9-be48-89e80c7b5180.png',
    description: 'Classic chocolate chip cookie'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className={`bg-black border border-marron/30 hover:border-marron transition-all duration-500 transform hover:scale-105 group ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                {item.image ? (
                  <div className="mb-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg mx-auto"
                    />
                  </div>
                ) : (
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                )}
                
                {item.image && (
                  <h3 className="font-playfair text-lg font-bold text-white mb-2">
                    {item.name}
                  </h3>
                )}
                
                {!item.image && (
                  <p className="font-poppins text-white/70 text-sm mb-4">
                    {item.description}
                  </p>
                )}
                
                <div className="space-y-3">
                  <div className="font-poppins text-white text-xl font-semibold">
                    {item.price}
                  </div>
                  <Button className="bg-marron hover:bg-marron/80 text-white transition-colors w-full">
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
