import { Button } from "./ui/button";
import { scrollToElement } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative pt-16 min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/lovable-uploads/4118629d-1857-4843-9b27-ea6fc399a326.png" 
          alt="Children playing at Aliyas Little Scholars Daycare" 
          className="w-full h-full object-cover object-top md:object-center"
          // object-top for mobile (show heads), center for md+ for best cropping
        />
      </div>
      
      
      <div className="container relative z-20 text-white">
        <div className="max-w-2xl py-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-extrabold mb-4">
            Fun-Based Learning Starts Here.
          </h1>
          
          <p className="text-lg md:text-xl mb-6">
            At @aliyaslittlescholars, we create play‑rich environments that spark curiosity, 
            encourage exploration, and help children grow in every way.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-daycare-yellow mr-2"></div>
              <span>Safe & Secure</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-daycare-yellow mr-2"></div>
              <span>Experienced Caregivers</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-daycare-yellow mr-2"></div>
              <span>Educational Activities</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-daycare-red hover:bg-daycare-red/90 text-white"
              onClick={() => scrollToElement('enrollment-form')}
            >
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:2674378766">Schedule Walk-Through</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
