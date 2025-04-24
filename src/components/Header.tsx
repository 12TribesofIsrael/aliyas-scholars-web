
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToElement } from "@/lib/utils";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-daycare-blue mr-2" />
          <a href="tel:2674378766" className="text-daycare-blue font-nunito font-semibold">
            (267) 437-8766
          </a>
        </div>
        <div className="hidden md:block">
          <h1 className="text-2xl font-poppins font-bold text-daycare-blue">
            Aliyas Little Scholars
          </h1>
        </div>
        <Button 
          variant="default" 
          className="bg-daycare-red hover:bg-daycare-red/90 text-white"
          onClick={() => scrollToElement('enrollment-form')}
        >
          Book a Tour
        </Button>
      </div>
    </header>
  );
}
