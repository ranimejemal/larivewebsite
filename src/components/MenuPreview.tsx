
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const menuItems = [
  {
    id: 1,
    name: 'Golden Cappuccino',
    price: '$4.50',
    category: 'Coffee'
  },
  {
    id: 2,
    name: 'Artisan Croissant',
    price: '$3.20',
    category: 'Pastry'
  },
  {
    id: 3,
    name: 'Signature Latte',
    price: '$5.00',
    category: 'Coffee'
  },
  {
    id: 4,
    name: 'French Éclair',
    price: '$4.80',
    category: 'Dessert'
  },
  {
    id: 5,
    name: 'Espresso Royale',
    price: '$3.80',
    category: 'Coffee'
  },
  {
    id: 6,
    name: 'Chocolate Tart',
    price: '$6.20',
    category: 'Dessert'
  }
];

const MenuPreview = () => {
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

    const element = document.getElementById('menu');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Our Creations
          </h2>
          <p className="font-poppins text-lg text-white/80 max-w-2xl mx-auto">
            Each creation is carefully crafted with the finest ingredients, 
            bringing you an experience of pure luxury and indulgence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={item.id} 
              className={`bg-black border border-marron/30 hover:border-marron transition-all duration-500 transform hover:scale-105 group ${
                isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-marron/20 text-marron text-sm font-poppins rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                  {item.name}
                </h3>
                
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-white text-xl font-semibold">
                    {item.price}
                  </span>
                  <button className="bg-marron hover:bg-marron/80 text-white px-4 py-2 rounded-md transition-colors font-poppins text-sm">
                    Add to Cart
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
