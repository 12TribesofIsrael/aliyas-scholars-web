
import { Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Consultation() {
  return (
    <section id="consultation" className="py-16 bg-gradient-to-br from-daycare-blue to-blue-800">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-white mb-6">
              Start Your Daycare Journey
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Ready to open your own daycare center? Let me guide you through every step of the process 
              with personalized one-on-one consultations.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-poppins font-bold text-daycare-yellow mb-4">
                What You'll Learn A-Z:
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-daycare-yellow flex-shrink-0" />
                  <span>Licensing requirements and regulations</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-daycare-yellow flex-shrink-0" />
                  <span>Business planning and financial setup</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-daycare-yellow flex-shrink-0" />
                  <span>Curriculum development and educational programs</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-daycare-yellow flex-shrink-0" />
                  <span>Staff hiring and training procedures</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-daycare-yellow flex-shrink-0" />
                  <span>Safety protocols and facility setup</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-daycare-yellow flex-shrink-0" />
                  <span>Marketing and enrollment strategies</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="text-center mb-4">
                <span className="text-3xl font-poppins font-bold text-daycare-blue">$50</span>
                <span className="text-lg text-gray-600 ml-2">per hour</span>
              </div>
              <p className="text-center text-gray-700 mb-6">
                Personalized consultation sessions tailored to your needs
              </p>
              
              <div className="space-y-4">
                <a 
                  href="tel:(267) 437-8766"
                  className="flex items-center justify-center bg-daycare-red hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  (267) 437-8766
                </a>
                <a 
                  href="mailto:help@aliyaslittlescholars.com?subject=Daycare Consultation Request"
                  className="flex items-center justify-center bg-daycare-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  help@aliyaslittlescholars.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/3ac854a1-c7e7-4d47-a03f-ec740a51808b.png" 
                alt="Professional daycare consultant" 
                className="rounded-2xl shadow-2xl max-w-sm w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-daycare-yellow text-daycare-blue px-4 py-2 rounded-lg shadow-lg">
                <span className="font-poppins font-bold">Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
