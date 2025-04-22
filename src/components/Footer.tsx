
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/926d7d6a-1fb2-4ba0-a36f-d74e96414194.png" 
          alt="Aliyas Little Scholars Daycare Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-daycare-red transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-daycare-red transition-colors">Programs</a></li>
              <li><a href="#gallery" className="hover:text-daycare-red transition-colors">Gallery</a></li>
              <li><a href="#locations" className="hover:text-daycare-red transition-colors">Locations</a></li>
              <li><a href="#enrollment-form" className="hover:text-daycare-red transition-colors">Enroll Now</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-daycare-red" />
                <span>(267) 437-8766</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-daycare-red" />
                <span>info@aliyaslittlescholars.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Locations</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-daycare-red" />
                <span>1352 E. Lycoming St, Philadelphia PA 19124</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-daycare-red" />
                <span>5934 Chestnut St, Philadelphia PA 19139</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Hours</h3>
            <p className="mb-2">Regular Hours:</p>
            <p className="mb-4">Monday–Friday: 7 AM–5:30 PM</p>
            <p className="mb-2">Overnight Care:</p>
            <p>Monday–Friday: 11 PM–6:30 AM</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a 
            href="#" 
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Aliyas Little Scholars Daycare. All rights reserved.
          </p>
          <p className="mt-2">
            STATE LICENSED • FIRST-AID CPR/AED CERTIFIED • SUBSIDY ACCEPTED
          </p>
        </div>
      </div>
    </footer>
  );
}
