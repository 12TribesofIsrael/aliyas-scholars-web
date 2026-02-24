
import { Book } from "lucide-react";
import { Button } from "./ui/button";

export function EbookSection() {
  return (
    <section id="ebook" className="py-16 bg-white">
      <div className="container">
        <div className="bg-daycare-blue rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-white mb-4">
                Start Your Own Daycare e-Book
              </h2>
              
              <p className="text-white/90 text-lg mb-6">
                Thinking of opening your own childcare business? Our comprehensive e-book guides you through every step of the process, from licensing and regulations to curriculum planning and business management.
              </p>
              
              <p className="text-white/90 text-lg mb-8">
                Learn from our experience and avoid common pitfalls with this practical guide written by experienced childcare professionals.
              </p>
              
              <Button 
                size="lg"
                className="bg-daycare-yellow text-daycare-blue hover:bg-daycare-yellow/90"
                onClick={() => window.open('https://payhip.com/AliyasLittleScholars', '_blank')}
              >
                <Book className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/35de25f8-341e-4179-8c43-a310e03ad048.png" 
                alt="Children playing at Aliyas Little Scholars Daycare" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
