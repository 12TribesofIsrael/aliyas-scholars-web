
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Instagram } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

export function Footer() {
  return (
    <footer className="bg-daycare-blue text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <AspectRatio ratio={1} className="w-32">
              <img 
                src="/lovable-uploads/926d7d6a-1fb2-4ba0-a36f-d74e96414194.png" 
                alt="Aliyas Little Scholars Daycare Logo" 
                className="w-full h-full object-contain"
              />
            </AspectRatio>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-daycare-yellow" />
                <span>123 Learning Lane, Philadelphia, PA 19123</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-daycare-yellow" />
                <span>(267) 437-8766</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-daycare-yellow" />
                <span>help@aliyaslittlescholars.com</span>
              </div>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-daycare-yellow" />
                <div>
                  <p>Monday - Friday: 6:00 AM - 6:00 PM</p>
                  <p>Saturday: 7:00 AM - 5:00 PM</p>
                  <p className="text-daycare-yellow mt-2 font-semibold">Ages: 6 months - 13 years</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/aliyalittle.scholarsdaycare" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-daycare-blue p-3 rounded-full hover:bg-daycare-yellow hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/aliyaslittlescholars" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-daycare-blue p-3 rounded-full hover:bg-daycare-yellow hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@aliyaslittlescholars?_t=ZP-8w3Ltpy6HE7&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-daycare-blue p-3 rounded-full hover:bg-daycare-yellow hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/aliyas-little-scholars-daycare-985329363/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-daycare-blue p-3 rounded-full hover:bg-daycare-yellow hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; 2024 Aliyas Little Scholars Daycare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
