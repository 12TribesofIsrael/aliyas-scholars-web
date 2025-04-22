
import { Shield } from "lucide-react";

export function Accreditations() {
  const badges = [
    { title: "State Licensed", icon: <Shield className="w-full h-full" /> },
    { title: "CPR/AED Certified", icon: <Shield className="w-full h-full" /> },
    { title: "Early Learning Standards", icon: <Shield className="w-full h-full" /> },
    { title: "Quality Assurance", icon: <Shield className="w-full h-full" /> },
  ];
  
  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 mb-2 text-daycare-blue">
                {badge.icon}
              </div>
              <span className="text-sm font-semibold text-gray-700">{badge.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
