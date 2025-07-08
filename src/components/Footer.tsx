
import { Instagram, Facebook, Twitter, MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-marron/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold text-gold mb-4">
              La Rive d'Or
            </h3>
            <p className="font-poppins text-beige mb-6 max-w-md">
              Where elegance meets aroma. Experience the finest coffee and pastries 
              in an atmosphere of pure luxury and sophistication.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-beige hover:text-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-beige hover:text-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-beige hover:text-gold transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3 font-poppins text-beige">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-gold" />
                <span>123 Golden Avenue, Paris</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gold" />
                <span>+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-4">
              Hours
            </h4>
            <div className="space-y-2 font-poppins text-beige">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gold" />
                <span className="text-sm">Mon-Fri: 7:00-20:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gold" />
                <span className="text-sm">Sat-Sun: 8:00-21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-marron/30 mt-8 pt-8 text-center">
          <p className="font-poppins text-beige text-sm">
            © 2024 La Rive d'Or. All rights reserved. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
