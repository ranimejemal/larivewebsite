
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const categories = ['All', 'Coffee', 'Croissants', 'Cakes'];

const featuredItems = [
  {
    id: 1,
    name: 'Premium Coffee Blend',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'Coffee',
    description: 'Our signature blend of premium arabica beans'
  },
  {
    id: 2,
    name: 'Artisan Croissant Box',
    price: '$18.50',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    category: 'Croissants',
    description: 'Freshly baked croissants, box of 6'
  },
  {
    id: 3,
    name: 'Chocolate Cake',
    price: '$32.00',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    category: 'Cakes',
    description: 'Rich chocolate cake with gold leaf decoration'
  },
  {
    id: 4,
    name: 'Espresso Collection',
    price: '$45.99',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
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
    <section id="shop" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gold mb-4">
            Shop Our Finest
          </h2>
          <p className="font-poppins text-lg text-beige max-w-2xl mx-auto mb-8">
            Take home the La Rive d'Or experience with our carefully curated selection 
            of premium products and artisanal treats.
          </p>

          {/* Category Filters */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`font-poppins transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-marron hover:bg-gold text-white' 
                    : 'border-marron text-marron hover:bg-marron hover:text-white'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Items Carousel */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {filteredItems.map((item, index) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-black border-marron/30 hover:border-gold/50 transition-all duration-500 transform hover:scale-105 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-playfair text-xl font-bold text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="font-poppins text-beige text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-poppins text-gold text-xl font-semibold">
                          {item.price}
                        </span>
                        <Button className="bg-marron hover:bg-gold text-white transition-colors">
                          Buy Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-gold border-gold hover:bg-gold hover:text-black" />
            <CarouselNext className="text-gold border-gold hover:bg-gold hover:text-black" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
