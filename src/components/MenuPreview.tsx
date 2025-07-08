
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const menuItems = [
  {
    id: 1,
    name: 'Golden Cappuccino',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'Coffee'
  },
  {
    id: 2,
    name: 'Artisan Croissant',
    price: '$3.20',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    category: 'Pastry'
  },
  {
    id: 3,
    name: 'Signature Latte',
    price: '$5.00',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    category: 'Coffee'
  },
  {
    id: 4,
    name: 'French Éclair',
    price: '$4.80',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    category: 'Dessert'
  },
  {
    id: 5,
    name: 'Espresso Royale',
    price: '$3.80',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    category: 'Coffee'
  },
  {
    id: 6,
    name: 'Chocolate Tart',
    price: '$6.20',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
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
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gold mb-4">
            Our Creations
          </h2>
          <p className="font-poppins text-lg text-beige max-w-2xl mx-auto">
            Each creation is carefully crafted with the finest ingredients, 
            bringing you an experience of pure luxury and indulgence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={item.id} 
              className={`bg-gray-900 border-marron/30 hover:border-gold/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${
                isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-marron text-white px-3 py-1 rounded-full font-poppins text-sm">
                  {item.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-gold text-lg font-semibold">
                    {item.price}
                  </span>
                  <button className="bg-marron hover:bg-gold text-white px-4 py-2 rounded-md transition-colors font-poppins text-sm">
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
