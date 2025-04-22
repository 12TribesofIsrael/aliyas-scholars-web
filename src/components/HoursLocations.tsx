
import { MapPin } from "lucide-react";

interface LocationCardProps {
  address: string;
  googleMapsUrl: string;
  color: "red" | "blue" | "green" | "yellow";
}

function LocationCard({ address, googleMapsUrl, color }: LocationCardProps) {
  const bgColor = {
    red: "bg-daycare-red",
    blue: "bg-daycare-blue",
    green: "bg-daycare-green",
    yellow: "bg-daycare-yellow"
  }[color];
  
  return (
    <div className={`${bgColor} text-white rounded-lg shadow-lg p-6 md:p-8 h-full`}>
      <div className="flex items-start gap-4">
        <MapPin className="w-8 h-8 flex-shrink-0 mt-1" />
        <div>
          <p className="text-lg font-semibold mb-4">{address}</p>
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-daycare-blue font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}

export function HoursLocations() {
  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-heading mb-12">Hours & Locations</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-daycare-blue text-white rounded-lg shadow-lg p-6 md:p-8 h-full">
              <h3 className="text-2xl font-poppins font-bold mb-6">Hours of Operation</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Regular Hours</h4>
                <p className="text-lg">Monday–Friday: 7 AM–5:30 PM</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Overnight Care</h4>
                <p className="text-lg">Monday–Friday: 11 PM–6:30 AM</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <LocationCard 
                address="1352 E. Lycoming St, Philadelphia PA 19124"
                googleMapsUrl="https://maps.google.com/?q=1352+E.+Lycoming+St,+Philadelphia+PA+19124"
                color="red"
              />
              
              <LocationCard 
                address="5934 Chestnut St, Philadelphia PA 19139"
                googleMapsUrl="https://maps.google.com/?q=5934+Chestnut+St,+Philadelphia+PA+19139"
                color="green"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-4 text-gray-700">
            <div className="py-1 px-3 bg-daycare-yellow text-black rounded-full font-semibold">
              STATE LICENSED
            </div>
            <div className="py-1 px-3 bg-daycare-blue text-white rounded-full font-semibold">
              FIRST‑AID CPR/AED CERTIFIED
            </div>
            <div className="py-1 px-3 bg-daycare-green text-white rounded-full font-semibold">
              SUBSIDY ACCEPTED
            </div>
            <div className="py-1 px-3 bg-daycare-red text-white rounded-full font-semibold">
              BEFORE & AFTER CARE
            </div>
            <div className="py-1 px-3 bg-daycare-blue text-white rounded-full font-semibold">
              FREE MEALS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
